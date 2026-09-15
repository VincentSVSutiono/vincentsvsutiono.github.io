import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { projects, type Project } from "../../content/projects";
import { ProjectModal } from "./ProjectModal";

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  // Render newest first (last item in content/projects.ts appears at the top)
  const displayProjects = [...projects].reverse();

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-t-2 border-zinc-900 dark:border-zinc-800 transition-colors duration-200 scroll-mt-16"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="font-mono text-xs uppercase px-3 py-1 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 font-bold tracking-wider inline-block mb-3 brutal-shadow-sm border border-zinc-900 dark:border-zinc-100">
            MY PORTFOLIO
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-mono text-zinc-950 dark:text-zinc-50 uppercase">
            FEATURED PROJECTS
          </h2>
          <div className="h-1 w-12 sm:h-1.5 sm:w-16 bg-zinc-900 dark:bg-amber-400 mx-auto mt-2.5 mb-3" />
          <p className="font-mono text-xs sm:text-sm font-semibold text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
            A curated collection of projects, applications, and technical
            experiments I've built.
          </p>
        </div>

        {/* Dynamic Project Cards Grid (1 col mobile, 2 col tablet, 3 col desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative flex flex-col h-full bg-white dark:bg-[#14151a] brutal-border brutal-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_var(--shadow-color)] transition-all duration-200 cursor-pointer overflow-hidden"
              tabIndex={0}
              role="button"
              aria-label={`View details for ${project.name}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedProject(project);
                }
              }}
            >
              {/* Card Thumbnail Frame */}
              <div className="relative aspect-[16/10] flex-shrink-0 overflow-hidden bg-zinc-100 dark:bg-zinc-900">
                <img
                  src={project.thumbnail}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    // Fallback to first image in gallery if thumbnail fails
                    if (project.images && project.images.length > 0) {
                      (e.target as HTMLImageElement).src = project.images[0];
                    }
                  }}
                />
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between border-t-2 border-zinc-900 dark:border-zinc-800">
                <div className="flex flex-col flex-grow">
                  <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-600 dark:group-hover:text-amber-400 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 font-medium leading-snug">
                    {project.subtitle}
                  </p>
                </div>

                <div className="mt-auto pt-4 sm:pt-5">
                  {/* Dashed separator */}
                  <div className="border-t border-dashed border-zinc-200 dark:border-zinc-800 mb-4" />

                  {/* Tactile View Details CTA Button */}
                  <div className="w-full py-2.5 px-4 font-mono text-xs font-bold uppercase tracking-wider bg-zinc-100 dark:bg-[#181920] border border-zinc-900 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 group-hover:bg-zinc-900 group-hover:text-white dark:group-hover:bg-amber-400 dark:group-hover:text-zinc-950 transition-all flex items-center justify-center gap-2">
                    <span>VIEW DETAILS</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
