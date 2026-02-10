import { Perfume, Testimonial, FAQItem } from './types';
import { Instagram, Truck, ShieldCheck, Gem } from 'lucide-react';

export const INSTAGRAM_LINK = "https://www.instagram.com/rozpyvmania/";

export const NAV_LINKS = [
  { name: 'Головна', href: '#hero' },
  { name: 'Бестселери', href: '#catalog' },
  { name: 'Каталог', href: INSTAGRAM_LINK },
  { name: 'Про нас', href: '#features' },
  { name: 'Відгуки', href: '#reviews' },
];

export const FEATURES = [
  {
    title: "100% Оригінал",
    description: "Ми гарантуємо автентичність кожного флакона. Тільки оригінальна нішева парфумерія.",
    icon: ShieldCheck
  },
  {
    title: "Доставка по Україні",
    description: "Швидка відправка Новою Поштою та Укрпоштою у будь-який куточок України. Безпечне пакування.",
    icon: Truck
  },
  {
    title: "Ексклюзивні аромати",
    description: "Рідкісні та популярні аромати, які підкреслять вашу індивідуальність.",
    icon: Gem
  }
];

export const PERFUMES: Perfume[] = [
  {
    id: '1',
    brand: 'Maison Francis Kurkdjian',
    name: 'Baccarat Rouge 540',
    description: 'Легендарний аромат, що поєднує в собі ноти жасмину, шафрану та деревного бурштину.',
    notes: ['Жасмин', 'Шафран', 'Кедр', 'Сіра амбра'],
    imageUrl: 'https://images.unsplash.com/photo-1594035910387-406691aa6981?auto=format&fit=crop&q=80&w=600&h=600',
    isBestseller: true,
  },
  {
    id: '2',
    brand: 'Marc-Antoine Barrois',
    name: 'Ganymede',
    description: 'Космічний, мінеральний аромат з нотами мандарину, фіалки та замші. Справжній хіт.',
    notes: ['Мандарин', 'Шафран', 'Фіалка', 'Османтус'],
    imageUrl: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=600&h=600',
    isBestseller: true,
  },
  {
    id: '3',
    brand: 'Tiziana Terenzi',
    name: 'Kirke',
    description: 'Фруктовий вибух маракуї, персика та груші на мускусній базі. Шлейфовий та стійкий.',
    notes: ['Маракуя', 'Персик', 'Малина', 'Мускус'],
    imageUrl: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&q=80&w=600&h=600',
    isBestseller: true,
  },
  {
    id: '4',
    brand: 'Tom Ford',
    name: 'Lost Cherry',
    description: 'Спокусливий аромат стиглої вишні, мигдалю та лікеру. Теплий та пряний.',
    notes: ['Вишня', 'Лікер', 'Мигдаль', 'Троянда'],
    imageUrl: 'https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&q=80&w=600&h=600',
    isBestseller: false,
  },
  {
    id: '5',
    brand: 'Ex Nihilo',
    name: 'Fleur Narcotique',
    description: 'Витончений квітковий аромат з нотами півонії, лічі та бергамоту. Легкий, але помітний.',
    notes: ['Бергамот', 'Лічі', 'Півонія', 'Квітка апельсина'],
    imageUrl: 'https://images.unsplash.com/photo-1523293188086-b520e540967e?auto=format&fit=crop&q=80&w=600&h=600',
    isBestseller: true,
  },
  {
    id: '6',
    brand: 'Byredo',
    name: 'Bal d\'Afrique',
    description: 'Теплий, сонячний аромат, натхненний африканською культурою та паризьким авангардом.',
    notes: ['Бергамот', 'Лимон', 'Чорнобривці', 'Ветівер'],
    imageUrl: 'https://images.unsplash.com/photo-1615160655225-b46180327429?auto=format&fit=crop&q=80&w=600&h=600',
    isBestseller: false,
  },
];

export const REVIEWS: Testimonial[] = [
  {
    id: '1',
    name: 'Олена К.',
    comment: 'Замовляла Ganymede на розпив. Аромат оригінальний, тримається кілька днів! Дуже швидка відправка.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Марина С.',
    comment: 'Дякую за консультацію в Instagram! Підібрали ідеальний парфум для подарунка чоловікові.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Ірина В.',
    comment: 'Чудовий сервіс. Пакування надійне, нічого не пролилося. Обов’язково звернусь ще.',
    rating: 5,
  },
];

export const FAQS: FAQItem[] = [
  {
    question: "Чи оригінальна у вас продукція?",
    answer: "Так, ми працюємо виключно з оригінальною парфумерією. Ви можете перевірити батч-коди та переконатися в якості ароматів."
  },
  {
    question: "Як оформити замовлення?",
    answer: "Найшвидший спосіб - написати нам в Instagram Direct. Ми проконсультуємо щодо наявності, цін та допоможемо з вибором."
  },
  {
    question: "Що таке розпив парфумів?",
    answer: "Це можливість придбати невеликий об'єм (від 2 мл) дорогого нішевого аромату в атомайзері. Це ідеальний спосіб спробувати парфум перед покупкою повного флакона."
  }
];