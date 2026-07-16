export interface Station {
  id: string;
  name: string;
  status: 'active' | 'development';
  accessType: string;
  accessSecond: string;
  coordinates: string;
}

export interface Faq {
  id: string;
  question: string;
  answer: string;
}

export interface Alert {
  id: string;
  type: 'info' | 'warning' | 'error';
  title: string;
  message: string;
  active: boolean;
}

export interface HelpArticle {
  id: string;
  slug: string;
  title: string;
  content: string;
}

export interface HelpCategory {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  articles: HelpArticle[];
}
