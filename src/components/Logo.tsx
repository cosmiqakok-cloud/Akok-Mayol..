import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const iconSize = size === 'sm' ? 'w-7 h-7' : size === 'lg' ? 'w-10 h-10' : 'w-8 h-8';
  const textSize = size === 'sm' ? 'text-base' : size === 'lg' ? 'text-xl' : 'text-lg';

  return (
    <Link
      to="/"
      className={`group flex items-center gap-2.5 font-bold tracking-tight text-[#0B1F3A] dark:text-white transition-opacity hover:opacity-90 ${className}`}
      aria-label="Akok Mayol - Home"
    >
      <div className={`relative ${iconSize} flex items-center justify-center rounded-lg bg-gradient-to-br from-[#1769FF] to-[#0B1F3A] text-white shadow-sm shadow-[#1769FF]/20 group-hover:shadow-[#1769FF]/40 transition-shadow`}>
        {/* Custom Circuit Shield SVG */}
        <svg
          viewBox="0 0 32 32"
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Outer Shield Outline */}
          <path d="M16 3L6 7v8c0 7.5 4.3 12.3 10 14 5.7-1.7 10-6.5 10-14V7L16 3z" />
          
          {/* Circuit Traces */}
          <path d="M16 11v5" stroke="#35B6FF" strokeWidth="2" />
          <path d="M12 16h8" stroke="#35B6FF" strokeWidth="2" />
          <circle cx="16" cy="11" r="1.5" fill="#35B6FF" stroke="none" />
          <circle cx="12" cy="16" r="1.5" fill="#35B6FF" stroke="none" />
          <circle cx="20" cy="16" r="1.5" fill="#35B6FF" stroke="none" />
          <path d="M16 16v5" stroke="#35B6FF" strokeWidth="2" />
          <circle cx="16" cy="21" r="1.5" fill="#35B6FF" stroke="none" />
        </svg>
      </div>

      <div className="flex flex-col">
        <span className={`${textSize} font-extrabold tracking-tight leading-none text-[#0B1F3A] dark:text-white`}>
          AKOK MAYOL
        </span>
      </div>
    </Link>
  );
};
