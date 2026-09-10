import React, { useState } from "react";
import { Mail, Copy, Check } from "lucide-react";
import { profile } from "../../content/profile";

const GithubIcon: React.FC<{ className?: string }> = ({
  className = "w-4 h-4",
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
  className = "w-4 h-4",
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

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.links.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Browser clipboard fallback if needed
      const textarea = document.createElement("textarea");
      textarea.value = profile.links.email;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-t-2 border-zinc-900 dark:border-zinc-800 transition-colors duration-200"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="font-mono text-xs uppercase px-3 py-1 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 font-bold tracking-wider inline-block mb-3 brutal-shadow-sm border border-zinc-900 dark:border-zinc-100">
            GET IN TOUCH
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-mono text-zinc-950 dark:text-zinc-50 uppercase">
            CONTACT ME
          </h2>
          <div className="h-1 w-12 sm:h-1.5 sm:w-16 bg-zinc-900 dark:bg-amber-400 mx-auto mt-2.5 mb-3" />
          <p className="font-mono text-xs sm:text-sm font-semibold text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
            I'm currently open to new opportunities and collaborations. Whether
            you have a question, a project in mind, or just want to connect,
            feel free to reach out!
          </p>
        </div>

        {/* Two-Card Neo-Brutalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {/* Card 1: Direct Email Card */}
          <div className="bg-white dark:bg-[#14151a] brutal-border brutal-shadow p-5 sm:p-6 md:p-7 lg:p-8 flex flex-col items-center justify-center text-center space-y-6 sm:space-y-8 h-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_var(--shadow-color)]">
            <div className="w-14 h-14 sm:w-16 sm:h-16 brutal-border bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-amber-400 brutal-shadow-sm">
              <Mail className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>

            <h3 className="font-mono text-lg sm:text-xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
              Send me an email
            </h3>

            <a
              href={`mailto:${profile.links.email}`}
              className="brutal-btn inline-flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-zinc-800 dark:hover:bg-amber-400 dark:hover:text-zinc-950 transition-colors"
            >
              <span>REACH OUT</span>
              <span aria-hidden="true">&gt;</span>
            </a>
          </div>

          {/* Card 2: Terminal & Socials Card */}
          <div className="bg-white dark:bg-[#14151a] brutal-border brutal-shadow p-5 sm:p-6 md:p-7 lg:p-8 flex flex-col justify-between space-y-6 h-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_var(--shadow-color)]">
            <div className="space-y-4">
              {/* Terminal Title Bar */}
              <div className="border-b border-zinc-200 dark:border-zinc-800 pb-3 flex items-center justify-between">
                <span className="font-mono text-xs sm:text-sm font-bold text-zinc-800 dark:text-zinc-200 tracking-wider">
                  &gt;_ VS_TERMINAL
                </span>
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                </div>
              </div>

              {/* Command Prompt */}
              <div className="font-mono text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
                <span className="text-zinc-400 dark:text-amber-400">➔</span>
                <span className="text-zinc-500 dark:text-zinc-400">~</span>
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                  git clone contact-info
                </span>
              </div>

              {/* Email Clipboard Box (Stable width so email is never cut off) */}
              <div className="brutal-border bg-zinc-50 dark:bg-[#18181b] px-3 py-2.5 sm:px-3.5 sm:py-3 flex items-center justify-between gap-2">
                <span className="font-mono text-[11px] sm:text-xs md:text-[12px] lg:text-sm tracking-tight text-zinc-800 dark:text-zinc-200 select-all font-medium whitespace-nowrap overflow-hidden">
                  {profile.links.email}
                </span>
                <div className="relative shrink-0">
                  <button
                    type="button"
                    onClick={handleCopy}
                    aria-label={
                      copied
                        ? "Email address copied"
                        : "Copy email address to clipboard"
                    }
                    title={
                      copied ? "Copied to clipboard!" : "Copy email address"
                    }
                    className="w-8 h-8 sm:w-8.5 sm:h-8.5 border border-zinc-900 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-700 brutal-shadow-sm transition-transform active:scale-95 flex items-center justify-center cursor-pointer"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-700 dark:text-zinc-300" />
                    )}
                  </button>

                  {/* Floating Copied Badge: floats on top, never steals space from email */}
                  {copied && (
                    <span className="absolute -top-7 right-0 font-mono text-[10px] font-bold px-1.5 py-0.5 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 border border-zinc-900 dark:border-zinc-200 brutal-shadow-sm whitespace-nowrap pointer-events-none">
                      COPIED!
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Social Links Row */}
            <div className="pt-4 border-t border-dashed border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 flex-wrap">
              {profile.links.github && (
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 transition-colors whitespace-nowrap"
                  title="Visit GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4 text-zinc-800 dark:text-zinc-200" />
                  <span className="gold-hover-link font-medium">
                    {profile.links.github
                      .replace(/^https?:\/\/(www\.)?/, "")
                      .replace(/\/$/, "")}
                  </span>
                </a>
              )}

              {profile.links.linkedin && (
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 font-mono text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 transition-colors whitespace-nowrap"
                  title="Visit LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#0a66c2] dark:text-[#38bdf8]" />
                  <span className="gold-hover-link font-medium">
                    {profile.links.linkedin
                      .replace(/^https?:\/\/(www\.)?/, "")
                      .replace(/\/$/, "")}
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
