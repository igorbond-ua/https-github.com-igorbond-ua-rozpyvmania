export interface Perfume {
  id: string;
  name: string;
  brand: string;
  description: string;
  notes: string[];
  imageUrl: string;
  isBestseller: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  comment: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}
