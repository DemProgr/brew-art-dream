import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { recommendDrink } from "@/lib/recommend.functions";
import { MENU } from "@/lib/menu";

const CHIPS = ["Сладкое", "С молоком", "Покрепче", "Кислинка и цитрус", "Холодное", "Без кофеина"];

export function DrinkMatcher() {
  const recommend = useServerFn(recommendDrink);
  const [prefs, setPrefs] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ id: string; reason: string } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (prefs.trim().length < 3 || loading) return;
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const r = await recommend({ data: { prefs } });
      if (r.ok) setResult({ id: r.id, reason: r.reason });
      else setError(r.error);
    } catch {
      setError("Не удалось подобрать напиток. Попробуйте позже.");
    } finally {
      setLoading(false);
    }
  };

  const item = result ? MENU.find((m) => m.id === result.id) : null;

  return (
    <div className="rounded-2xl bg-foreground p-8 text-background md:p-12">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">AI-бариста</p>
      <h2 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">Подберём напиток под ваш вкус</h2>
      <p className="mt-3 max-w-[50ch] text-background/70">Расскажите, что любите — мы предложим напиток из меню.</p>
      <form onSubmit={submit} className="mt-8 space-y-4">
        <div className="flex flex-wrap gap-2">
          {CHIPS.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setPrefs((p) => (p ? `${p}, ${c.toLowerCase()}` : c))}
              className="rounded-full border border-background/25 px-3 py-1.5 text-xs transition-colors hover:border-primary hover:text-primary"
            >
              + {c}
            </button>
          ))}
        </div>
        <textarea
          value={prefs}
          onChange={(e) => setPrefs(e.target.value)}
          maxLength={500}
          rows={3}
          placeholder="Например: люблю сладкое, с молоком, но не слишком крепко"
          className="w-full resize-none rounded-xl border border-background/20 bg-background/5 p-4 text-background placeholder:text-background/40 focus:border-primary focus:outline-none"
        />
        <button
          type="submit"
          disabled={loading || prefs.trim().length < 3}
          className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity disabled:opacity-50"
        >
          {loading ? "Подбираем…" : "Подобрать напиток"}
        </button>
      </form>
      {error && <p className="mt-6 text-sm text-primary">{error}</p>}
      {item && result && (
        <div className="mt-8 rounded-xl bg-background p-6 text-foreground">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="font-display text-2xl font-bold">{item.name}</h3>
            <span className="font-display text-xl font-bold">{item.price} BYN</span>
          </div>
          <p className="mt-1 font-mono text-xs text-muted-foreground">{item.category} · {item.volume}</p>
          <p className="mt-4 text-pretty">{result.reason}</p>
        </div>
      )}
    </div>
  );
}
