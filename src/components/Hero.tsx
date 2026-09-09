import React, { useState, useEffect } from "react";
import {
  Mail,
  FileText,
  ArrowUpRight,
  Terminal as TerminalIcon,
  MapPin,
} from "lucide-react";
import { profile } from "../../content/profile";

// Clean, accurate brand SVG icons
const GithubIcon: React.FC<{ className?: string }> = ({
  className = "w-5 h-5",
}) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({
  className = "w-5 h-5",
}) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export const Hero: React.FC = () => {
  const lines =
    profile.terminalLines && profile.terminalLines.length > 0
      ? profile.terminalLines
      : [
          "Computer Engineering undergraduate",
          "Building full-stack & intelligent systems",
        ];

  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = lines[currentLineIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayedText.length < currentFullText.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
      }, 45);
    } else if (!isDeleting && displayedText.length === currentFullText.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2500);
    } else if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentFullText.slice(0, displayedText.length - 1));
      }, 25);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setCurrentLineIndex((prev) => (prev + 1) % lines.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentLineIndex, lines]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-16 sm:pt-18 pb-2 sm:pb-3"
    >
      <div className="w-full max-w-3xl mx-auto">
        {/* Terminal Window Container */}
        <div className="bg-white dark:bg-[#14151a] brutal-border brutal-shadow-lg overflow-hidden transition-all duration-300">
          {/* Terminal Window Header Bar */}
          <div className="bg-zinc-900 dark:bg-black text-zinc-100 px-4 sm:px-5 py-2.5 sm:py-3 flex items-center justify-between border-b-2 border-zinc-900 dark:border-zinc-800 select-none">
            {/* Window control buttons */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#ff5f56] border border-zinc-800 inline-block"></span>
              <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#ffbd2e] border border-zinc-800 inline-block"></span>
              <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#27c93f] border border-zinc-800 inline-block"></span>
              <span className="ml-2 text-xs sm:text-sm font-mono text-zinc-400 hidden sm:inline-flex items-center gap-1.5">
                <TerminalIcon className="w-3.5 h-3.5" />
                bash — 80x24
              </span>
            </div>

            {/* Status indicator */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-mono text-emerald-400 tracking-wide font-medium hidden xs:inline-block">
                SYS_ONLINE
              </span>
            </div>
          </div>

          {/* Terminal Window Body */}
          <div className="p-5 sm:p-7 md:p-8 space-y-4 sm:space-y-5 md:space-y-6">
            {/* Shell Command Simulation */}
            <div className="font-mono text-[clamp(9px,2.6vw,14px)] sm:text-base text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5 whitespace-nowrap w-full select-none overflow-hidden">
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                visitor@portfolio
              </span>
              <span>:</span>
              <span className="text-blue-600 dark:text-blue-400">~</span>
              <span>$ ./welcome.sh</span>
              <span className="hidden min-[380px]:inline">--execute</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-1 sm:space-y-2">
              <p className="font-mono text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-400 tracking-wide font-medium">
                Hi, my name is
              </p>
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50">
                {profile.name}
                <span className="text-emerald-600 dark:text-emerald-400">
                  .
                </span>
              </h1>
            </div>

            {/* Interactive Terminal Prompt / Rotating One-Liners */}
            <div className="bg-zinc-950 dark:bg-black text-emerald-400 dark:text-emerald-300 p-3 sm:p-4 brutal-border brutal-shadow-sm font-mono text-xs sm:text-sm md:text-base min-h-[4rem] sm:min-h-[4.25rem] flex items-center">
              <div className="flex items-start gap-2 w-full">
                <span className="text-zinc-500 dark:text-zinc-600 select-none font-bold mt-0.5">
                  &gt;
                </span>
                <div className="text-zinc-100 dark:text-zinc-200 font-semibold leading-relaxed flex-1">
                  <span>{displayedText}</span>
                  <span className="inline-block w-2 sm:w-2.5 h-3.5 sm:h-4 bg-emerald-400 dark:bg-emerald-300 cursor-blink ml-1 align-middle"></span>
                </div>
              </div>
            </div>

            {/* Actions: View CV Button & 3 Social Icons */}
            <div className="pt-1 flex flex-wrap items-center gap-3 sm:gap-4">
              {/* View CV Button */}
              {profile.resumeUrl && (
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 sm:px-6 sm:py-3 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 font-mono text-sm sm:text-base font-bold brutal-btn uppercase tracking-wider group"
                  id="hero-view-cv-btn"
                >
                  <FileText className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-emerald-400 dark:text-emerald-600 transition-transform group-hover:scale-110" />
                  <span>View CV</span>
                  <ArrowUpRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-zinc-400 dark:text-zinc-600 group-hover:text-white dark:group-hover:text-zinc-950 transition-colors" />
                </a>
              )}

              {/* Divider for desktop */}
              <div className="hidden sm:block w-px h-9 bg-zinc-300 dark:bg-zinc-700 mx-1"></div>

              {/* 3 Social Media Logos */}
              <div className="flex items-center gap-2.5 sm:gap-3">
                {/* Email */}
                {profile.links.email && (
                  <a
                    href={`mailto:${profile.links.email}`}
                    className="w-10 h-10 sm:w-11 sm:h-11 bg-white dark:bg-[#18181b] text-zinc-900 dark:text-zinc-100 brutal-btn flex items-center justify-center group"
                    aria-label="Send Email to Vincent Sutiono"
                    id="hero-social-email"
                  >
                    <Mail className="w-5 h-5 sm:w-5.5 sm:h-5.5 transition-transform group-hover:scale-110 group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
                  </a>
                )}

                {/* GitHub */}
                {profile.links.github && (
                  <a
                    href={profile.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-11 sm:h-11 bg-white dark:bg-[#18181b] text-zinc-900 dark:text-zinc-100 brutal-btn flex items-center justify-center group"
                    aria-label="Visit GitHub Profile"
                    id="hero-social-github"
                  >
                    <GithubIcon className="w-5 h-5 sm:w-5.5 sm:h-5.5 transition-transform group-hover:scale-110 group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
                  </a>
                )}

                {/* LinkedIn */}
                {profile.links.linkedin && (
                  <a
                    href={profile.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-11 sm:h-11 bg-white dark:bg-[#18181b] text-zinc-900 dark:text-zinc-100 brutal-btn flex items-center justify-center group"
                    aria-label="Visit LinkedIn Profile"
                    id="hero-social-linkedin"
                  >
                    <LinkedinIcon className="w-5 h-5 sm:w-5.5 sm:h-5.5 transition-transform group-hover:scale-110 group-hover:text-emerald-600 dark:group-hover:text-emerald-400" />
                  </a>
                )}
              </div>
            </div>

            {/* Bottom Terminal Metadata Footnote */}
            <div className="pt-3.5 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-between text-xs sm:text-sm md:text-base font-mono text-zinc-500 dark:text-zinc-400 gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span className="font-semibold">STATUS: 200 OK</span>
              </div>
              {profile.location && (
                <div className="text-zinc-600 dark:text-zinc-300 font-medium flex items-center gap-1.5 sm:gap-2">
                  <MapPin className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-zinc-500 dark:text-zinc-400" />
                  <span>{profile.location}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
