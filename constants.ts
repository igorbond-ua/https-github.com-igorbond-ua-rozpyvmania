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
    brand: 'Hormone Paris',
    name: 'This is Not Gaba',
    description: 'Сучасний унісекс-аромат, заспокійливий та гармонічний.',
    notes: ['Лаванда', 'Османтус', 'Akigalawood'],
    imageUrl: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=600&h=600',
    isBestseller: true,
  },
  {
    id: '2',
    brand: 'Marc-Antoine Barrois',
    name: 'Ganymede',
    description: 'Мінімалістичний, шкіряно-металічний аромат із космічною атмосферою.',
    notes: ['Мандарин', 'Безсмертник', 'Замша'],
    imageUrl: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&q=80&w=600&h=600',
    isBestseller: true,
  },
  {
    id: '3',
    brand: 'Ex Nihilo',
    name: 'Blue Talisman',
    description: 'Свіжий, фруктово-квітковий унісекс-парфум із сучасною структурою.',
    notes: ['Груша', 'Апельсиновий цвіт', 'Амброфікс'],
    imageUrl: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&q=80&w=600&h=600',
    isBestseller: true,
  },
  {
    id: '4',
    brand: 'Amouage',
    name: 'Guidance',
    description: 'Ніжний та потужний водночас, з нотами груші, лісового горіха та квітів.',
    notes: ['Груша', 'Горіх', 'Сандал'],
    imageUrl: 'https://images.unsplash.com/photo-1583445095369-9c651e7e5d34?auto=format&fit=crop&q=80&w=600&h=600',
    isBestseller: true,
  },
  {
    id: '5',
    brand: 'Essential Parfums',
    name: 'Bois Imperial',
    description: 'Деревно-спеційний аромат із енергією зеленого лісу та пікантністю.',
    notes: ['Akigalawood', 'Vetiver', 'Перець тімур'],
    imageUrl: 'https://images.unsplash.com/photo-1519669556878-63bd08be769b?auto=format&fit=crop&q=80&w=600&h=600',
    isBestseller: true,
  },
  {
    id: '6',
    brand: 'Chloe Atelier Des Fleurs',
    name: 'Cedrus',
    description: 'Легко деревний, теплий аромат із ніжною природною чуттєвістю.',
    notes: ['Кардамон', 'Ветивер', 'Дерево'],
    imageUrl: 'https://images.unsplash.com/photo-1605652599661-0083212762a1?auto=format&fit=crop&q=80&w=600&h=600',
    isBestseller: true,
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