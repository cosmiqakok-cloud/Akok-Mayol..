import React, { useState, useMemo } from 'react';
import { Search, ShieldAlert, Filter, Sparkles, BookOpen } from 'lucide-react';
import { projectsData } from '../data/projects';
import { Project, ProjectCategory } from '../types';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories: { label: string; value: ProjectCategory }[] = [
    { label: 'All Projects', value: 'all' },
    { label: 'Python Scripting', value: 'python' },
    { label: 'Networking & Labs', value: 'networking' },
    { label: 'Web Security', value: 'web-security' },
    { label: 'Educational Tools', value: 'tools' }
  ];

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        selectedCategory === 'all' || project.category === selectedCategory;
      const matchesQuery =
        searchQuery === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* =========================================================================
          PAGE HEADER
          ========================================================================= */}
      <section className="pt-6 sm:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1769FF] dark:text-[#35B6FF]">
            Portfolio Showcase
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
            Projects & Laboratory Studies
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            Hands-on learning projects, virtualized laboratory experiments, and educational software created during my cybersecurity studies at the University of Juba.
          </p>

          {/* Defensive Academic Disclaimer Banner */}
          <div className="mt-4 p-4 rounded-xl bg-blue-50/80 dark:bg-slate-800/80 border border-blue-200/80 dark:border-slate-700 text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-[#1769FF] dark:text-[#35B6FF] shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong className="font-semibold text-slate-900 dark:text-white">Responsible Educational Mandate:</strong>{' '}
              All projects presented here are demonstration concepts and defensive experiments developed strictly for educational comprehension, local verification, and authorized lab studies. No unauthorized penetration testing or destructive software is hosted or endorsed.
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FILTERING & SEARCH TOOLBAR
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-2 bg-white dark:bg-[#0B1F3A]/70 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
          {/* Interactive Category Segmented Controls */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-slate-50 dark:bg-slate-900/60 rounded-lg">
            {categories.map((cat) => (
              <button
                key={cat.value}
                type="button"
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.value
                    ? 'bg-[#1769FF] text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by topic or technology..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/60 text-slate-800 dark:text-slate-200 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#1769FF]"
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          PROJECT CARDS GRID
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 px-4 rounded-xl border border-dashed border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-900/40">
            <BookOpen className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
              No matching projects found
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Try adjusting your search terms or selecting another category filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 px-3 py-1.5 text-xs font-semibold text-[#1769FF] dark:text-[#35B6FF] hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(p) => setActiveProject(p)}
              />
            ))}
          </div>
        )}
      </section>

      {/* Modal Details View */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </div>
  );
};
