import React, { useEffect } from 'react';
import { X, ShieldAlert, CheckCircle2, Target, Lightbulb, Code2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white dark:bg-[#0B1F3A] rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between p-6 border-b border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#1769FF] dark:text-[#35B6FF] uppercase tracking-wider mb-1">
              <span>{project.category.replace('-', ' ')}</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-500 dark:text-slate-400">{project.status}</span>
            </div>
            <h2 id="modal-project-title" className="text-xl sm:text-2xl font-bold text-[#0B1F3A] dark:text-white">
              {project.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800 transition-colors focus:outline-hidden"
            aria-label="Close project details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Summary */}
          <div>
            <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
              Overview
            </h3>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Safety & Defensive Notice */}
          <div className="p-4 rounded-xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/60 dark:border-blue-900/60">
            <div className="flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-[#1769FF] dark:text-[#35B6FF] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-[#0B1F3A] dark:text-white uppercase tracking-wider">
                  Defensive & Authorized Practice
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                  {project.safetyNotice}
                </p>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div>
            <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-[#1769FF]" />
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
              {project.technologies.map((tech, idx) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-mono"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Objectives */}
          <div>
            <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Target className="w-4 h-4 text-[#1769FF]" />
              Core Objectives
            </h3>
            <ul className="space-y-2">
              {project.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1769FF] shrink-0 mt-2" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Learning Outcomes */}
          <div>
            <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Learning Outcomes
            </h3>
            <ul className="space-y-2">
              {project.learningOutcomes.map((outcome, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Lessons Learned */}
          <div>
            <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Lightbulb className="w-4 h-4 text-amber-500" />
              Lessons Learned
            </h3>
            <ul className="space-y-2">
              {project.lessonsLearned.map((lesson, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-2" />
                  <span>{lesson}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 flex items-center justify-between">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            Student Demonstration · University of Juba
          </p>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-750 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
