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
  bio: "An undergraduate majoring in Computer Engineering at Multimedia Nusantara University, I am passionate about leveraging technology to address real-world challenges. Throughout my academic journey, I have gained hands-on experience in areas such as web development, electronics and machine learning, continually pushing myself to learn and grow. I enjoy transforming ideas into practical solutions and collaborating with others to bring projects to life. My goal is to apply my skills in full-stack development and intelligent systems to develop innovative and effective technological solutions.",
  location: "Tangerang, Indonesia",
  avatarUrl: "./me.webp",
  resumeUrl: "./CV.pdf",
  terminalLines: [
    "Computer Engineering undergraduate @ Multimedia Nusantara University",
    "Passionate about web development, electronics & machine learning",
    "Building innovative full-stack & intelligent system solutions",
    "Transforming ideas into practical, real-world technology"
  ],
  links: {
    email: "vincentsvsutiono@gmail.com",
    github: "https://github.com/VincentSVSutiono",
    linkedin: "https://www.linkedin.com/in/vincent-sutiono/",
  },
};

