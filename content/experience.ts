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
  company?: string; // optional: e.g. "Company Name" or omit for independent/freelance roles
  companyUrl?: string; // if the role/company should link out
  dateRange: string; // e.g. "2026 April - Present"
  description: string[]; // bullet points of responsibilities and impact
  tags?: string[]; // tools/tech used, shown as chips — omit or leave empty if none
}

// Ordered oldest-first (chronological).
// The UI component automatically reverses this array so that the newest entry (at the end of the array) renders at the top of the timeline.
export const experience: ExperienceEntry[] = [
  {
    id: "exp-1",
    role: "Frontend Developer (Internship)",
    company: "Smplhr",
    companyUrl: "https://www.smplhr.com",
    dateRange: "February 2025 - June 2025",
    description: [
      "Collaborated with the design team to translate UI/UX designs into functional and responsive components",
      "Integrated RESTful APIs to fetch and display dynamic data, ensuring seamless communication between frontend and backend systems",
    ],
    tags: ["React", "JavaScript", "Tailwind CSS", "Mockoon", "Tanstack Query"],
  },
  {
    id: "exp-2",
    role: "AI Engineer (Freelance)",
    dateRange: "2026",
    description: [
      "Designed and trained deep learning classification pipelines utilizing CNN and Vision Transformer architectures to accurately distinguish benign from malignant prostate tissue.",
      "Engineered data preprocessing and augmentation workflows on high-resolution histopathology imagery to standardize tissue patches and improve model generalization.",
      "Achieved 96%–97% accuracy and sensitivity with 98%–99% specificity, ensuring high diagnostic reliability and minimal false negative rates for clinical decision support.",
    ],
    tags: [
      "Python",
      "Deep Learning",
      "CNN",
      "Transformers",
      "Digital Pathology",
    ],
  },
];
