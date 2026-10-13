import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowLeft, Home, Compass } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex p-4 rounded-2xl bg-blue-50 dark:bg-slate-800 text-[#1769FF] dark:text-[#35B6FF] border border-blue-100 dark:border-slate-700">
          <ShieldAlert className="w-12 h-12" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-[#1769FF] dark:text-[#35B6FF] tracking-widest uppercase">
            Error 404 · Resource Not Found
          </span>
          <h1 className="text-3xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
            Page Does Not Exist
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            The requested security pathway could not be found or has been relocated.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-white bg-[#1769FF] hover:bg-[#1357db] rounded-lg transition-colors inline-flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            to="/projects"
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors inline-flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4" />
            <span>Explore Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
