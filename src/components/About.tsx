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
      className="scroll-mt-20 pt-16 pb-20 sm:pt-24 sm:pb-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      {/* ── PART A: ABOUT ME BLOCK ────────────────────────────────────────── */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 uppercase">
          About Me
        </h2>
        {/* Underline bar: gold yellow in dark mode */}
        <div className="h-1.5 w-16 bg-zinc-900 dark:bg-amber-400 mx-auto mt-3" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        {/* Left Column: Bio Narrative Card (Pure Bio Only) */}
        <div className="lg:col-span-7 flex flex-col justify-center bg-white dark:bg-[#14151a] brutal-border brutal-shadow-lg p-6 sm:p-8 md:p-10">
          <div className="space-y-4 sm:space-y-5 text-base sm:text-lg leading-relaxed font-medium text-justify text-zinc-700 dark:text-zinc-300">
            {bioParagraphs.map((paragraph, idx) => (
              <p key={idx} className="font-sans text-justify">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Right Column: Brutalist Portrait Photo Frame (Natural Color, No Grayscale) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-sm sm:max-w-md bg-white dark:bg-[#14151a] brutal-border brutal-shadow-lg p-3 sm:p-4">
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
      <div className="mt-20 sm:mt-28 pt-12 border-t-2 border-dashed border-zinc-300 dark:border-zinc-800">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest px-3 py-1 bg-zinc-900 dark:bg-zinc-800 text-white dark:text-zinc-200 border border-zinc-900 dark:border-zinc-700">
              [ My Journey ]
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 uppercase">
            Education &amp; Growth
          </h3>
          {/* Underline bar: gold yellow in dark mode */}
          <div className="h-1.5 w-16 bg-zinc-900 dark:bg-amber-400 mx-auto mt-3 mb-4" />
          <p className="font-mono text-base sm:text-lg font-semibold text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            An unconventional path — transforming theoretical foundations into
            intelligent, real-world engineering solutions.
          </p>
        </div>

        {/* Timeline Rail Container with Fixed Spine Positioning */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Spine Line (Centered horizontally at left-5 sm:left-7) */}
          <div className="absolute left-5 sm:left-7 top-4 bottom-6 w-[2.5px] -translate-x-1/2 bg-zinc-900 dark:bg-zinc-700" />

          {/* Dynamic Timeline Entries */}
          <div className="space-y-10 sm:space-y-12">
            {education.map((item, index) => {
              const hasUrl = Boolean(item.institutionUrl);
              const isFirst = index === 0;

              return (
                <div key={item.id} className="relative pl-12 sm:pl-16">
                  {/* Timeline Checkpoint Node (Centered at left-5 sm:left-7 to strictly match spine) */}
                  <div
                    className={`absolute left-5 sm:left-7 top-8 -translate-x-1/2 w-6 h-6 rounded-full bg-white dark:bg-[#14151a] border-[2.5px] border-zinc-900 dark:border-zinc-600 flex items-center justify-center z-10 ${
                      isFirst
                        ? "dark:border-amber-400 dark:ring-4 dark:ring-amber-400/20"
                        : ""
                    }`}
                  >
                    {/* Dark mode gold/amber sprinkled accent node */}
                    <div
                      className={`w-2.5 h-2.5 rounded-full ${
                        isFirst
                          ? "bg-zinc-900 dark:bg-amber-400"
                          : "bg-zinc-700 dark:bg-zinc-400"
                      }`}
                    />
                  </div>

                  {/* Milestone Card */}
                  <div className="bg-white dark:bg-[#14151a] brutal-border brutal-shadow p-7 sm:p-9 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[6px_6px_0px_0px_var(--shadow-color)]">
                    {/* Header Row: Title & Date Range (Date on top on mobile, side-by-side on desktop) */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-5">
                      <h4 className="order-2 sm:order-1 font-bold text-2xl sm:text-[1.65rem] text-zinc-900 dark:text-zinc-100 tracking-tight">
                        {item.title}
                      </h4>
                      <span className="order-1 sm:order-2 self-start sm:self-center font-mono text-sm sm:text-base font-bold px-3.5 py-1.5 border border-zinc-900 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 tracking-wider whitespace-nowrap">
                        {item.dateRange}
                      </span>
                    </div>

                    {/* Subtitle / Degree */}
                    {item.subtitle && (
                      <p className="font-mono text-base sm:text-lg text-zinc-500 dark:text-zinc-400 mt-1.5 font-semibold dark:font-medium">
                        {item.subtitle}
                      </p>
                    )}

                    {/* Institution with Conditional Link (Arrow + Native Tooltip) */}
                    {item.institution && (
                      <div className="mt-3">
                        {hasUrl ? (
                          <a
                            href={item.institutionUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 font-bold text-lg sm:text-xl text-zinc-900 dark:text-zinc-100 hover:underline underline-offset-4 cursor-pointer"
                            title="Visit Website"
                          >
                            <span>{item.institution}</span>
                            <ArrowUpRight className="w-5 h-5 text-zinc-700 dark:text-amber-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </a>
                        ) : (
                          <span className="font-bold text-lg sm:text-xl text-zinc-900 dark:text-zinc-100">
                            {item.institution}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Divider Line */}
                    <div className="border-b border-zinc-200 dark:border-zinc-800 my-5" />

                    {/* Description Copy */}
                    <p className="text-base sm:text-lg text-justify text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans font-semibold">
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
