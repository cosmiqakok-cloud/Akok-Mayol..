import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Shield,
  Code,
  Network,
  Sparkles,
  ArrowUpRight,
  Compass,
  CheckCircle,
  GraduationCap
} from 'lucide-react';
import { HeroVisual } from '../components/HeroVisual';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { projectsData } from '../data/projects';
import { Project } from '../types';

export const Home: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // 3 Featured Projects
  const featuredProjects = projectsData.slice(0, 3);

  // Skill preview items
  const skillsPreview = [
    { title: 'Cybersecurity Fundamentals', status: 'Foundational Knowledge', desc: 'CIA triad, threat models, and defense-in-depth architecture' },
    { title: 'Network Security Fundamentals', status: 'Foundational Knowledge', desc: 'OSI layers, TCP/IP protocol inspection, and packet flows' },
    { title: 'Python Programming', status: 'Practicing', desc: 'Automating defensive audits, file hashing, and data parsing' },
    { title: 'Linux Fundamentals', status: 'Practicing', desc: 'CLI administration, permission models, and process auditing' },
    { title: 'Web Security Fundamentals', status: 'Currently Learning', desc: 'OWASP Top 10 defenses, input sanitization, and access controls' },
    { title: 'Problem Solving', status: 'Familiar', desc: 'Methodical troubleshooting and technical root-cause analysis' },
    { title: 'Communication & Teamwork', status: 'Familiar', desc: 'Clear academic documentation and collaborative study' },
    { title: 'Microsoft Office', status: 'Familiar', desc: 'Technical lab reports, structured spreadsheets, and presentations' },
  ];

  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="relative pt-6 sm:pt-12 lg:pt-16 overflow-hidden">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 -z-10 opacity-30 dark:opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(23, 105, 255, 0.25) 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Typographic Hierarchy */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge & Availability Indicator */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs">
                <span className="font-mono font-bold uppercase tracking-wider text-[#1769FF] dark:text-[#35B6FF]">
                  CYBERSECURITY STUDENT
                </span>
                <span className="text-slate-300 dark:text-slate-700" aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 font-medium border border-emerald-200 dark:border-emerald-800/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Open to Learning Opportunities
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#0B1F3A] dark:text-white leading-[1.12]">
                <span className="bg-gradient-to-r from-[#1769FF] via-[#2563EB] to-[#35B6FF] bg-clip-text text-transparent">
                  Securing the Digital World
                </span>
                , One Step at a Time.
              </h1>

              {/* Supporting Paragraph */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                I am a Cybersecurity student at the <strong className="font-semibold text-slate-900 dark:text-white">University of Juba</strong>, passionate about protecting digital systems, understanding cyber threats, and building a safer digital world through continuous learning and responsible technology.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/projects"
                  className="px-6 py-3 text-sm font-semibold text-white bg-[#1769FF] hover:bg-[#1357db] active:bg-[#0f46b2] rounded-lg shadow-sm hover:shadow-[#1769FF]/25 transition-all inline-flex items-center gap-2"
                >
                  <span>Explore My Work</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/about"
                  className="px-6 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800/90 hover:bg-slate-50 dark:hover:bg-slate-750 border border-slate-200 dark:border-slate-700 rounded-lg transition-all"
                >
                  About Me
                </Link>

                <Link
                  to="/contact"
                  className="px-3 py-2 text-sm font-semibold text-[#1769FF] dark:text-[#35B6FF] hover:underline underline-offset-4 inline-flex items-center gap-1"
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right Column: Custom Cybersecurity Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <HeroVisual />
            </div>
          </div>

          {/* Three Compact Highlights Below Hero */}
          <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-200/80 dark:border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/70 dark:bg-[#0B1F3A]/40 border border-slate-200/60 dark:border-slate-800/80">
              <div className="p-2.5 rounded-lg bg-[#E8F1FF] dark:bg-slate-800 text-[#1769FF] dark:text-[#35B6FF]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0B1F3A] dark:text-white">Cybersecurity Student</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">University of Juba, South Sudan</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/70 dark:bg-[#0B1F3A]/40 border border-slate-200/60 dark:border-slate-800/80">
              <div className="p-2.5 rounded-lg bg-[#E8F1FF] dark:bg-slate-800 text-[#1769FF] dark:text-[#35B6FF]">
                <Code className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0B1F3A] dark:text-white">Python & Programming</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">Security scripting & automation</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-xl bg-white/70 dark:bg-[#0B1F3A]/40 border border-slate-200/60 dark:border-slate-800/80">
              <div className="p-2.5 rounded-lg bg-[#E8F1FF] dark:bg-slate-800 text-[#1769FF] dark:text-[#35B6FF]">
                <Network className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#0B1F3A] dark:text-white">Network Security</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">Traffic analysis & defensive labs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTRODUCTION SECTION
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white dark:bg-[#0B1F3A]/70 border border-slate-200 dark:border-slate-800 p-8 sm:p-12 shadow-xs">
          <div className="max-w-3xl space-y-5">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1769FF] dark:text-[#35B6FF]">
              Philosophy & Focus
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
              Driven by Curiosity. Focused on Security.
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              In an increasingly interconnected landscape, safeguarding information assets requires more than technical tools—it demands a disciplined mindset. Learning how computer systems operate at the protocol and code level enables us to responsibly recognize vulnerabilities before they can be exploited.
            </p>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              Throughout my academic studies at the University of Juba, I combine classroom theory with hands-on lab experiments. I believe in steady academic growth, structured problem-solving, collaboration with peers, and holding security research to the highest ethical standard.
            </p>
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#1769FF] dark:text-[#35B6FF] hover:underline underline-offset-4"
              >
                <span>More About Me</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FEATURED PROJECTS SECTION
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1769FF] dark:text-[#35B6FF]">
              Practical Application
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight mt-1">
              Learning Through Practice.
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-xl">
              Academic projects and defensive laboratory concepts demonstrating security fundamentals, safe hashing, network monitoring, and secure web practices.
            </p>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1769FF] dark:text-[#35B6FF] hover:underline underline-offset-4 shrink-0"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 3 Featured Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </section>

      {/* =========================================================================
          SKILLS PREVIEW SECTION
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1769FF] dark:text-[#35B6FF]">
              Knowledge Domains
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight mt-1">
              Core Competencies & Foundational Skills
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-xl">
              Grounded in university coursework and continuous self-directed learning. Clearly categorized with honest progress indications.
            </p>
          </div>
          <Link
            to="/skills"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1769FF] dark:text-[#35B6FF] hover:underline underline-offset-4 shrink-0"
          >
            <span>View Full Skills Dashboard</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillsPreview.map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-xl bg-white dark:bg-[#0B1F3A]/70 border border-slate-200 dark:border-slate-800 hover:border-[#1769FF]/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs mb-2">
                  <span className="font-semibold text-[#1769FF] dark:text-[#35B6FF]">
                    {item.status}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-[#0B1F3A] dark:text-white">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          PERSONAL STATEMENT BANNER
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-gradient-to-r from-[#0B1F3A] via-[#1769FF] to-[#0B1F3A] text-white p-8 sm:p-14 overflow-hidden shadow-xl border border-blue-900/60">
          {/* Subtle animated digital network background SVG */}
          <div
            className="absolute inset-0 opacity-15 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
              backgroundSize: '22px 22px',
            }}
          />

          <div className="relative z-10 max-w-3xl space-y-6 text-center mx-auto">
            <span className="text-xs font-mono font-bold tracking-widest text-[#35B6FF] uppercase">
              Core Conviction
            </span>
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
              “Every expert starts as a learner. Every secure system begins with understanding.”
            </blockquote>
            <p className="text-sm sm:text-base text-blue-100/90 max-w-xl mx-auto leading-relaxed">
              Dedicated to continuous study, laboratory verification, and building strong ethical foundations for the South Sudanese technology landscape.
            </p>
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#0B1F3A] bg-white hover:bg-slate-100 rounded-lg shadow-sm transition-all"
              >
                <span>Read My Full Story</span>
                <ArrowRight className="w-4 h-4 text-[#1769FF]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
