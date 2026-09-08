// PLACEHOLDER CONTENT — replace with your real projects.
// Renders as cards, matching the reference's Featured Projects section.
// Add/remove entries freely; the grid/layout must adapt to however many
// projects exist here — see AGENTS.md §1 (don't force-fit to the
// reference's example count of 3).

export interface Project {
  id: string; // unique, used for React keys — e.g. "proj-1"
  name: string;
  description: string;
  image: string; // path or URL to a screenshot/thumbnail
  liveUrl?: string; // deployed/live link — omit if none
  githubUrl?: string; // source code link — omit if private/none
  tags: string[]; // tech stack chips, e.g. ["Next.js", "TypeScript", "Vercel"]
  featured?: boolean; // optional: use to highlight top projects if you have many
}

export const projects: Project[] = [
  {
    id: "proj-1",
    name: "Placeholder Project One",
    description: "One or two sentences describing the problem this project solves and what makes it notable.",
    image: "/images/projects/placeholder-1.png",
    liveUrl: undefined,
    githubUrl: undefined,
    tags: ["Tech One", "Tech Two", "Tech Three"],
  },
  {
    id: "proj-2",
    name: "Placeholder Project Two",
    description: "Placeholder description.",
    image: "/images/projects/placeholder-2.png",
    tags: ["Tech One", "Tech Two"],
  },
];
