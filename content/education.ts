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
    title: "Placeholder Milestone One",
    institution: "Institution Name",
    subtitle: "Degree or Program Name",
    dateRange: "20XX - 20XX",
    description: "Placeholder description of this stage of your journey.",
  },
  {
    id: "edu-2",
    title: "Placeholder Milestone Two",
    subtitle: "A pivot, self-taught phase, bootcamp, etc.",
    dateRange: "20XX - 20XX",
    description: "Placeholder description.",
  },
];
