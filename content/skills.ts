// PLACEHOLDER CONTENT — replace with your real skills.
// Grouped by category, matching the reference's tech-stack layout.
// Add/remove categories or skills freely; component must render however
// many categories and skills exist here.
//
// `icon` should be a recognizable identifier your icon set understands —
// e.g. a simple-icons/devicon slug ("javascript", "typescript", "react",
// "nodedotjs") or a local asset path. Confirm the exact icon source/library
// with the agent when building the Skills component, then keep these
// values consistent with whatever it picks.

export interface Skill {
  name: string; // display label, e.g. "TypeScript"
  icon: string; // icon identifier/slug — see note above
}

export interface SkillCategory {
  id: string; // unique, used for React keys — e.g. "languages"
  label: string; // display heading, e.g. "Languages"
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    label: "Languages",
    skills: [
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Python", icon: "python" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "React.js", icon: "react" },
      { name: "TailwindCSS", icon: "tailwindcss" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "Node.js", icon: "nodedotjs" },
    ],
  },
  // Add more categories as needed, e.g. "Databases", "Tools", "Cloud".
];
