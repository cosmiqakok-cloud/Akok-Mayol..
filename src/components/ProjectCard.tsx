import React from 'react';
import { ArrowUpRight, ShieldCheck, Terminal, Network, Globe } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const getCategoryIcon = () => {
    switch (project.category) {
      case 'python':
        return <Terminal className="w-5 h-5 text-[#1769FF] dark:text-[#35B6FF]" />;
      case 'networking':
        return <Network className="w-5 h-5 text-[#1769FF] dark:text-[#35B6FF]" />;
      case 'web-security':
        return <Globe className="w-5 h-5 text-[#1769FF] dark:text-[#35B6FF]" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#1769FF] dark:text-[#35B6FF]" />;
    }
  };

  return (
    <article className="group relative flex flex-col justify-between rounded-xl bg-white dark:bg-[#0B1F3A]/70 border border-slate-200 dark:border-slate-800 p-6 transition-all duration-200 hover:border-[#1769FF]/50 hover:shadow-lg hover:shadow-[#1769FF]/5">
      <div>
        {/* Top Kicker: Clean unboxed metadata with dot separator */}
        <div className="flex items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3">
          <div className="flex items-center gap-2">
            <span className="font-semibold uppercase tracking-wider text-[#1769FF] dark:text-[#35B6FF]">
              {project.category.replace('-', ' ')}
            </span>
            <span aria-hidden="true">·</span>
            <span>{project.status}</span>
          </div>
          <div className="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700/60">
            {getCategoryIcon()}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-[#0B1F3A] dark:text-white group-hover:text-[#1769FF] dark:group-hover:text-[#35B6FF] transition-colors leading-snug">
          {project.title}
        </h3>

        {/* Summary */}
        <p className="mt-2.5 text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
          {project.summary}
        </p>

        {/* Tech tags: Clean unboxed text or subtle tags */}
        <div className="mt-4 flex flex-wrap items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
          {project.technologies.slice(0, 3).map((tech, idx) => (
            <React.Fragment key={tech}>
              <span>{tech}</span>
              {idx < Math.min(project.technologies.length - 1, 2) && (
                <span className="text-slate-300 dark:text-slate-600" aria-hidden="true">·</span>
              )}
            </React.Fragment>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs text-slate-400">+{project.technologies.length - 3}</span>
          )}
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
        <span className="text-xs text-slate-400 dark:text-slate-500">
          Learning Case Study
        </span>
        <button
          type="button"
          onClick={() => onSelect(project)}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1769FF] dark:text-[#35B6FF] hover:underline underline-offset-4 cursor-pointer focus:outline-hidden"
        >
          <span>View Details</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </article>
  );
};
