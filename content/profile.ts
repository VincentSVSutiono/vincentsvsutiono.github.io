// PLACEHOLDER CONTENT — replace with your real info.
// This file drives the Hero, About, and Contact sections.

export interface Profile {
  name: string;
  bio: string; // About section paragraph(s) — can be multiple paragraphs joined by \n\n
  location?: string;
  avatarUrl?: string; // portrait/photo URL, e.g. "./Me.jpg"
  resumeUrl?: string; // link to a downloadable resume/CV, omit if none
  terminalLines?: string[]; // one-liners displayed sequentially on the terminal prompt
  links: {
    email: string; // used to build a mailto: link, e.g. "you@example.com"
    github?: string; // full URL
    linkedin?: string; // full URL
  };
}

export const profile: Profile = {
  name: "Vincent Sutiono",
  bio: `Graduated with a degree in Computer Engineering from Multimedia Nusantara University, with a strong focus on bridging the gap between hardware systems and modern software architecture.

Throughout my academic and project journey, I have built hands-on expertise spanning full-stack web engineering, microcontroller interfacing, and applied machine learning. I thrive on translating theoretical principles into robust, production-ready solutions.

Passionate about continuous learning and collaborative engineering, my objective is to deliver reliable, high-performance web applications and intelligent systems that solve tangible, real-world problems.`,
  location: "Tangerang, Indonesia",
  avatarUrl: "./me.webp",
  resumeUrl: "./CV.pdf",
  terminalLines: [
    "Computer Engineering Graduate @ Multimedia Nusantara University",
    "Passionate about web development, electronics & machine learning",
    "Building innovative full-stack & intelligent system solutions",
    "Transforming ideas into practical, real-world technology",
  ],
  links: {
    email: "vincentsvsutiono@gmail.com",
    github: "https://github.com/VincentSVSutiono",
    linkedin: "https://www.linkedin.com/in/vincent-sutiono/",
  },
};
