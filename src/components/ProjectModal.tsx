import React, { useState, useEffect } from "react";
import {
  X,
  ExternalLink,
  FileText,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Briefcase,
  Layers,
} from "lucide-react";
import type { Project } from "../../content/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

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

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
}) => {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  // Reset active image index when project changes
  useEffect(() => {
    setActiveImageIdx(0);
  }, [project]);

  // Lock body scroll and listen for Escape key
  useEffect(() => {
    if (!project) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const galleryImages =
    project.images && project.images.length > 0
      ? project.images
      : [project.thumbnail];

  const currentImage = galleryImages[activeImageIdx] || project.thumbnail;

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIdx((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1,
    );
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIdx((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1,
    );
  };

  const hasActionLinks = Boolean(
    project.liveUrl || project.githubUrl || project.docsUrl,
  );

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      {/* Modal Dialog Window */}
      <div
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-white dark:bg-[#14151a] brutal-border brutal-shadow-lg text-zinc-900 dark:text-zinc-100 overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Header Bar — Only bottom border separates it from body */}
        <div className="px-4 py-2.5 border-b-[2.5px] border-[var(--border-color)] bg-zinc-100 dark:bg-[#181920] flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-400 dark:bg-amber-400 border border-zinc-600/50"></span>
            <span className="font-mono text-xs text-zinc-600 dark:text-zinc-400 font-semibold tracking-wider">
              ➔ [PROJECT_DETAILS]
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="brutal-btn px-2.5 py-0.5 text-xs font-mono font-bold bg-white dark:bg-[#14151a] text-zinc-800 dark:text-zinc-200 hover:bg-red-500 hover:text-white dark:hover:bg-red-500 dark:hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
            aria-label="Close modal"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Scrollable Content Body with Custom Sleek Scrollbar */}
        <div className="overflow-y-auto custom-scrollbar p-5 sm:p-7 space-y-6 flex-grow">
          {/* Header Block: Title, Subtitle, and Metadata Pills */}
          <div className="space-y-3">
            <div>
              <h2
                id="modal-project-title"
                className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100"
              >
                {project.name}
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-medium mt-1">
                {project.subtitle}
              </p>
            </div>

            {/* Metadata Pills Row (clean badges without heavy brutal borders) */}
            <div className="flex flex-wrap gap-2 pt-1">
              <div className="font-mono font-medium text-xs px-2.5 py-1 bg-zinc-100 dark:bg-[#1f212a] text-zinc-800 dark:text-zinc-200 tracking-wider flex items-center gap-2.5">
                <Calendar className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
                <span>{project.dateRange}</span>
              </div>
              <div className="font-mono font-medium text-xs px-2.5 py-1 bg-zinc-100 dark:bg-[#1f212a] text-zinc-800 dark:text-zinc-200 tracking-wider flex items-center gap-2.5">
                <Briefcase className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
                <span>{project.role}</span>
              </div>
              <div className="font-mono font-medium text-xs px-2.5 py-1 bg-zinc-100 dark:bg-amber-400/10 text-zinc-800 dark:text-amber-300 font-medium tracking-wider flex items-center gap-2.5">
                <Layers className="w-3.5 h-3.5 text-zinc-500 dark:text-amber-400" />
                <span>{project.type}</span>
              </div>
            </div>
          </div>

          {/* Interactive Image Gallery (Fitted Image Without Cropping or Brutal Borders) */}
          <div className="space-y-3">
            <div className="relative w-full max-h-[360px] sm:max-h-[420px] bg-zinc-100 dark:bg-zinc-900/60 flex items-center justify-center overflow-hidden">
              <img
                src={currentImage}
                alt={`${project.name} preview ${activeImageIdx + 1}`}
                className="max-h-[340px] sm:max-h-[400px] w-auto max-w-full object-contain mx-auto transition-all duration-200"
                onError={(e) => {
                  if (project.images && project.images.length > 0) {
                    (e.target as HTMLImageElement).src = project.images[0];
                  }
                }}
              />

              {/* Prev / Next navigation buttons if multiple images exist */}
              {galleryImages.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={handlePrevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center brutal-btn bg-white/95 dark:bg-[#14151a]/95 text-zinc-800 dark:text-zinc-100 hover:bg-zinc-900 hover:text-white dark:hover:bg-amber-400 dark:hover:text-zinc-950 cursor-pointer shadow-md"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center brutal-btn bg-white/95 dark:bg-[#14151a]/95 text-zinc-800 dark:text-zinc-100 hover:bg-zinc-900 hover:text-white dark:hover:bg-amber-400 dark:hover:text-zinc-950 cursor-pointer shadow-md"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-3 right-3 font-mono text-xs px-2.5 py-0.5 bg-black/80 text-white backdrop-blur-xs select-none">
                    [{activeImageIdx + 1} / {galleryImages.length}]
                  </div>
                </>
              )}
            </div>

            {/* Thumbnail Strip (if multiple images) */}
            {galleryImages.length > 1 && (
              <div className="flex gap-2.5 overflow-x-auto pb-1 pt-0.5 custom-scrollbar">
                {galleryImages.map((img, idx) => {
                  const isActive = idx === activeImageIdx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImageIdx(idx)}
                      className={`relative w-16 h-11 sm:w-20 sm:h-13 flex-shrink-0 overflow-hidden transition-all cursor-pointer ${
                        isActive
                          ? "border-2 border-zinc-900 dark:border-amber-400 scale-105 shadow-sm"
                          : "border border-zinc-200 dark:border-zinc-800 opacity-60 hover:opacity-100"
                      }`}
                      aria-label={`View image ${idx + 1}`}
                    >
                      <img
                        src={img}
                        alt={`Thumbnail ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Project Description Block (Larger Heading + Justified Body) */}
          <div className="space-y-2.5">
            <h3 className="font-mono text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
              // PROJECT OVERVIEW
            </h3>
            <div className="whitespace-pre-line text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium text-justify">
              {project.description}
            </div>
          </div>

          {/* Tech Stack Block (Larger Heading) */}
          <div className="space-y-3">
            <h3 className="font-mono text-base sm:text-lg font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider">
              // TECHNOLOGIES & TOOLS
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="font-mono font-semibold dark:font-medium text-xs uppercase px-2.5 py-1 bg-white dark:bg-[#14151a] text-zinc-800 dark:text-zinc-300 tracking-wider brutal-border-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action Footer Bar — Only top border separates it from body, Close button removed */}
        {hasActionLinks && (
          <div className="p-4 sm:p-5 border-t-[2.5px] border-[var(--border-color)] bg-zinc-50 dark:bg-[#181920] flex flex-wrap items-center gap-3">
            {/* Live Site Link */}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn px-3.5 py-2 font-mono text-xs uppercase font-bold tracking-wider bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-amber-400 dark:text-zinc-950 dark:hover:bg-amber-300 flex items-center gap-2 cursor-pointer transition-colors"
              >
                <span>VISIT LIVE SITE</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {/* GitHub Source Link */}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn px-3.5 py-2 font-mono text-xs uppercase font-bold tracking-wider bg-white dark:bg-[#14151a] text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center gap-2 cursor-pointer transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>VIEW SOURCE</span>
              </a>
            )}

            {/* PDF Documentation Link */}
            {project.docsUrl && (
              <a
                href={project.docsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-btn px-3.5 py-2 font-mono text-xs uppercase font-bold tracking-wider bg-white dark:bg-[#14151a] text-zinc-900 dark:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800 flex items-center gap-2 cursor-pointer transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-zinc-700 dark:text-amber-400" />
                <span>VIEW DOCUMENTATION</span>
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
