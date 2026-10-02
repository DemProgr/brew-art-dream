import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { DirectionsMenu } from "@/components/DirectionsMenu";
import { Reveal } from "@/components/Reveal";
import { MENU } from "@/lib/menu";

const PHONE_HREF = "tel:+375259937468";
const PHONE = "+375 25 993-74-68";
const INSTAGRAM = "https://www.instagram.com/brewart.coffeeshop/";
const TEACHER_INSTAGRAM = "https://www.instagram.com/ermolaeva_yara/";
const TEACHER_HANDLE = "@ermolaeva_yara";

// Имя преподавателя English Club — подставьте, когда будет известно
const TEACHER_NAME = "";
// Фото преподавателя: положите файл в public/teacher.jpg и укажите путь здесь
const TEACHER_PHOTO = "/photo_4_2026-10-01_13-25-12.jpg";

const PHOTOS = {
  bar: "/photo_1_2026-10-01_13-25-12.jpg",
  croissants: "/photo_2_2026-10-01_13-25-12.jpg",
  beans: "/photo_3_2026-10-01_13-25-12.jpg",
  drinks: "/photo_4_2026-10-01_13-25-12.jpg",
  espresso: "/photo_5_2026-10-01_13-25-12.jpg",
};

const navLinks = [
  { href: "#menu", label: "Меню" },
  { href: "#bakery", label: "Выпечка" },
  { href: "#atmosphere", label: "Кофейня" },
  { href: "#english", label: "English Club" },
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
          "Кофейня Brew Art Specialty в Минске на ул. Чкалова, 30. Эспрессо, фильтр, круассаны и Bumble Coffee. Открыты ежедневно с 10:00 до 22:00.",
      },
      {
        property: "og:title",
        content: "Brew Art Specialty — спешалти-кофейня в Минске",
      },
      {
        property: "og:description",
        content: "Чкалова 30, Минск. Кофе, выпечка и места, чтобы поработать.",
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
            src={PHOTOS.bar}
            alt="Барная стойка кофейни Brew Art: эспрессо-машина, витрина с выпечкой и флажки над баром"
            width={828}
            height={1100}
            className="animate-slow-pan absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/15" />
          <div className="relative mx-auto w-full max-w-6xl px-5 pt-32 pb-14 text-cream sm:pb-20">
            <Reveal>
              <p className="eyebrow !text-cream/65">Кофейня · Минск, Чкалова 30</p>
              <h1 className="font-display mt-5 max-w-4xl text-[3.4rem] leading-[0.9] uppercase sm:text-8xl">
                Кофе на Чкалова, 30
              </h1>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-cream/80">
                Эспрессо и фильтр, круассаны к открытию, фирменный Bumble Coffee. Работаем ежедневно
                с 10:00 до 22:00.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#menu" className="btn-primary px-8 py-3 text-lg">
                  Смотреть меню
                </a>
                <DirectionsMenu />
              </div>
              <dl className="mt-12 grid max-w-3xl grid-cols-2 gap-5 border-t border-cream/20 pt-6 text-xs sm:grid-cols-3">
                <div>
                  <dt className="eyebrow !text-cream/50">Адрес</dt>
                  <dd className="mt-2">Чкалова, 30</dd>
                </div>
                <div>
                  <dt className="eyebrow !text-cream/50">Сегодня</dt>
                  <dd className="mt-2">с 10:00</dd>
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
                  src={PHOTOS.drinks}
                  alt="Два бокала с холодным напитком, десерт и ваза с ветками на деревянном столе"
                  width={828}
                  height={817}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <p className="eyebrow">Фирменный напиток</p>
              <h2 className="mt-4 text-4xl leading-[1.05] sm:text-6xl">Bumble Coffee</h2>
              <p className="mt-6 max-w-[42ch] leading-relaxed text-muted-foreground">
                Эспрессо, апельсиновый сок и сироп — заливаем слоями в холодный стакан со льдом.
                Первые глотки цитрусовые, ниже идёт кофе. Если не знаете, что заказать, берите его.
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
                <p className="eyebrow">Что наливаем</p>
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

        <section id="bakery" className="py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="eyebrow">Витрина</p>
              <h2 className="mt-4 max-w-md text-4xl leading-[1.05] sm:text-6xl">
                Круассаны утром, зерно домой
              </h2>
              <p className="mt-6 max-w-[46ch] leading-relaxed text-muted-foreground">
                Выпечку привозят каждое утро, к десяти на витрине уже полный ряд круассанов. Зерно
                держим на полке — можно попробовать в кофейне, а потом купить пачку с собой.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="grid grid-cols-2 gap-4">
                <div className="hover-zoom">
                  <img
                    src={PHOTOS.croissants}
                    alt="Круассаны с миндальной крошкой на деревянной доске"
                    width={828}
                    height={816}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
                <div className="hover-zoom">
                  <img
                    src={PHOTOS.beans}
                    alt="Пачки зернового кофе Filter Coffee на стеклянной полке"
                    width={828}
                    height={1025}
                    loading="lazy"
                    className="mt-8 aspect-[4/5] w-full object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="atmosphere" className="bg-surface py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="eyebrow">Кофейня</p>
              <h2 className="mt-4 max-w-md text-4xl leading-[1.05] sm:text-6xl">
                Эспрессо варят при вас
              </h2>
              <p className="mt-6 max-w-[46ch] leading-relaxed text-muted-foreground">
                Кофе молот на месте, машина Nuova Simonelli Appia 2. Внутри тепло и светло: есть
                столики у окна, розетки и вайфай — можно поработать пару часов, никто не будет
                торопить.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <DirectionsMenu variant="primary" />
                <a href={PHONE_HREF} className="btn-ghost">
                  Позвонить
                </a>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="hover-zoom">
                <img
                  src={PHOTOS.espresso}
                  alt="Эспрессо сливается из группы в кружку на весах"
                  width={828}
                  height={820}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        <section id="english" className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal className="mb-12 flex items-end justify-between gap-6">
              <div>
                <p className="eyebrow">Практика английского</p>
                <h2 className="mt-3 text-4xl leading-[1.05] sm:text-6xl">English Club</h2>
              </div>
              <span className="eyebrow pb-2">Воскресенье · 17:00</span>
            </Reveal>

            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <Reveal>
                <article className="border border-border bg-background p-6">
                  <div className="hover-zoom">
                    <img
                      src={TEACHER_PHOTO}
                      alt="Преподаватель English Club на встречах в кофейне Brew Art"
                      width={828}
                      height={817}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover"
                    />
                  </div>
                  <div className="mt-6 border-t border-border pt-4">
                    <p className="eyebrow">Преподаватель</p>
                    <h3 className="mt-3 text-2xl">
                      {TEACHER_NAME || "Преподаватель English Club"}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground">
                      Проводит воскресные встречи: знакомство, игры и викторины на английском,
                      грамматика и живой разговор в дружелюбной компании.
                    </p>
                    <a
                      href={TEACHER_INSTAGRAM}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-ghost mt-6 !px-6 !py-2.5 !normal-case !tracking-[0.06em]"
                    >
                      Instagram {TEACHER_HANDLE}
                    </a>
                  </div>
                </article>
              </Reveal>

              <Reveal delay={120}>
                <p className="eyebrow">Каждое воскресенье</p>
                <h3 className="mt-4 max-w-lg text-3xl leading-[1.1] sm:text-4xl">
                  Знакомимся, играем и говорим по-английски
                </h3>
                <p className="mt-6 max-w-[52ch] leading-relaxed text-muted-foreground">
                  Добрый день! Кофейня Brew Art собирает гостей на практику английского языка.
                  Сначала знакомимся с преподавателем и друг с другом, а потом играем в игры и
                  викторины на английском — подтянем грамматику и разговорный язык в приятной
                  компании.
                </p>

                <dl className="mt-8 grid grid-cols-2 gap-5 border-t border-border pt-6 text-sm sm:grid-cols-3">
                  <div>
                    <dt className="eyebrow">Когда</dt>
                    <dd className="mt-2">Воскресенье, 17:00</dd>
                  </div>
                  <div>
                    <dt className="eyebrow">Где</dt>
                    <dd className="mt-2">БрюАрт, Чкалова 30</dd>
                  </div>
                  <div>
                    <dt className="eyebrow">Уровень</dt>
                    <dd className="mt-2">B1 и выше</dd>
                  </div>
                  <div>
                    <dt className="eyebrow">Длительность</dt>
                    <dd className="mt-2">1,5–2 часа</dd>
                  </div>
                  <div>
                    <dt className="eyebrow">Ближайшая встреча</dt>
                    <dd className="mt-2">Это воскресенье</dd>
                  </div>
                  <div>
                    <dt className="eyebrow">Формат</dt>
                    <dd className="mt-2">Игры и викторины</dd>
                  </div>
                </dl>

                <div className="mt-8 border border-border bg-background p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 border-b border-border pb-5">
                    <div>
                      <p className="eyebrow">Стоимость</p>
                      <p className="mt-2 font-display text-4xl">30 BYN</p>
                    </div>
                    <p className="max-w-[24ch] text-sm text-muted-foreground">
                      В неё уже входит любой напиток на выбор
                    </p>
                  </div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 pt-5">
                    <div>
                      <p className="eyebrow">Предоплата</p>
                      <p className="mt-2 font-display text-4xl">15 BYN</p>
                    </div>
                    <p className="max-w-[30ch] text-sm text-muted-foreground">
                      Вносится за бронь места — в самом заведении или через ЕРИП. Остаток
                      оплачивается на месте.
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={PHONE_HREF} className="btn-primary">
                    Забронировать место
                  </a>
                  <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="btn-ghost">
                    Написать в Instagram
                  </a>
                </div>
                <p className="mt-5 text-sm text-muted-foreground">
                  Будем рады ответить на любые дополнительные вопросы!
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="contact" className="surface-dark py-16 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <Reveal>
              <p className="eyebrow !text-cream/50">Визит</p>
              <h2 className="mt-3 max-w-2xl text-4xl leading-[1.05] sm:text-6xl">
                Заходите на чашку.
              </h2>
              <p className="mt-5 max-w-[46ch] leading-relaxed text-cream/70">
                Столик бронировать не нужно — присаживайтесь, где понравится. Если идёте компанией
                или с ноутбуком на весь день, лучше прийти до обеда.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="btn-primary">
                  Instagram
                </a>
                <DirectionsMenu />
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
                  <dd className="mt-1">Ежедневно 10:00–22:00</dd>
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
          <p>Минск, Чкалова 30 · ежедневно 10:00–22:00</p>
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
