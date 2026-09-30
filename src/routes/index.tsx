import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import bumbleCoffee from "@/assets/bumble-coffee.jpg";
import interior1 from "@/assets/interior-1.jpg";
import interior2 from "@/assets/interior-2.jpg";

const MENU = [
  {
    tag: "Эспрессо",
    name: "Эспрессо",
    note: "Обжарка недели, 30 мл",
    price: "6 BYN",
  },
  {
    tag: "Фильтр",
    name: "V60",
    note: "Свежая обжарка, 250 мл",
    price: "10 BYN",
  },
  {
    tag: "Молочный",
    name: "Флэт уайт",
    note: "Двойной эспрессо, молоко",
    price: "8 BYN",
  },
];

const REVIEWS = [
  {
    text: "«Лучший фильтр в городе. Прихожу каждое утро.»",
    author: "Анна · 5.0",
  },
  {
    text: "«Bumble Coffee — это любовь. Цитрус и эспрессо в идеальном балансе.»",
    author: "Дмитрий · 4.8",
  },
  {
    text: "«Уютно, тихо, отличная музыка. Моё место для работы.»",
    author: "Мария · 4.9",
  },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Brew Art Specialty — спешалти-кофейня в Минске",
      },
      {
        name: "description",
        content:
          "Спешалти-кофейня Brew Art Specialty в Минске, ул. Чкалова 30. Свежая обжарка, фирменный Bumble Coffee и уютное пространство. Пн–Пт 08:00–22:00, Сб–Вс 09:00–22:00.",
      },
      {
        property: "og:title",
        content: "Brew Art Specialty — спешалти-кофейня в Минске",
      },
      {
        property: "og:description",
        content:
          "Свежая обжарка, фирменный Bumble Coffee и пространство, где хочется задержаться. Чкалова 30, Минск.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  useReveal();

  return (
    <div className="min-h-screen bg-background font-body text-foreground antialiased">
      {/* NAV */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#top"
            className="font-display text-xl font-black tracking-tight"
          >
            BREW ART
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#menu" className="text-muted-foreground transition-colors hover:text-foreground">
              Меню
            </a>
            <a href="#atmosphere" className="text-muted-foreground transition-colors hover:text-foreground">
              Атмосфера
            </a>
            <a href="#reviews" className="text-muted-foreground transition-colors hover:text-foreground">
              Отзывы
            </a>
            <a href="#contact" className="text-muted-foreground transition-colors hover:text-foreground">
              Контакты
            </a>
          </div>
          <a
            href="tel:+375259937468"
            className="rounded-full bg-foreground px-4 py-2 font-mono text-xs text-background transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            +375 25 993-74-68
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="hero-glass-slide absolute right-0 top-0 h-full w-[55%] bg-primary/8 backdrop-blur-[2px]" />
          <div className="hero-glass-breathe absolute right-[5%] top-[15%] h-[70%] w-[35%] bg-primary/12 backdrop-blur-sm" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-28 md:pt-32 md:pb-40">
          <p className="hero-anim mb-6 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Спешалти-кофейня · Минск
          </p>
          <h1 className="hero-anim max-w-[14ch] text-balance font-display text-6xl leading-[0.9] font-black tracking-tight [animation-delay:0.1s] md:text-8xl">
            Кофе, который чувствуется
          </h1>
          <p className="hero-anim mt-8 max-w-[42ch] text-pretty text-lg text-muted-foreground [animation-delay:0.2s] md:text-xl">
            Обжарка недели, свежая выпечка и пространство, где хочется
            задержаться. Чкалова 30, Минск.
          </p>
          <div className="hero-anim mt-10 flex flex-wrap gap-4 [animation-delay:0.3s]">
            <a
              href="#menu"
              className="rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Смотреть меню
            </a>
            <a
              href="#contact"
              className="rounded-full border border-foreground/20 px-6 py-3 text-sm font-medium transition-colors hover:border-foreground"
            >
              Как добраться
            </a>
          </div>
        </div>
      </section>

      {/* SIGNATURE DRINK */}
      <section className="py-20 md:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <div data-reveal>
            <img
              src={bumbleCoffee}
              alt="Bumble Coffee — слоистый холодный напиток с эспрессо и апельсиновым соком"
              width={1024}
              height={1280}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-xl object-cover"
            />
          </div>
          <div data-reveal className="transition-delay-[120ms]">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Фирменный напиток
            </p>
            <h2 className="text-balance font-display text-4xl font-extrabold tracking-tight md:text-5xl">
              Bumble Coffee
            </h2>
            <p className="mt-6 max-w-[40ch] text-pretty text-muted-foreground">
              Эспрессо, апельсиновый сок и сироп — слоистый холодный напиток с
              ярким цитрусовым акцентом. Наша визитная карточка.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <span className="font-display text-3xl font-extrabold">9 BYN</span>
              <span className="text-sm text-muted-foreground">· 350 мл</span>
            </div>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="bg-surface py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div data-reveal className="mb-12 flex items-end justify-between">
            <h2 className="font-display text-4xl font-extrabold tracking-tight md:text-5xl">
              Меню
            </h2>
            <span className="font-mono text-xs text-muted-foreground">
              Цены в BYN
            </span>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {MENU.map((item) => (
              <div
                key={item.name}
                data-reveal
                className="rounded-xl bg-background p-6 ring-1 ring-foreground/5"
              >
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-primary">
                  {item.tag}
                </p>
                <h3 className="mb-4 font-display text-xl font-bold">{item.name}</h3>
                <p className="mb-6 text-sm text-muted-foreground">{item.note}</p>
                <span className="font-display text-2xl font-bold">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ATMOSPHERE */}
      <section id="atmosphere" className="py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <h2 data-reveal className="mb-12 font-display text-4xl font-extrabold tracking-tight md:text-5xl">
            Атмосфера
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div data-reveal>
              <img
                src={interior1}
                alt="Интерьер кофейни: светлая дубовая барная стойка и утренний свет"
                width={1280}
                height={960}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-xl object-cover"
              />
            </div>
            <div data-reveal className="transition-delay-[120ms]">
              <img
                src={interior2}
                alt="Бариста готовит кофе на профессиональной эспрессо-машине"
                width={1280}
                height={960}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-xl object-cover"
              />
            </div>
          </div>
          <p data-reveal className="mt-8 max-w-[50ch] text-pretty text-muted-foreground">
            Дерево, стекло и утренний свет. Дубовая барная стойка и
            профессиональная машина Nuova Simonelli Appia 2 — пространство, где
            можно работать, читать или просто быть.
          </p>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="bg-surface py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <h2 data-reveal className="mb-12 font-display text-4xl font-extrabold tracking-tight md:text-5xl">
            Отзывы
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {REVIEWS.map((review) => (
              <div
                key={review.author}
                data-reveal
                className="rounded-xl bg-background p-6 ring-1 ring-foreground/5"
              >
                <p className="mb-4 text-sm text-muted-foreground">{review.text}</p>
                <p className="font-mono text-xs">{review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
          <div>
            <h2 data-reveal className="mb-8 font-display text-4xl font-extrabold tracking-tight md:text-5xl">
              Контакты
            </h2>
            <div className="space-y-6">
              <div data-reveal>
                <p className="mb-1 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  Адрес
                </p>
                <p className="font-medium">г. Минск, ул. Чкалова 30</p>
              </div>
              <div data-reveal>
                <p className="mb-1 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  Часы работы
                </p>
                <p className="font-medium">Пн–Пт 08:00–22:00</p>
                <p className="font-medium">Сб–Вс 09:00–22:00</p>
              </div>
              <div data-reveal>
                <p className="mb-1 font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  Телефон
                </p>
                <a
                  href="tel:+375259937468"
                  className="font-medium transition-colors hover:text-primary"
                >
                  +375 (25) 993-74-68
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <a
              data-reveal
              href="https://www.instagram.com/brewart.coffeeshop/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-full bg-foreground px-6 py-4 font-medium text-background transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <span>Instagram</span>
              <span className="font-mono text-xs">@brewart.coffeeshop</span>
            </a>
            <a
              data-reveal
              href="https://t.me/brewart_coffeeshop"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between rounded-full border border-foreground/20 px-6 py-4 font-medium transition-colors hover:border-foreground"
            >
              <span>Telegram</span>
              <span className="font-mono text-xs">@brewart_coffeeshop</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <span className="font-display text-sm font-bold">BREW ART</span>
          <span className="font-mono text-xs text-muted-foreground">
            Спешалти-кофейня · Минск, Чкалова 30
          </span>
        </div>
      </footer>
    </div>
  );
}
