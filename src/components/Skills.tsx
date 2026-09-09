import React from "react";
import { skillCategories } from "../../content/skills";
import { SkillIcon } from "./SkillIcon";

export const Skills: React.FC = () => {
  return (
    <section
      id="skills"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-t-2 border-zinc-900 dark:border-zinc-800 transition-colors duration-200"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-mono text-zinc-950 dark:text-zinc-50 uppercase inline-block">
            MY{" "}
            <span className="relative inline-block">
              TECH
              <span className="absolute -bottom-1.5 left-0 right-0 h-1 sm:h-1.5 bg-zinc-900 dark:bg-amber-400"></span>
            </span>{" "}
            STACK
          </h2>
          <p className="font-mono text-xs sm:text-sm font-semibold text-zinc-600 dark:text-zinc-400 mt-4 max-w-xl mx-auto">
            Technologies, frameworks, and tools I use to build robust software
            and hardware systems.
          </p>
        </div>

        {/* Category Rows */}
        <div className="space-y-6 sm:space-y-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.id}
              className={`flex flex-col sm:flex-row sm:items-start gap-3.5 sm:gap-6 pb-6 sm:pb-8 ${
                index !== skillCategories.length - 1
                  ? "border-b border-dashed border-zinc-300 dark:border-zinc-800"
                  : ""
              }`}
            >
              {/* Left Column: Category Badge */}
              <div className="sm:w-36 md:w-40 shrink-0">
                <div className="inline-block sm:block text-center px-3 py-1.5 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 font-mono font-bold text-xs tracking-wider uppercase brutal-shadow-sm border-2 border-zinc-900 dark:border-zinc-100">
                  {category.label}
                </div>
              </div>

              {/* Right Column: Skill Chips */}
              <div className="flex flex-wrap gap-2.5 sm:gap-3 flex-1 items-center">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group inline-flex items-center gap-2.5 px-3.5 py-2 sm:px-4 sm:py-2.5 bg-white dark:bg-[#14151a] brutal-border brutal-shadow-sm transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_var(--shadow-color)] dark:hover:border-amber-400/60 select-none cursor-default"
                  >
                    <SkillIcon
                      icon={skill.icon}
                      className="w-5 h-5 sm:w-5.5 sm:h-5.5 transition-transform duration-200 group-hover:scale-110 shrink-0"
                    />
                    <span className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
