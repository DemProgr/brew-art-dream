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
  {
    id: "espresso",
    category: "Классика",
    name: "Эспрессо",
    description: "Двойной шот на зерне недели. С него начинают утро.",
    volume: "30 мл",
    price: 5,
  },
  {
    id: "americano",
    category: "Классика",
    name: "Американо",
    description: "Эспрессо и горячая вода. Пьют долго и часто с собой.",
    volume: "250 мл",
    price: 6,
  },
  {
    id: "cappuccino",
    category: "С молоком",
    name: "Капучино",
    description: "Эспрессо, молоко и тонкая пена. Без сиропов и выкрутасов.",
    volume: "250 мл",
    price: 7,
  },
  {
    id: "flatwhite",
    category: "С молоком",
    name: "Флэт уайт",
    description: "Два шота и мало молока — кофе тут заметнее, чем в капучино.",
    volume: "200 мл",
    price: 8,
  },
  {
    id: "raf",
    category: "С молоком",
    name: "Раф ванильный",
    description: "Сливки, эспрессо и ваниль. Сладкий, на любителя.",
    volume: "300 мл",
    price: 9,
  },
  {
    id: "v60",
    category: "Фильтр",
    name: "V60",
    description: "Завариваем воронкой. Светлая обжарка: цитрус, цветы, кислинка.",
    volume: "250 мл",
    price: 10,
  },
  {
    id: "bumble",
    category: "Холодные",
    name: "Bumble Coffee",
    description: "Эспрессо, апельсиновый сок и сироп — слоями, со льдом.",
    volume: "350 мл",
    price: 9,
  },
  {
    id: "espresso-tonic",
    category: "Холодные",
    name: "Эспрессо-тоник",
    description: "Тоник, лёд и эспрессо сверху. Горьковатое и бодрящее.",
    volume: "300 мл",
    price: 9,
  },
  {
    id: "cocoa",
    category: "Без кофе",
    name: "Какао",
    description: "Настоящий какао на молоке, можно на растительном.",
    volume: "300 мл",
    price: 7,
  },
  {
    id: "matcha",
    category: "Без кофе",
    name: "Матча латте",
    description: "Японский зелёный чай матча с молоком.",
    volume: "300 мл",
    price: 9,
  },
];
