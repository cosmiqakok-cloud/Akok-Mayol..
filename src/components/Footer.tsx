import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, ShieldCheck, MapPin, GraduationCap } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1F3A] text-slate-300 border-t border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-slate-800">
          {/* Col 1: Identity & Bio */}
          <div className="space-y-4 lg:col-span-1">
            <Logo size="md" />
            <p className="text-xs text-slate-400 font-medium tracking-wide uppercase">
              Cybersecurity Student · University of Juba
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Passionate about protecting digital systems, defensive engineering, and contributing to a resilient digital infrastructure in South Sudan.
            </p>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-300 hover:text-[#35B6FF] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-[#35B6FF] transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-slate-300 hover:text-[#35B6FF] transition-colors">
                  Projects & Labs
                </Link>
              </li>
              <li>
                <Link to="/skills" className="text-slate-300 hover:text-[#35B6FF] transition-colors">
                  Skills & Goals
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-[#35B6FF] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Academic & Location */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Academic Hub
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <GraduationCap className="w-4 h-4 text-[#35B6FF] shrink-0 mt-0.5" />
                <span>University of Juba<br /><span className="text-xs text-slate-400">Department of Cybersecurity</span></span>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#35B6FF] shrink-0" />
                <span>Juba, South Sudan</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#35B6FF] shrink-0" />
                <a
                  href="mailto:cosmiqakok@gmail.com"
                  className="hover:text-[#35B6FF] transition-colors underline decoration-slate-600 underline-offset-4"
                >
                  cosmiqakok@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Responsible Security Ethics */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#35B6FF]" />
              Responsible Practice
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              All tools, demonstrations, and security investigations are strictly conducted in authorized lab environments and local loopback setups with an exclusive defensive and educational mandate.
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>© {currentYear} Akok Mayol Akok. All rights reserved.</span>
            <span className="hidden sm:inline" aria-hidden="true">·</span>
            <span>University of Juba Cybersecurity</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer border border-slate-700"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
