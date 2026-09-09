import React from "react";
import { ArrowUpRight } from "lucide-react";
import { experience } from "../../content/experience";

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-t-2 border-zinc-900 dark:border-zinc-800 transition-colors duration-200"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="font-mono text-xs uppercase px-3 py-1 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 font-bold tracking-wider inline-block mb-3 brutal-shadow-sm border border-zinc-900 dark:border-zinc-100">
            MY PATH
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-mono text-zinc-950 dark:text-zinc-50 uppercase">
            EXPERIENCE
          </h2>
          <div className="h-1 w-12 sm:h-1.5 sm:w-16 bg-zinc-900 dark:bg-amber-400 mx-auto mt-2.5 mb-3" />
          <p className="font-mono text-xs sm:text-sm font-semibold text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
            My engineering roles, practical milestones, and technical
            contributions.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-3xl mx-auto">
          {/* Continuous Vertical Spine */}
          <div className="absolute left-4 sm:left-6 top-6 bottom-6 w-[2px] -translate-x-1/2 bg-zinc-900 dark:bg-zinc-700" />

          {/* Dynamic Experience Entries */}
          <div className="space-y-8 sm:space-y-10">
            {experience.map((item, index) => {
              const isFirst = index === 0;
              const hasUrl = Boolean(item.companyUrl);

              return (
                <div key={item.id} className="relative pl-10 sm:pl-14">
                  {/* Timeline Checkpoint Node */}
                  <div
                    className={`absolute left-4 sm:left-6 top-7 -translate-x-1/2 w-5 h-5 rounded-full bg-white dark:bg-[#14151a] border-2 border-zinc-900 dark:border-zinc-500 flex items-center justify-center z-10 ${
                      isFirst
                        ? "dark:border-amber-400 dark:ring-3 dark:ring-amber-400/20"
                        : ""
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        isFirst
                          ? "bg-zinc-900 dark:bg-amber-400"
                          : "bg-zinc-700 dark:bg-zinc-400"
                      }`}
                    />
                  </div>

                  {/* Experience Card */}
                  <div className="bg-white dark:bg-[#14151a] brutal-border brutal-shadow p-5 sm:p-6 md:p-7 space-y-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_0px_var(--shadow-color)]">
                    {/* Header Row: Role Title & Date Range (Date on top on mobile, side-by-side on desktop) */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-4">
                      <h3 className="order-2 sm:order-1 font-bold text-base sm:text-lg md:text-xl text-zinc-900 dark:text-zinc-100 tracking-tight">
                        {item.role}
                      </h3>

                      <span className="order-1 sm:order-2 self-start sm:self-center font-mono text-[11px] sm:text-xs font-bold px-2.5 py-1 border border-zinc-900 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 tracking-wider whitespace-nowrap">
                        {item.dateRange}
                      </span>
                    </div>

                    {/* Subheader: Company Name with Conditional Link */}
                    <div className="font-mono text-xs sm:text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider flex items-center gap-1.5 flex-wrap">
                      {hasUrl ? (
                        <a
                          href={item.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400 cursor-pointer"
                          title={`Visit ${item.company}`}
                        >
                          <span className="gold-hover-link">
                            {item.company}
                          </span>
                          <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-700 dark:text-amber-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      ) : (
                        <span>{item.company}</span>
                      )}
                    </div>

                    {/* Divider */}
                    <div className="border-b border-zinc-200 dark:border-zinc-800 pt-1" />

                    {/* Bullet Points Description */}
                    <ul className="space-y-2 pt-1">
                      {Array.isArray(item.description) ? (
                        item.description.map((bullet, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm md:text-[14.5px] text-zinc-600 dark:text-zinc-300 leading-relaxed font-medium dark:font-normal"
                          >
                            <span className="w-1.5 h-1.5 bg-zinc-800 dark:bg-amber-400 mt-2 shrink-0 rounded-none inline-block" />
                            <span>{bullet}</span>
                          </li>
                        ))
                      ) : (
                        <li className="text-xs sm:text-sm md:text-[14.5px] text-zinc-600 dark:text-zinc-300 leading-relaxed">
                          {item.description}
                        </li>
                      )}
                    </ul>

                    {/* Tech Stack Tags (Cleanly omitted if empty or undefined) */}
                    {item.tags && item.tags.length > 0 && (
                      <div className="pt-3 border-t border-dashed border-zinc-200 dark:border-zinc-800 flex flex-wrap gap-2">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[10.5px] sm:text-xs font-bold px-2.5 py-0.5 bg-zinc-100 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-300 border border-zinc-900 dark:border-zinc-700 uppercase tracking-wider select-none"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
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

export default Experience;
