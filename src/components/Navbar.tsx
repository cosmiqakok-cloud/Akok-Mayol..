import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle scroll shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Skills', path: '/skills' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 dark:bg-[#0B1F3A]/95 backdrop-blur-md shadow-xs border-b border-slate-200/80 dark:border-slate-800/80'
          : 'bg-white/80 dark:bg-[#071324]/80 backdrop-blur-xs border-b border-slate-200/40 dark:border-slate-800/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 gap-8">
          {/* Zone 1: Wordmark / Brand */}
          <div className="shrink-0">
            <Logo />
          </div>

          {/* Zone 2: Desktop Navigation Links (Clean single-line text links) */}
          <nav
            className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-600 dark:text-slate-300"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `relative py-1 whitespace-nowrap transition-colors hover:text-[#1769FF] dark:hover:text-[#35B6FF] ${
                    isActive
                      ? 'text-[#1769FF] dark:text-[#35B6FF] font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#1769FF] dark:after:bg-[#35B6FF]'
                      : 'text-slate-600 dark:text-slate-300'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Zone 3: Primary Action + Theme Toggle */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <ThemeToggle />
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#1769FF] hover:bg-[#1357db] active:bg-[#0f46b2] rounded-lg transition-all shadow-xs hover:shadow-[#1769FF]/25 whitespace-nowrap"
            >
              <span>Let's Connect</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Right Bar: Theme Toggle + Hamburger Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#1769FF]"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0B1F3A] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-150"
          role="dialog"
          aria-label="Mobile Navigation"
        >
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#E8F1FF] text-[#1769FF] dark:bg-slate-800 dark:text-[#35B6FF] font-semibold'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-850'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-100 dark:border-slate-800">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-base font-semibold text-white bg-[#1769FF] hover:bg-[#1357db] rounded-lg transition-colors"
              >
                <span>Let's Connect</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
