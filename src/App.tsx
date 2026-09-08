import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';

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

          {/* Scaffolding Anchor Targets for Subsequent Sections */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-20 opacity-40">
            <section id="about" className="py-12 border-t brutal-border border-dashed">
              <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider">// Section 2: About (Pending)</p>
            </section>
            <section id="skills" className="py-12 border-t brutal-border border-dashed">
              <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider">// Section 3: Skills (Pending)</p>
            </section>
            <section id="experience" className="py-12 border-t brutal-border border-dashed">
              <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider">// Section 4: Experience (Pending)</p>
            </section>
            <section id="projects" className="py-12 border-t brutal-border border-dashed">
              <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider">// Section 5: Projects (Pending)</p>
            </section>
            <section id="contact" className="py-12 border-t brutal-border border-dashed">
              <p className="font-mono text-xs text-zinc-500 uppercase tracking-wider">// Section 6: Contact (Pending)</p>
            </section>
          </div>
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
