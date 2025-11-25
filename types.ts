export type Page = 'home' | 'about' | 'academics' | 'admissions' | 'calendar' | 'news' | 'contact' | 'privacy';

export interface Event {
  id: string;
  title: string;
  date: string;
  category: 'academic' | 'sport' | 'cultural' | 'holiday';
  description: string;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum Term {
  FIRST = 'First Term',
  SECOND = 'Second Term',
  THIRD = 'Third Term',
}