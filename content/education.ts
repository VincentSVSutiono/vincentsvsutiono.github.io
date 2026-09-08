// PLACEHOLDER CONTENT — replace with your real education/growth timeline.
// Renders as a timeline INSIDE the About section (not a standalone top-level
// section) — see AGENTS.md §1 for why. Add or remove entries freely; the
// timeline component must render however many entries exist here, in order.

export interface EducationEntry {
  id: string; // unique, used for React keys — e.g. "edu-1"
  title: string; // e.g. "Self-Taught Developer" or a degree name
  institution?: string; // e.g. "University of Medicine, Mandalay"
  institutionUrl?: string; // if the institution name should link out
  subtitle?: string; // e.g. "Bachelor of Medicine (M.B.B.S.)" or "The Pivot: From Medicine to Code"
  dateRange: string; // e.g. "2021 - 2022" or "2026 April - Present"
  description: string;
}

// Ordered oldest-first or newest-first — your call, just be consistent.
export const education: EducationEntry[] = [
  {
    id: "edu-1",
    title: "Undergraduate in Computer Engineering",
    institution: "Multimedia Nusantara University",
    institutionUrl:
      "https://www.umn.ac.id/en/universitas-multimedia-nusantara/",
    subtitle: "Bachelor of Computer Engineering",
    dateRange: "2022 — Present",
    description:
      "Focusing on hardware-software co-design, full-stack web architectures, electronics, and intelligent systems. Gaining comprehensive practical experience in transforming theoretical principles into deployed technological solutions.",
  },
  {
    id: "edu-2",
    title: "Self-Directed Technical Specialization",
    institution: "Autonomous Engineering & Practical Systems",
    subtitle: "Full-Stack Development & Machine Learning",
    dateRange: "2022 — Present",
    description:
      "Dedicated to continuous deep-dive learning into modern web application stacks, automated toolchains, microcontroller interfacing, and applied machine learning models.",
  },
  {
    id: "edu-3",
    title: "Vocational School Student",
    institution: "Vocational High School 2 Tangerang",
    subtitle: "Computer and Network Engineering",
    dateRange: "2019 - 2022",
    description:
      "Focusing on hardware-software co-design, full-stack web architectures, electronics, and intelligent systems. Gaining comprehensive practical experience in transforming theoretical principles into deployed technological solutions.",
  },
];
