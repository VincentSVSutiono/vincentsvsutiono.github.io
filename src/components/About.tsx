import React from "react";
import { ArrowUpRight } from "lucide-react";
import { profile } from "../../content/profile";
import { education } from "../../content/education";

export const About: React.FC = () => {
  // Split bio by double linebreaks if multiple paragraphs exist
  const bioParagraphs = profile.bio.split("\n\n");

  return (
    <section
      id="about"
      className="scroll-mt-16 pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
    >
      {/* ── PART A: ABOUT ME BLOCK ────────────────────────────────────────── */}
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 uppercase">
          About Me
        </h2>
        {/* Underline bar: gold yellow in dark mode */}
        <div className="h-1 w-12 sm:h-1.5 sm:w-14 bg-zinc-900 dark:bg-amber-400 mx-auto mt-2.5" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        {/* Left Column: Bio Narrative Card (Pure Bio Only) */}
        <div className="lg:col-span-7 flex flex-col justify-center bg-white dark:bg-[#14151a] brutal-border brutal-shadow-lg p-5 sm:p-7 md:p-8">
          <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm md:text-base leading-relaxed font-medium text-justify text-zinc-700 dark:text-zinc-300">
            {bioParagraphs.map((paragraph, idx) => (
              <p key={idx} className="font-sans text-justify">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Right Column: Brutalist Portrait Photo Frame (Natural Color, No Grayscale) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-[16rem] sm:max-w-[18rem] bg-white dark:bg-[#14151a] brutal-border brutal-shadow-lg p-2.5 sm:p-3">
            <div className="relative aspect-[4/5] w-full overflow-hidden brutal-border-sm bg-zinc-100 dark:bg-zinc-800">
              <img
                src={profile.avatarUrl || "./Me.jpg"}
                alt={profile.name}
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── PART B: EDUCATION & GROWTH SUB-BLOCK ─────────────────────────── */}
      <div className="mt-14 sm:mt-18 pt-8 border-t-2 border-dashed border-zinc-300 dark:border-zinc-800">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block mb-2">
            <span className="font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest px-2.5 py-0.5 bg-zinc-900 dark:bg-zinc-800 text-white dark:text-zinc-200 border border-zinc-900 dark:border-zinc-700">
              [ My Journey ]
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 uppercase">
            Education &amp; Growth
          </h3>
          {/* Underline bar: gold yellow in dark mode */}
          <div className="h-1 w-12 sm:h-1.5 sm:w-14 bg-zinc-900 dark:bg-amber-400 mx-auto mt-2.5 mb-3" />
          <p className="font-mono text-xs sm:text-sm font-semibold text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
            Academic foundation &amp; continuous learning — bridging computer engineering theory with real-world systems.
          </p>
        </div>

        {/* Timeline Rail Container with Fixed Spine Positioning */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Spine Line (Centered horizontally at left-4 sm:left-6) */}
          <div className="absolute left-4 sm:left-6 top-3 bottom-5 w-[2px] -translate-x-1/2 bg-zinc-900 dark:bg-zinc-700" />

          {/* Dynamic Timeline Entries */}
          <div className="space-y-6 sm:space-y-8">
            {education.map((item, index) => {
              const hasUrl = Boolean(item.institutionUrl);
              const isFirst = index === 0;

              return (
                <div key={item.id} className="relative pl-10 sm:pl-14">
                  {/* Timeline Checkpoint Node */}
                  <div
                    className={`absolute left-4 sm:left-6 top-6 -translate-x-1/2 w-5 h-5 rounded-full bg-white dark:bg-[#14151a] border-[2px] border-zinc-900 dark:border-zinc-600 flex items-center justify-center z-10 ${
                      isFirst
                        ? "dark:border-amber-400 dark:ring-3 dark:ring-amber-400/20"
                        : ""
                    }`}
                  >
                    {/* Dark mode gold/amber sprinkled accent node */}
                    <div
                      className={`w-2 h-2 rounded-full ${
                        isFirst
                          ? "bg-zinc-900 dark:bg-amber-400"
                          : "bg-zinc-700 dark:bg-zinc-400"
                      }`}
                    />
                  </div>

                  {/* Milestone Card */}
                  <div className="bg-white dark:bg-[#14151a] brutal-border brutal-shadow p-5 sm:p-6 md:p-7 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_var(--shadow-color)]">
                    {/* Header Row: Title & Date Range (Date on top on mobile, side-by-side on desktop) */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4">
                      <h4 className="order-2 sm:order-1 font-bold text-base sm:text-lg md:text-xl text-zinc-900 dark:text-zinc-100 tracking-tight">
                        {item.title}
                      </h4>
                      <span className="order-1 sm:order-2 self-start sm:self-center font-mono text-[11px] sm:text-xs font-bold px-2.5 py-1 border border-zinc-900 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 tracking-wider whitespace-nowrap">
                        {item.dateRange}
                      </span>
                    </div>

                    {/* Subtitle / Degree */}
                    {item.subtitle && (
                      <p className="font-mono text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1 font-semibold dark:font-medium">
                        {item.subtitle}
                      </p>
                    )}

                    {/* Institution with Conditional Link (Arrow + Native Tooltip) */}
                    {item.institution && (
                      <div className="mt-2 sm:mt-2.5">
                        {hasUrl ? (
                          <a
                            href={item.institutionUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-1.5 font-bold text-sm sm:text-base text-zinc-900 dark:text-zinc-100 hover:underline underline-offset-4 cursor-pointer"
                            title="Visit Website"
                          >
                            <span>{item.institution}</span>
                            <ArrowUpRight className="w-4 h-4 text-zinc-700 dark:text-amber-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </a>
                        ) : (
                          <span className="font-bold text-sm sm:text-base text-zinc-900 dark:text-zinc-100">
                            {item.institution}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Divider Line */}
                    <div className="border-b border-zinc-200 dark:border-zinc-800 my-3.5" />

                    {/* Description Copy */}
                    <p className="text-xs sm:text-sm text-justify text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans font-semibold">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
