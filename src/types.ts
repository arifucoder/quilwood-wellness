export interface Audience {
  key: string;
  label: string;
  short: string;
  title: string;
  blurb: string;
  bullets: string[];
  image: string;
  cta: string;
  accent: string;
  accentDeep: string;
  accentSoft: string;
}

export interface Course {
  title: string;
  price: string;
  hours: string;
  img: string;
  tag: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  colorClass: string;
  accentClass: string;
}

export interface InsightPost {
  tag: string;
  title: string;
  date: string;
  img: string;
  colorClass: string;
  softClass: string;
}

export type AudienceLayout = "tabs" | "cards" | "rows";
