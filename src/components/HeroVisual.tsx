import React, { useState } from 'react';
import { Shield, Lock, Activity, Cpu } from 'lucide-react';

export const HeroVisual: React.FC = () => {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const nodes = [
    { id: 1, label: 'Host Defense', cx: 80, cy: 90, icon: Shield },
    { id: 2, label: 'Cryptographic Integrity', cx: 320, cy: 80, icon: Lock },
    { id: 3, label: 'Traffic Analysis', cx: 330, cy: 280, icon: Activity },
    { id: 4, label: 'Defensive Automation', cx: 70, cy: 290, icon: Cpu },
  ];

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none flex items-center justify-center p-2 sm:p-4">
      {/* Background ambient glow rings */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
        <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-[#1769FF]/15 dark:bg-[#1769FF]/25 blur-3xl" />
        <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-[#35B6FF]/20 dark:bg-[#35B6FF]/30 blur-2xl" />
      </div>

      {/* Main Glassmorphic Card Container */}
      <div className="relative w-full aspect-square max-w-[440px] rounded-2xl bg-gradient-to-b from-[#0B1F3A] to-[#071324] p-6 border border-slate-700/60 shadow-2xl overflow-hidden flex flex-col items-center justify-center">
        {/* Subtle grid pattern background */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(rgba(53, 182, 255, 0.4) 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        />

        {/* SVG Network Grid & Interactive Connectors */}
        <svg
          viewBox="0 0 400 400"
          className="absolute inset-0 w-full h-full pointer-events-none"
          stroke="currentColor"
        >
          <defs>
            <linearGradient id="cyber-line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1769FF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#35B6FF" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          {/* Concentric subtle radar rings */}
          <circle cx="200" cy="200" r="140" fill="none" stroke="#1769FF" strokeWidth="1" strokeDasharray="3 6" opacity="0.4" />
          <circle cx="200" cy="200" r="95" fill="none" stroke="#35B6FF" strokeWidth="1" opacity="0.3" />

          {/* Network Connection Lines */}
          <line x1="80" y1="90" x2="200" y2="200" stroke="url(#cyber-line-grad)" strokeWidth="1.5" strokeDasharray="4 2" />
          <line x1="320" y1="80" x2="200" y2="200" stroke="url(#cyber-line-grad)" strokeWidth="1.5" strokeDasharray="4 2" />
          <line x1="330" y1="280" x2="200" y2="200" stroke="url(#cyber-line-grad)" strokeWidth="1.5" strokeDasharray="4 2" />
          <line x1="70" y1="290" x2="200" y2="200" stroke="url(#cyber-line-grad)" strokeWidth="1.5" strokeDasharray="4 2" />
        </svg>

        {/* Center Shield Graphic */}
        <div className="relative z-10 flex flex-col items-center justify-center p-4">
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border border-[#35B6FF]/40 shadow-xl shadow-[#1769FF]/30 group transition-transform hover:scale-105 duration-300">
            <img
              src="/src/assets/images/cybersecurity_crest_1791877378703.jpg"
              alt="Cybersecurity Shield Crest"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            {/* Ambient blue overlay sheen */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/70 via-transparent to-[#1769FF]/10 pointer-events-none" />
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs uppercase tracking-widest text-[#35B6FF] font-mono font-semibold">
              Defensive Computing
            </p>
            <p className="text-sm font-semibold text-white tracking-wide mt-0.5">
              University of Juba
            </p>
          </div>
        </div>

        {/* Orbiting Interactive Security Nodes */}
        {nodes.map((node) => {
          const Icon = node.icon;
          const isActive = activeNode === node.id;
          return (
            <button
              key={node.id}
              type="button"
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
              onClick={() => setActiveNode(isActive ? null : node.id)}
              className="absolute group z-20 transition-transform duration-200 hover:scale-110 focus:outline-hidden"
              style={{
                left: `${(node.cx / 400) * 100}%`,
                top: `${(node.cy / 400) * 100}%`,
                transform: 'translate(-50%, -50%)',
              }}
              aria-label={node.label}
            >
              <div
                className={`p-2.5 rounded-xl border backdrop-blur-md transition-all shadow-md ${
                  isActive
                    ? 'bg-[#1769FF] border-[#35B6FF] text-white shadow-[#35B6FF]/50 scale-110'
                    : 'bg-[#0B1F3A]/90 border-slate-700 text-slate-300 hover:border-[#1769FF] hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
              </div>
              <span
                className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-0.5 text-[10px] font-medium tracking-tight whitespace-nowrap rounded-md bg-[#071324] text-slate-200 border border-slate-700 transition-opacity pointer-events-none ${
                  isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}
              >
                {node.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
