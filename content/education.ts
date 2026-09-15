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

// Ordered oldest-first (chronological).
// The UI component automatically reverses this array so that the newest entry (at the end of the array) renders at the top of the timeline.
export const education: EducationEntry[] = [
  {
    id: "edu-1",
    title: "Computer Engineering",
    institution: "Multimedia Nusantara University",
    institutionUrl:
      "https://www.umn.ac.id/en/universitas-multimedia-nusantara/",
    subtitle: "Bachelor of Engineering (S.T.)",
    dateRange: "2022 — 2026",
    description:
      "Focusing on hardware-software co-design, full-stack web architectures, electronics, network, and intelligent systems. Gaining comprehensive practical experience in transforming theoretical principles into deployed technological solutions.",
  },
  {
    id: "edu-2",
    title: "Apple Developer Academy Learner",
    institution: "Apple Developer Academy @Bali",
    institutionUrl: "https://developeracademy.apps.binus.ac.id/bali/",
    subtitle: "Challenge-Based Learning (Design, Coding & Professional Skills)",
    dateRange: "March 2027 — December 2027",
    description:
      "Selected for an intensive 10-month multidisciplinary development program powered by Apple and BINUS. Focused on Challenge-Based Learning (CBL) to solve real-world problems, integrating user-centered UI/UX design, iOS development, project management, and collaborative cross-functional leadership.",
  },
];
