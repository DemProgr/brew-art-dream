import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { MENU } from "./menu";

export const recommendDrink = createServerFn({ method: "POST" })
  .inputValidator((data) => z.object({ prefs: z.string().trim().min(3).max(500) }).parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env["LOVABLE_API_KEY"];
    if (!apiKey) return { ok: false as const, error: "Сервис подбора временно недоступен." };

    const menuText = MENU.map((m) => `${m.id}: ${m.name} (${m.category}, ${m.price} BYN) — ${m.description}`).join("\n");
    const res = await fetch("https://ai.gateway.lovable.dev/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Lovable-API-Key": apiKey,
        "X-Lovable-AIG-SDK": "fetch",
      },
      body: JSON.stringify({
        model: "openai/gpt-6-astra",
        stream: true,
        store: false,
        reasoning: { effort: "low" },
        instructions:
          'Ты бариста кофейни Brew Art. Выбери ОДИН напиток строго из меню под вкусы гостя. Ответь только JSON без markdown: {"id":"<id из меню>","reason":"<1-2 тёплых предложения на русском, почему подходит>"}.\n\nМеню:\n' +
          menuText,
        input: [{ role: "user", content: data.prefs }],
      }),
    });

    if (!res.ok || !res.body) {
      if (res.status === 429) return { ok: false as const, error: "Слишком много запросов, попробуйте через минуту." };
      if (res.status === 402) return { ok: false as const, error: "Подбор временно недоступен." };
      return { ok: false as const, error: "Не удалось подобрать напиток. Попробуйте позже." };
    }

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let buf = "";
    let text = "";
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buf += decoder.decode(value, { stream: true });
      const lines = buf.split("\n");
      buf = lines.pop() ?? "";
      for (const line of lines) {
        if (!line.startsWith("data:")) continue;
        const payload = line.slice(5).trim();
        if (!payload || payload === "[DONE]") continue;
        try {
          const ev = JSON.parse(payload);
          if (ev.type === "response.output_text.delta") text += ev.delta;
        } catch {}
      }
    }

    const match = text.match(/\{[\s\S]*\}/);
    try {
      const parsed = JSON.parse(match?.[0] ?? "");
      const item = MENU.find((m) => m.id === parsed.id);
      if (!item) throw new Error();
      return { ok: true as const, id: item.id, reason: String(parsed.reason ?? "") };
    } catch {
      return { ok: false as const, error: "Не удалось подобрать напиток. Попробуйте описать иначе." };
    }
  });
