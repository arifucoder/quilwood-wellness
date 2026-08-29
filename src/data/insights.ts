import type { InsightPost } from "../types";
import { IMG } from "./images";

export const INSIGHTS: InsightPost[] = [
  {
    tag: "Reflective practice",
    title: "Five-minute prompts for the end of a long shift",
    date: "April 22, 2026",
    img: IMG.insight1,
    colorClass: "text-sage-deep",
    softClass: "bg-sage-soft",
  },
  {
    tag: "Recovery",
    title: "Writing through grief — what the research actually says",
    date: "April 9, 2026",
    img: IMG.insight2,
    colorClass: "text-coral-deep",
    softClass: "bg-coral-soft",
  },
  {
    tag: "Workplace",
    title: "Why journalling is the cheapest leadership intervention",
    date: "March 28, 2026",
    img: IMG.insight3,
    colorClass: "text-sky-deep",
    softClass: "bg-sky-soft",
  },
];
