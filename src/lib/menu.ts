export type MenuItem = {
  id: string;
  category: string;
  name: string;
  description: string;
  volume: string;
  price: number;
};

// Demo prices — replace with the real menu from the café.
export const MENU: MenuItem[] = [
  { id: "espresso", category: "Классика", name: "Эспрессо", description: "Обжарка недели: плотное тело, ноты шоколада и ягод.", volume: "30 мл", price: 5 },
  { id: "americano", category: "Классика", name: "Американо", description: "Эспрессо с горячей водой — чистый и мягкий вкус.", volume: "250 мл", price: 6 },
  { id: "cappuccino", category: "С молоком", name: "Капучино", description: "Эспрессо и бархатная молочная пена.", volume: "250 мл", price: 7 },
  { id: "flatwhite", category: "С молоком", name: "Флэт уайт", description: "Двойной эспрессо, меньше молока — ярче кофейный вкус.", volume: "200 мл", price: 8 },
  { id: "raf", category: "С молоком", name: "Раф ванильный", description: "Сливки, эспрессо и ваниль — сладкий и нежный.", volume: "300 мл", price: 9 },
  { id: "v60", category: "Фильтр", name: "V60", description: "Ручная заварка, светлая обжарка: цветы, цитрус, кислинка.", volume: "250 мл", price: 10 },
  { id: "bumble", category: "Холодные", name: "Bumble Coffee", description: "Эспрессо, апельсиновый сок и карамельный сироп слоями.", volume: "350 мл", price: 9 },
  { id: "espresso-tonic", category: "Холодные", name: "Эспрессо-тоник", description: "Тоник, лёд и эспрессо — горьковатый и освежающий.", volume: "300 мл", price: 9 },
  { id: "cocoa", category: "Без кофе", name: "Какао", description: "Настоящий какао на молоке, можно на растительном.", volume: "300 мл", price: 7 },
  { id: "matcha", category: "Без кофе", name: "Матча латте", description: "Японский зелёный чай матча с молоком.", volume: "300 мл", price: 9 },
];
