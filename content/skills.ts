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
      { name: "C / C++", icon: "cpp" }, // Used in Arduino firmware
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "HTML", icon: "html5" },
      { name: "CSS", icon: "css3" },
      { name: "React", icon: "react" },
      { name: "TailwindCSS", icon: "tailwindcss" },
      { name: "Vite", icon: "vite" },
      { name: "Tanstack React Query", icon: "tanstack-query" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "Node.js", icon: "nodedotjs" },
      { name: "Express.js", icon: "express" },
      { name: "Prisma", icon: "prisma" },
    ],
  },
  {
    id: "database",
    label: "Database",
    skills: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
    ],
  },
  {
    id: "aiml",
    label: "AI & Machine Learning",
    skills: [
      { name: "PyTorch", icon: "pytorch" },
      { name: "TensorFlow", icon: "tensorflow" },
    ],
  },
  {
    id: "hardware",
    label: "Hardware & IoT",
    skills: [
      { name: "Arduino", icon: "arduino" },
      { name: "Sensors & Actuators", icon: "sensor" },
    ],
  },
  {
    id: "tools",
    label: "Developer Tools",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Postman", icon: "postman" },
      { name: "Mockoon", icon: "mockoon" },
    ],
  },
  {
    id: "agentic",
    label: "Agentic Tools",
    skills: [
      { name: "Antigravity", icon: "antigravity" },
      { name: "OpenCode", icon: "opencode" },
      { name: "OpenRouter", icon: "openrouter" },
    ],
  },
];
