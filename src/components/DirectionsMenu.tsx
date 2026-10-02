import { useEffect, useRef, useState } from "react";

const PLACE = "Минск, улица Чкалова 30";
const QUERY = encodeURIComponent(PLACE);

const LINKS = [
  {
    label: "Яндекс Карты",
    hint: "открыть место на карте",
    href: `https://yandex.ru/maps/?text=${QUERY}`,
  },
  {
    label: "2ГИС",
    hint: "каталог организаций",
    href: `https://2gis.by/minsk/search/${QUERY}`,
  },
  {
    label: "Google Maps",
    hint: "поиск по адресу",
    href: `https://www.google.com/maps/search/?api=1&query=${QUERY}`,
  },
  {
    label: "Маршрут до заведения",
    hint: "построить от вашего местоположения",
    href: `https://yandex.ru/maps/?mode=routes&rtext=~${QUERY}`,
    divider: true,
  },
];

export function DirectionsMenu({ variant = "ghost" }: { variant?: "ghost" | "primary" }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const closeOnOutside = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", closeOnOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeOnOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative inline-block text-left">
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className={variant === "primary" ? "btn-primary" : "btn-ghost"}
      >
        Как добраться
      </button>
      {open ? (
        <div className="absolute top-full left-0 z-50 mt-3 w-64 overflow-hidden rounded-xl border border-cream/20 bg-ink/95 text-cream shadow-soft backdrop-blur-md">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className={`flex items-center justify-between gap-3 px-4 py-3 text-left text-sm transition-colors hover:bg-cream/10 ${
                link.divider ? "border-t border-cream/15" : ""
              }`}
            >
              <span>
                <span className="block">{link.label}</span>
                <span className="block text-xs text-cream/55">{link.hint}</span>
              </span>
              <span aria-hidden="true" className="text-cream/50">
                ↗
              </span>
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}
