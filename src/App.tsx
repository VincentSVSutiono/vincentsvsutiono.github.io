import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';

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

          {/* Scaffolding Anchor Target for Section 6: Projects (Saved for last) */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 opacity-40">
            <section id="projects" className="py-12 border-t brutal-border border-dashed text-center">
              <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider">// Section 6: Projects (Saved for last)</p>
            </section>
          </div>

          {/* Section 7: Contact */}
          <Contact />
        </main>

        {/* Footer */}
        <footer className="w-full py-6 text-center text-xs font-mono text-zinc-500 dark:text-zinc-400 border-t brutal-border bg-white/70 dark:bg-[#14151a]/70 backdrop-blur-sm">
          <p>© {new Date().getFullYear()} Vincent Sutiono. All rights reserved.</p>
        </footer>
      </div>
    </ThemeProvider>
  );
};

export default App;
