import React from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  MapPin,
  Mail,
  Shield,
  Network,
  Search,
  Code,
  Globe,
  Users,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Award,
  Lock,
  Layers,
  HeartHandshake
} from 'lucide-react';

export const About: React.FC = () => {
  const learningJourney = [
    {
      phase: 'Step 01',
      title: 'Foundations of Computer Systems & Security',
      description: 'Understanding computing architectures, operating system fundamentals, memory structures, and the core CIA security triad.',
      tag: 'Academic Study'
    },
    {
      phase: 'Step 02',
      title: 'Python Programming & Scripting Logic',
      description: 'Learning syntax, data structures, file operations, cryptographic modules (hashlib), and automating repetitive verification tasks.',
      tag: 'Practical Skill'
    },
    {
      phase: 'Step 03',
      title: 'Computer Networking & Systems Administration',
      description: 'Mastering TCP/IP protocols, IPv4 subnetting, Linux command line workflows, and analyzing packets with Wireshark.',
      tag: 'Lab Practice'
    },
    {
      phase: 'Step 04',
      title: 'Authorized Lab Experiments & Threat Awareness',
      description: 'Exploring vulnerability analysis, password entropy, and reconnaissance principles strictly within isolated sandbox environments.',
      tag: 'Ethical Mandate'
    },
    {
      phase: 'Step 05',
      title: 'Secure Web Development & Defensive Design',
      description: 'Building modern interfaces with HTML5, CSS3, TypeScript, and React while applying input validation and OWASP defense principles.',
      tag: 'Implementation'
    },
    {
      phase: 'Step 06',
      title: 'Continuous Study & Community Contribution',
      description: 'Engaging in academic workshops, peer study groups, and preparing for professional industry certifications (CompTIA Security+).',
      tag: 'Future Goal'
    }
  ];

  const interestCards = [
    {
      title: 'Ethical Hacking in Authorized Labs',
      description: 'Studying defensive vulnerability assessment and penetration testing methodologies exclusively in sandboxed, authorized virtual networks.',
      icon: Shield,
    },
    {
      title: 'Network Defense & Monitoring',
      description: 'Analyzing traffic flows, understanding intrusion detection patterns, configuring packet filters, and studying firewall rules.',
      icon: Network,
    },
    {
      title: 'Digital Forensics',
      description: 'Exploring evidence acquisition principles, cryptographic hash verification, file system anomalies, and audit log analysis.',
      icon: Search,
    },
    {
      title: 'Python Automation',
      description: 'Writing custom tools to automate log parsing, file integrity monitoring, and repetitive defensive checks.',
      icon: Code,
    },
    {
      title: 'Secure Web Development',
      description: 'Implementing modern, responsive user interfaces that resist client-side tampering, enforce input validation, and respect accessibility.',
      icon: Globe,
    },
    {
      title: 'Security Awareness & Hygiene',
      description: 'Helping fellow students and non-technical users recognize phishing vectors, choose strong passphrases, and secure personal devices.',
      icon: Lock,
    }
  ];

  const coreValues = [
    {
      title: 'Integrity',
      description: 'Upholding strict ethical standards. Security knowledge must only be deployed defensively, constructively, and with explicit authorization.',
      icon: Award
    },
    {
      title: 'Continuous Learning',
      description: 'Approaching technology with curiosity and humility. The threat landscape evolves continuously, requiring sustained study and open inquiry.',
      icon: BookOpen
    },
    {
      title: 'Responsibility',
      description: 'Recognizing the societal impact of digital systems. Protecting data means protecting people and their trust in technology.',
      icon: Shield
    },
    {
      title: 'Collaboration',
      description: 'Cybersecurity is a collective defense discipline. Sharing knowledge, helping teammates, and learning through mutual feedback makes everyone safer.',
      icon: HeartHandshake
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* =========================================================================
          HERO & BIOGRAPHY SECTION
          ========================================================================= */}
      <section className="pt-6 sm:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left: Biography Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1769FF] dark:text-[#35B6FF]">
                  Biography & Background
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
                  About Me
                </h1>
                <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">
                  The person behind the passion for cybersecurity.
                </p>
              </div>

              <div className="space-y-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  My name is <strong className="font-semibold text-slate-900 dark:text-white">Akok Mayol Akok</strong>. I am a dedicated Cybersecurity student currently pursuing my undergraduate degree at the <strong className="font-semibold text-slate-900 dark:text-white">University of Juba</strong> in South Sudan.
                </p>
                <p>
                  From an early fascination with how digital networks connect communities to discovering the vulnerabilities that can undermine them, I have directed my academic focus toward understanding and protecting computer infrastructure. I believe responsible technology and resilient cybersecurity are vital cornerstones for South Sudan’s emerging digital future.
                </p>
                <p>
                  My daily routine blends university curriculum with hands-on lab experimentation: analyzing packet captures, writing Python utilities for file integrity auditing, configuring virtualized Linux environments, and practicing secure web development standards.
                </p>
              </div>

              {/* Quick Details List */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
                  <GraduationCap className="w-4 h-4 text-[#1769FF] dark:text-[#35B6FF] shrink-0" />
                  <span>University of Juba · Cybersecurity</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
                  <MapPin className="w-4 h-4 text-[#1769FF] dark:text-[#35B6FF] shrink-0" />
                  <span>Juba, South Sudan</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
                  <Mail className="w-4 h-4 text-[#1769FF] dark:text-[#35B6FF] shrink-0" />
                  <a href="mailto:cosmiqakok@gmail.com" className="hover:text-[#1769FF] dark:hover:text-[#35B6FF] underline">
                    cosmiqakok@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300">
                  <Shield className="w-4 h-4 text-[#1769FF] dark:text-[#35B6FF] shrink-0" />
                  <span>Focus: Defensive Security & Python</span>
                </div>
              </div>
            </div>

            {/* Right: Authentic Portrait & Academic Identification Card */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-sm rounded-2xl bg-white dark:bg-[#0B1F3A] border border-slate-200 dark:border-slate-800 p-4 shadow-xl">
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                  <img
                    src="/src/assets/images/akok_mayol_avatar_1791877379289.jpg"
                    alt="Akok Mayol Akok - Cybersecurity Student"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-base font-bold">Akok Mayol Akok</p>
                    <p className="text-xs text-slate-200">University of Juba, Cybersecurity</p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                  <span>Student ID Verified</span>
                  <span className="font-mono text-[#1769FF] dark:text-[#35B6FF] font-semibold">Department: Cybersecurity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ACADEMIC BACKGROUND
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white dark:bg-[#0B1F3A]/70 border border-slate-200 dark:border-slate-800 p-8 sm:p-10 shadow-xs">
          <div className="max-w-3xl space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1769FF] dark:text-[#35B6FF]">
              Higher Education
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
              Academic Background
            </h2>

            <div className="relative pl-6 border-l-2 border-[#1769FF]/30 dark:border-[#1769FF]/40 space-y-4">
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#1769FF] border-2 border-white dark:border-[#0B1F3A]" />
              
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#1769FF] dark:text-[#35B6FF]">
                  Undergraduate Degree Program
                </span>
                <h3 className="text-xl font-bold text-[#0B1F3A] dark:text-white mt-0.5">
                  University of Juba
                </h3>
                <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                  Department of Cybersecurity · Faculty of Computer Science & Information Technology
                </p>
              </div>

              <div className="space-y-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  <strong className="font-semibold text-slate-900 dark:text-white">Status:</strong> Currently Enrolled Cybersecurity Student
                </p>
                <p>
                  <strong className="font-semibold text-slate-900 dark:text-white">Location:</strong> Juba, South Sudan
                </p>
                <p>
                  <strong className="font-semibold text-slate-900 dark:text-white">Core Academic Subject Areas:</strong> Computer Architecture, Principles of Information Security, Computer Networks, Discrete Mathematics, Operating Systems, Database Systems, Object-Oriented Programming with Python, and Secure Web Systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          LEARNING JOURNEY
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1769FF] dark:text-[#35B6FF]">
            Milestones & Goals
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight mt-1">
            Learning Journey
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
            A structured path charting key developmental milestones, academic experiments, and technical goals without fabricated work experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {learningJourney.map((step) => (
            <div
              key={step.phase}
              className="rounded-xl bg-white dark:bg-[#0B1F3A]/70 border border-slate-200 dark:border-slate-800 p-6 flex flex-col justify-between hover:border-[#1769FF]/40 transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2">
                  <span className="font-mono font-bold text-[#1769FF] dark:text-[#35B6FF]">
                    {step.phase}
                  </span>
                  <span>{step.tag}</span>
                </div>
                <h3 className="text-base font-bold text-[#0B1F3A] dark:text-white leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          AREAS OF INTEREST
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1769FF] dark:text-[#35B6FF]">
            Specialized Interests
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight mt-1">
            Professional & Technical Interests
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-xl">
            Core domains where I concentrate my extracurricular lab research, reading, and software exercises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interestCards.map((interest) => {
            const Icon = interest.icon;
            return (
              <div
                key={interest.title}
                className="p-6 rounded-xl bg-white dark:bg-[#0B1F3A]/70 border border-slate-200 dark:border-slate-800 hover:border-[#1769FF]/40 transition-all space-y-3"
              >
                <div className="p-2.5 rounded-lg bg-[#E8F1FF] dark:bg-slate-800 text-[#1769FF] dark:text-[#35B6FF] inline-block">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#0B1F3A] dark:text-white">
                  {interest.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {interest.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          CORE VALUES
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1769FF] dark:text-[#35B6FF]">
            Principles
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight mt-1">
            Values That Guide My Work
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((val) => {
            const Icon = val.icon;
            return (
              <div
                key={val.title}
                className="p-6 rounded-xl bg-white dark:bg-[#0B1F3A]/70 border border-slate-200 dark:border-slate-800 space-y-3"
              >
                <div className="p-2.5 rounded-lg bg-[#E8F1FF] dark:bg-slate-800 text-[#1769FF] dark:text-[#35B6FF] inline-block">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#0B1F3A] dark:text-white">
                  {val.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {val.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          CAREER GOALS & CTAS
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-[#0B1F3A] to-[#071324] text-white p-8 sm:p-12 border border-slate-800 shadow-xl space-y-6">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#35B6FF]">
              Aspiration
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Career Objective & Vision
            </h2>
            <blockquote className="text-lg text-slate-200 italic border-l-2 border-[#1769FF] pl-4 py-1">
              “My goal is to develop strong practical skills in cybersecurity, contribute to protecting digital infrastructure, and grow into a professional cybersecurity specialist.”
            </blockquote>
            <p className="text-sm text-slate-300 leading-relaxed">
              I aspire to contribute to public and private sector organizations, gain hands-on apprenticeship or internship experience, and actively build defense capabilities that empower individuals and businesses in South Sudan to adopt digital technologies securely.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/projects"
              className="px-6 py-3 text-sm font-semibold text-white bg-[#1769FF] hover:bg-[#1357db] rounded-lg transition-colors inline-flex items-center gap-2 shadow-sm"
            >
              <span>View My Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/contact"
              className="px-6 py-3 text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-750 border border-slate-700 rounded-lg transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
