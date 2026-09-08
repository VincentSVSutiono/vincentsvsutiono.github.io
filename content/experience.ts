// PLACEHOLDER CONTENT — replace with your real work experience.
// Renders as a timeline, matching the reference's Experience section.
// Add/remove entries freely; component must render however many exist here.
//
// NOTE: in the reference, tag chips (tools used) appeared on some entries
// but weren't visible on others in the screenshot crop — `tags` is kept
// optional here. Confirm with the agent whether every entry should show a
// tags row (even if some day the array is empty) or whether the row should
// disappear entirely for entries with no tags, and keep that consistent
// once decided.

export interface ExperienceEntry {
  id: string; // unique, used for React keys — e.g. "exp-1"
  role: string; // e.g. "Full-Stack Developer (Contract)"
  company: string; // e.g. "Company Name"
  companyNote?: string; // e.g. "(in collab. with Partner Co.)"
  companyUrl?: string; // if the role/company should link out
  dateRange: string; // e.g. "2026 April - Present"
  description: string;
  tags?: string[]; // tools/tech used, shown as chips — omit or leave empty if none
}

// Ordered newest-first (matches the reference).
export const experience: ExperienceEntry[] = [
  {
    id: "exp-1",
    role: "Placeholder Role One",
    company: "Placeholder Company",
    dateRange: "20XX - Present",
    description: "Placeholder description of responsibilities and impact in this role.",
    tags: ["Tool One", "Tool Two"],
  },
  {
    id: "exp-2",
    role: "Placeholder Role Two",
    company: "Placeholder Company",
    companyNote: "(optional collab/partner note)",
    dateRange: "20XX - 20XX",
    description: "Placeholder description.",
    tags: [],
  },
];
