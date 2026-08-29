import type { Audience } from "../types";
import { IMG } from "./images";

// Accent colors are passed as hex values (not Tailwind class names) because
// Tailwind's JIT compiler can't detect dynamically-constructed class names
// like `bg-${accent}`. Static layout/typography still uses Tailwind classes
// throughout the components; only these per-item accent colors use inline
// style so the palette can vary safely per audience.
export const AUDIENCES: Audience[] = [
  {
    key: "clinicians",
    label: "Clinicians & Organisations",
    short: "Clinicians",
    title: "CPD-accredited writing for clinical practice",
    blurb:
      "Reflective and therapeutic writing modules designed for GPs, psychologists, allied health and care teams. Sharpen reflective practice, prevent burnout, and earn AMA-recognised CPD hours.",
    bullets: [
      "AMA-recognised CPD hours",
      "Reflective practice supervision",
      "Group cohorts & 1:1 mentoring",
      "Designed by a registered clinician",
    ],
    image: IMG.clinicians,
    cta: "Browse CPD courses",
    accent: "#6FB89E",
    accentDeep: "#2D6A4F",
    accentSoft: "#E6F2EC",
  },
  {
    key: "individuals",
    label: "Individuals & NDIS Participants",
    short: "Individuals",
    title: "Writing as a path to clarity and healing",
    blurb:
      "Personal programs and gentle, structured workshops for anyone making sense of grief, change, anxiety or recovery. NDIS plan-managed and self-managed participants welcome.",
    bullets: [
      "NDIS plan- & self-managed",
      "1:1 sessions and small groups",
      "Trauma-informed approach",
      "Self-paced and live cohorts",
    ],
    image: IMG.individuals,
    cta: "Find a program",
    accent: "#E07057",
    accentDeep: "#C75A41",
    accentSoft: "#FCE4DC",
  },
  {
    key: "organisations",
    label: "Organisations & Corporate Teams",
    short: "Organisations",
    title: "Wellbeing programs that make space to think",
    blurb:
      "Bespoke writing-based wellbeing for teams in healthcare, education, law and beyond. Half-day intensives, multi-week cohorts and leadership retreats — measurable, kind, and effective.",
    bullets: [
      "Custom in-house cohorts",
      "Leadership writing retreats",
      "Outcome reporting & evaluation",
      "On-site or virtual delivery",
    ],
    image: IMG.organisations,
    cta: "Request a proposal",
    accent: "#7FB9E0",
    accentDeep: "#4F94C7",
    accentSoft: "#E5F1F9",
  },
];
