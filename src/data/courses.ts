import type { Course } from "../types";
import { IMG } from "./images";

export const COURSES: Course[] = [
  {
    title: "Reflective Writing for Clinical Practice",
    price: "$249",
    hours: "12 CPD hrs",
    img: IMG.course1,
    tag: "Self-paced",
  },
  {
    title: "Narrative Medicine Foundations",
    price: "$329",
    hours: "18 CPD hrs",
    img: IMG.course2,
    tag: "Live cohort",
  },
  {
    title: "Writing Through Burnout & Recovery",
    price: "$189",
    hours: "8 CPD hrs",
    img: IMG.course3,
    tag: "Self-paced",
  },
  {
    title: "Therapeutic Letter Writing in Practice",
    price: "$269",
    hours: "10 CPD hrs",
    img: IMG.course4,
    tag: "Hybrid",
  },
];
