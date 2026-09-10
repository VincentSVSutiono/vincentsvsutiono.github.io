import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen relative overflow-x-hidden flex flex-col justify-between">
        {/* Sticky Header Navbar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow">
          {/* Section 1: Hero */}
          <Hero />

          {/* Section 2: About (including Education & Growth timeline) */}
          <About />

          {/* Section 3: Skills (My Tech Stack) */}
          <Skills />

          {/* Section 4: Experience */}
          <Experience />

          {/* Section 6: Projects */}
          <Projects />

          {/* Section 7: Contact */}
          <Contact />
        </main>

        {/* Footer */}
        <footer className="w-full py-6 text-center text-xs font-mono font-bold text-zinc-500 dark:text-zinc-400 border-t-2 border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-[#14151a]/70 backdrop-blur-sm">
          <p>
            © {new Date().getFullYear()} Vincent Sutiono. All rights reserved.
          </p>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default App;
