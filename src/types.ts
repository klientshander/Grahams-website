export interface Product {
  id: number;
  name: string;
  subtitle: string;
  category: string;
  price: number;
  badge?: string | null;
  img: string;
  description: string;
  ingredients: string;
  origin: string;
}

export interface Category {
  id: string;
  label: string;
  filterKey: string;
  count: number;
  img: string;
}

export interface CartItem {
  id: number;
  name: string;
  subtitle: string;
  price: number;
  qty: number;
  img: string;
}

export interface JournalPost {
  id: number;
  date: string;
  title: string;
  summary: string;
  readTime: string;
  img: string;
}

export interface Stockist {
  name: string;
  address: string;
  phone: string;
}

