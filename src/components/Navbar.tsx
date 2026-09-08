import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "HOME", href: "#hero" },
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CONTACT", href: "#contact" },
];

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  // Scroll spy to highlight current active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      const sections = [
        "hero",
        "about",
        "skills",
        "experience",
        "projects",
        "contact",
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full bg-[#faf9f6]/95 dark:bg-[#0c0d10]/95 backdrop-blur-md border-b-2 border-zinc-900 dark:border-zinc-800 transition-colors duration-200">
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-12 h-16 sm:h-20 flex items-center justify-end gap-3 sm:gap-6">
        {/* Desktop Navigation Links (Visible on Large Screens >= 1024px) */}
        <nav className="hidden lg:flex items-center gap-2 xl:gap-3">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace("#", "");
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.href);
                }}
                className={`font-mono text-sm xl:text-base font-bold tracking-wider px-3.5 py-2 xl:px-4 xl:py-2.5 transition-all duration-150 select-none ${
                  isActive
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 brutal-shadow-sm"
                    : "text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-200/70 dark:hover:bg-zinc-800/70"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action Controls: Theme Toggle + Tablet/Mobile Hamburger Trigger */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Light / Dark Mode Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            className="w-10 h-10 sm:w-11 sm:h-11 bg-white dark:bg-[#18181b] text-zinc-900 dark:text-zinc-100 brutal-btn flex items-center justify-center cursor-pointer transition-transform"
            aria-label="Toggle light/dark theme"
            id="theme-toggle-btn"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5 text-amber-400 transition-transform rotate-0 hover:rotate-45" />
            ) : (
              <Moon className="w-5 h-5 text-zinc-800 transition-transform -rotate-12 hover:rotate-0" />
            )}
          </button>

          {/* Tablet & Mobile Drawer Trigger with Icon Crossfade Animation */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden w-10 h-10 sm:w-11 sm:h-11 bg-white dark:bg-[#18181b] text-zinc-900 dark:text-zinc-100 brutal-btn flex items-center justify-center cursor-pointer transition-transform active:scale-95"
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            id="mobile-menu-toggle-btn"
          >
            <div className="relative w-5 h-5 flex items-center justify-center">
              <Menu
                className={`w-5 h-5 absolute transition-all duration-300 transform ${
                  mobileMenuOpen
                    ? "opacity-0 rotate-90 scale-75"
                    : "opacity-100 rotate-0 scale-100"
                }`}
              />
              <X
                className={`w-5 h-5 absolute transition-all duration-300 transform ${
                  mobileMenuOpen
                    ? "opacity-100 rotate-0 scale-100"
                    : "opacity-0 -rotate-90 scale-75"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Tablet & Mobile Menu Drawer with Silky Smooth Grid-Row Transition */}
      <div
        className={`lg:hidden grid transition-all duration-300 ease-out bg-[#eeeeee] dark:bg-[#14151a] ${
          mobileMenuOpen
            ? "grid-rows-[1fr] opacity-100 border-t border-zinc-900/15 dark:border-t-zinc-800 border-b-2 border-b-zinc-900 dark:border-b-zinc-800 shadow-xl"
            : "grid-rows-[0fr] opacity-0 pointer-events-none border-b-0 border-t-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="py-5 px-4 sm:px-8">
            <nav className="flex flex-col gap-2.5 max-w-lg mx-auto">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item.href);
                    }}
                    style={{
                      transitionDelay: mobileMenuOpen
                        ? `${index * 30}ms`
                        : "0ms",
                    }}
                    className={`font-mono text-sm sm:text-base font-bold tracking-wider px-4 py-3 brutal-border-sm transition-all duration-200 transform ${
                      mobileMenuOpen
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-2 opacity-0"
                    } ${
                      isActive
                        ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 brutal-shadow-sm"
                        : "bg-white dark:bg-[#18181b] text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:translate-x-1"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
