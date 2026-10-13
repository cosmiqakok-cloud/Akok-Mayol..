import React from 'react';
import { Shield, Code, Network, Globe, Users } from 'lucide-react';
import { SkillCategory, SkillItem } from '../types';

interface SkillCategoryCardProps {
  category: SkillCategory;
}

export const SkillCategoryCard: React.FC<SkillCategoryCardProps> = ({ category }) => {
  const getIcon = () => {
    switch (category.icon) {
      case 'Shield':
        return <Shield className="w-5 h-5 text-[#1769FF] dark:text-[#35B6FF]" />;
      case 'Code':
        return <Code className="w-5 h-5 text-[#1769FF] dark:text-[#35B6FF]" />;
      case 'Network':
        return <Network className="w-5 h-5 text-[#1769FF] dark:text-[#35B6FF]" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-[#1769FF] dark:text-[#35B6FF]" />;
      case 'Users':
        return <Users className="w-5 h-5 text-[#1769FF] dark:text-[#35B6FF]" />;
      default:
        return <Shield className="w-5 h-5 text-[#1769FF] dark:text-[#35B6FF]" />;
    }
  };

  const getStatusStyle = (status: SkillItem['status']) => {
    switch (status) {
      case 'Currently Learning':
        return 'text-[#1769FF] dark:text-[#35B6FF]';
      case 'Foundational Knowledge':
        return 'text-indigo-600 dark:text-indigo-400';
      case 'Practicing':
        return 'text-emerald-600 dark:text-emerald-400';
      case 'Familiar':
        return 'text-slate-600 dark:text-slate-400';
      default:
        return 'text-slate-500';
    }
  };

  return (
    <div className="rounded-xl bg-white dark:bg-[#0B1F3A]/70 border border-slate-200 dark:border-slate-800 p-6 shadow-xs hover:border-[#1769FF]/30 transition-all">
      {/* Category Header */}
      <div className="flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div className="p-2.5 rounded-lg bg-[#E8F1FF] dark:bg-slate-800 border border-blue-100 dark:border-slate-700">
          {getIcon()}
        </div>
        <div>
          <h3 className="text-base font-bold text-[#0B1F3A] dark:text-white">
            {category.category}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
            {category.description}
          </p>
        </div>
      </div>

      {/* Skill Items List */}
      <div className="mt-4 divide-y divide-slate-100 dark:divide-slate-800/60">
        {category.skills.map((skill) => (
          <div key={skill.name} className="py-3 first:pt-0 last:pb-0">
            <div className="flex items-center justify-between gap-2">
              <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                {skill.name}
              </h4>
              <span className={`text-[11px] font-medium tracking-wide ${getStatusStyle(skill.status)} shrink-0`}>
                {skill.status}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
