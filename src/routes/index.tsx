import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { Reveal } from "@/components/Reveal";
import { MENU } from "@/lib/menu";
import bumbleCoffee from "@/assets/bumble-coffee.jpg";
import interior1 from "@/assets/interior-1.jpg";
import interior2 from "@/assets/interior-2.jpg";

const PHONE_HREF = "tel:+375259937468";
const PHONE = "+375 25 993-74-68";
const INSTAGRAM = "https://www.instagram.com/brewart.coffeeshop/";
const TELEGRAM = "https://t.me/brewart_coffeeshop";

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

const navLinks = [
  { href: "#menu", label: "Меню" },
  { href: "#atmosphere", label: "Атмосфера" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contact", label: "Контакты" },
];

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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="overflow-x-hidden">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-cream/10 bg-ink/90 text-cream backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <a href="#top" className="font-display text-2xl uppercase">
            Brew Art
          </a>
          <nav className="hidden items-center gap-8 text-[0.7rem] tracking-[0.2em] uppercase sm:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="opacity-70 transition hover:opacity-100"
              >
                {link.label}
              </a>
            ))}
            <a href={PHONE_HREF} className="btn-primary !px-6 !py-2.5">
              Позвонить
            </a>
          </nav>
          <button
            type="button"
            aria-label="Меню навигации"
            onClick={() => setMenuOpen((value) => !value)}
            className="text-[0.7rem] tracking-[0.2em] uppercase sm:hidden"
          >
            {menuOpen ? "Закрыть" : "Меню"}
          </button>
        </div>
        {menuOpen ? (
          <nav className="flex flex-col gap-4 border-t border-cream/10 px-5 py-5 text-sm tracking-[0.14em] uppercase sm:hidden">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href={PHONE_HREF} className="btn-primary">
              Позвонить
            </a>
          </nav>
        ) : null}
      </header>

      <main>
        <section id="top" className="relative flex min-h-[92svh] items-end overflow-hidden">
          <img
            src={interior1}
            alt="Интерьер кофейни Brew Art: дубовая барная стойка и утренний свет"
            width={1280}
            height={960}
            className="animate-slow-pan absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/15" />
          <div className="relative mx-auto w-full max-w-6xl px-5 pt-32 pb-14 text-cream sm:pb-20">
            <Reveal>
              <p className="eyebrow !text-cream/65">Спешалти-кофейня · Чкалова, 30</p>
              <h1 className="font-display mt-5 max-w-4xl text-[3.4rem] leading-[0.9] uppercase sm:text-8xl">
                Кофе, который чувствуется
              </h1>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-cream/80">
                Обжарка недели, свежая выпечка и пространство, где хочется задержаться. Минск,
                Чкалова 30.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#menu" className="btn-primary px-8 py-3 text-lg">
                  Смотреть меню
                </a>
                <a href="#contact" className="btn-ghost">
                  Как добраться
                </a>
              </div>
              <dl className="mt-12 grid max-w-3xl grid-cols-2 gap-5 border-t border-cream/20 pt-6 text-xs sm:grid-cols-3">
                <div>
                  <dt className="eyebrow !text-cream/50">Адрес</dt>
                  <dd className="mt-2">Чкалова, 30</dd>
                </div>
                <div>
                  <dt className="eyebrow !text-cream/50">Сегодня</dt>
                  <dd className="mt-2">с 08:00</dd>
                </div>
                <div>
                  <dt className="eyebrow !text-cream/50">Телефон</dt>
                  <dd className="mt-2">
                    <a href={PHONE_HREF}>{PHONE}</a>
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div className="hover-zoom">
                <img
                  src={bumbleCoffee}
                  alt="Bumble Coffee — слоистый холодный напиток с эспрессо и апельсиновым соком"
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <p className="eyebrow">Фирменный напиток</p>
              <h2 className="mt-4 text-4xl leading-[1.05] sm:text-6xl">Bumble Coffee</h2>
              <p className="mt-6 max-w-[42ch] leading-relaxed text-muted-foreground">
                Эспрессо, апельсиновый сок и сироп — слоистый холодный напиток с ярким цитрусовым
                акцентом. Наша визитная карточка.
              </p>
              <div className="mt-8 flex items-baseline gap-4 border-t border-border pt-6">
                <span className="font-display text-4xl">9 BYN</span>
                <span className="eyebrow">350 мл</span>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="menu" className="bg-surface py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal className="mb-12 flex items-end justify-between gap-6">
              <div>
                <p className="eyebrow">Карта кофе</p>
                <h2 className="mt-3 text-4xl leading-[1.05] sm:text-6xl">Меню</h2>
              </div>
              <span className="eyebrow pb-2">Цены в BYN</span>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {MENU.map((item, index) => (
                <Reveal key={item.id} delay={(index % 3) * 100}>
                  <article className="group h-full border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft">
                    <p className="eyebrow">{item.category}</p>
                    <h3 className="mt-4 text-2xl">{item.name}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">{item.description}</p>
                    <div className="mt-8 flex items-baseline justify-between gap-3 border-t border-border pt-4">
                      <span className="font-display text-2xl">{item.price} BYN</span>
                      <span className="eyebrow">{item.volume}</span>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="atmosphere" className="py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="eyebrow">Пространство</p>
              <h2 className="mt-4 max-w-md text-4xl leading-[1.05] sm:text-6xl">
                Дерево, стекло и утренний свет
              </h2>
              <p className="mt-6 max-w-[46ch] leading-relaxed text-muted-foreground">
                Дубовая барная стойка и профессиональная машина Nuova Simonelli Appia 2 — место, где
                можно работать, читать или просто быть.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="btn-primary">
                  Забронировать стол
                </a>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="hover-zoom">
                <img
                  src={interior2}
                  alt="Бариста готовит кофе на профессиональной эспрессо-машине"
                  width={1280}
                  height={960}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section id="reviews" className="bg-surface py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal className="mb-12">
              <p className="eyebrow">Гости</p>
              <h2 className="mt-3 text-4xl leading-[1.05] sm:text-6xl">Отзывы</h2>
            </Reveal>
            <div className="grid gap-5 md:grid-cols-3">
              {REVIEWS.map((review, index) => (
                <Reveal key={review.author} delay={index * 100}>
                  <figure className="h-full border border-border bg-background p-6">
                    <blockquote className="text-[0.95rem] leading-relaxed text-muted-foreground">
                      {review.text}
                    </blockquote>
                    <figcaption className="eyebrow mt-6 border-t border-border pt-4">
                      {review.author}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="surface-dark py-16 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <Reveal>
              <p className="eyebrow !text-cream/50">Визит</p>
              <h2 className="mt-3 max-w-2xl text-4xl leading-[1.05] sm:text-6xl">
                Заходите за чашкой.
              </h2>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="btn-primary">
                  Instagram
                </a>
                <a href={TELEGRAM} target="_blank" rel="noreferrer" className="btn-ghost">
                  Telegram
                </a>
                <a href={PHONE_HREF} className="btn-ghost">
                  Позвонить
                </a>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <dl className="space-y-5 border-l border-cream/20 pl-6 text-sm">
                <div>
                  <dt className="eyebrow !text-cream/50">Адрес</dt>
                  <dd className="mt-1">г. Минск, ул. Чкалова 30</dd>
                </div>
                <div>
                  <dt className="eyebrow !text-cream/50">Часы работы</dt>
                  <dd className="mt-1">Пн–Пт 08:00–22:00</dd>
                  <dd className="mt-1">Сб–Вс 09:00–22:00</dd>
                </div>
                <div>
                  <dt className="eyebrow !text-cream/50">Контакты</dt>
                  <dd className="mt-1">
                    <a href={PHONE_HREF}>{PHONE}</a>
                  </dd>
                  <dd className="mt-1">
                    <a href={INSTAGRAM} target="_blank" rel="noreferrer">
                      @brewart.coffeeshop
                    </a>
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-cream/10 bg-ink/50 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-xl uppercase text-cream">Brew Art</p>
          <p>Спешалти-кофейня · Минск, Чкалова 30</p>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-cream"
          >
            @brewart.coffeeshop
          </a>
        </div>
      </footer>
    </div>
  );
}
