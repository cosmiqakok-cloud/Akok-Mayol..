import React, { useState } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Circle,
  Plus,
  Trash2,
  Target,
  Sparkles,
  Info
} from 'lucide-react';
import { skillCategoriesData, initialLearningGoals } from '../data/skills';
import { SkillCategoryCard } from '../components/SkillCategoryCard';
import { LearningGoal } from '../types';

export const Skills: React.FC = () => {
  const [goals, setGoals] = useState<LearningGoal[]>(() => {
    const saved = localStorage.getItem('akok_learning_goals');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved goals', e);
      }
    }
    return initialLearningGoals;
  });

  const [newGoalTitle, setNewGoalTitle] = useState('');
  const [newGoalCategory, setNewGoalCategory] = useState('Cybersecurity');
  const [newGoalDesc, setNewGoalDesc] = useState('');
  const [isAddingGoal, setIsAddingGoal] = useState(false);

  const saveGoals = (updatedGoals: LearningGoal[]) => {
    setGoals(updatedGoals);
    localStorage.setItem('akok_learning_goals', JSON.stringify(updatedGoals));
  };

  const toggleGoal = (id: string) => {
    const updated = goals.map((g) =>
      g.id === id ? { ...g, completed: !g.completed } : g
    );
    saveGoals(updated);
  };

  const deleteGoal = (id: string) => {
    const updated = goals.filter((g) => g.id !== id);
    saveGoals(updated);
  };

  const handleAddGoal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGoalTitle.trim()) return;

    const newGoal: LearningGoal = {
      id: `goal-${Date.now()}`,
      title: newGoalTitle.trim(),
      category: newGoalCategory,
      targetDescription: newGoalDesc.trim() || 'Custom academic milestone target.',
      completed: false
    };

    saveGoals([...goals, newGoal]);
    setNewGoalTitle('');
    setNewGoalDesc('');
    setIsAddingGoal(false);
  };

  const completedCount = goals.filter((g) => g.completed).length;
  const totalCount = goals.length;
  const completionPercentage =
    totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* =========================================================================
          PAGE HEADER
          ========================================================================= */}
      <section className="pt-6 sm:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#1769FF] dark:text-[#35B6FF]">
            Competency Matrix
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1F3A] dark:text-white tracking-tight">
            Skills & Educational Progress
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            A transparent overview of academic coursework, programming capabilities, networking foundations, and active developmental milestones.
          </p>

          <div className="p-4 rounded-xl bg-blue-50/80 dark:bg-slate-800/80 border border-blue-200/80 dark:border-slate-700 text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-3">
            <Info className="w-5 h-5 text-[#1769FF] dark:text-[#35B6FF] shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong className="font-semibold text-slate-900 dark:text-white">Authentic Assessment:</strong>{' '}
              In accordance with academic integrity, this portfolio rejects arbitrary percentage sliders or fabricated proficiency scores. Skills are classified by authentic student status: <em>Currently Learning</em>, <em>Foundational Knowledge</em>, <em>Practicing</em>, and <em>Familiar</em>.
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CATEGORIZED SKILLS GRID
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F3A] dark:text-white">
          Technical & Academic Domains
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategoriesData.map((category) => (
            <SkillCategoryCard key={category.category} category={category} />
          ))}
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE LEARNING GOALS DASHBOARD
          ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white dark:bg-[#0B1F3A]/70 border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-xs space-y-8">
          {/* Header & Dynamic Progress Indicator */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#1769FF] dark:text-[#35B6FF]">
                <Target className="w-4 h-4" />
                <span>Active Milestones</span>
              </div>
              <h2 className="text-2xl font-bold text-[#0B1F3A] dark:text-white mt-1">
                Academic & Practical Learning Goals
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                Progress tracking based strictly on real milestones checked by the learner.
              </p>
            </div>

            {/* Metric Box with Tabular Numerals */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-700/60 min-w-[240px]">
              <div className="flex items-center justify-between text-xs text-slate-600 dark:text-slate-300 mb-2">
                <span className="font-semibold">Goal Completion</span>
                <span className="font-mono font-bold tabular-nums text-slate-900 dark:text-white">
                  {completedCount} / {totalCount} ({completionPercentage}%)
                </span>
              </div>
              {/* Progress Bar */}
              <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                <div
                  className="h-full bg-[#1769FF] dark:bg-[#35B6FF] transition-all duration-300 rounded-full"
                  style={{ width: `${completionPercentage}%` }}
                />
              </div>
            </div>
          </div>

          {/* Goals List */}
          <div className="space-y-3">
            {goals.map((goal) => (
              <div
                key={goal.id}
                className={`flex items-start justify-between gap-4 p-4 rounded-xl border transition-all ${
                  goal.completed
                    ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200/60 dark:border-emerald-900/40 text-slate-600 dark:text-slate-400'
                    : 'bg-white dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-start gap-3.5">
                  <button
                    type="button"
                    onClick={() => toggleGoal(goal.id)}
                    className="mt-0.5 text-slate-400 hover:text-[#1769FF] dark:hover:text-[#35B6FF] transition-colors focus:outline-hidden"
                    aria-label={goal.completed ? 'Mark incomplete' : 'Mark complete'}
                  >
                    {goal.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />
                    ) : (
                      <Circle className="w-5 h-5 text-slate-400 hover:text-[#1769FF]" />
                    )}
                  </button>

                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className={`text-sm font-bold ${goal.completed ? 'line-through text-slate-500' : 'text-slate-900 dark:text-white'}`}>
                        {goal.title}
                      </h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                        {goal.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
                      {goal.targetDescription}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => deleteGoal(goal.id)}
                  className="text-slate-400 hover:text-rose-500 transition-colors p-1"
                  aria-label="Delete goal"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Add Goal Form / Button */}
          {isAddingGoal ? (
            <form onSubmit={handleAddGoal} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-4">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                Add New Learning Milestone
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input
                  type="text"
                  placeholder="Goal title (e.g., Set up Snort IDS on Linux)"
                  value={newGoalTitle}
                  onChange={(e) => setNewGoalTitle(e.target.value)}
                  className="sm:col-span-2 px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#1769FF]"
                  required
                />
                <select
                  value={newGoalCategory}
                  onChange={(e) => setNewGoalCategory(e.target.value)}
                  className="px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#1769FF]"
                >
                  <option value="Cybersecurity">Cybersecurity</option>
                  <option value="Programming">Programming</option>
                  <option value="Networking">Networking</option>
                  <option value="Systems">Systems</option>
                  <option value="Forensics">Forensics</option>
                  <option value="Web Security">Web Security</option>
                </select>
              </div>
              <textarea
                placeholder="Brief description or target objective..."
                value={newGoalDesc}
                onChange={(e) => setNewGoalDesc(e.target.value)}
                rows={2}
                className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-[#1769FF]"
              />
              <div className="flex items-center gap-2">
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#1769FF] hover:bg-[#1357db] rounded-lg transition-colors"
                >
                  Save Milestone
                </button>
                <button
                  type="button"
                  onClick={() => setIsAddingGoal(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-200/50 dark:hover:bg-slate-800 rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <button
              type="button"
              onClick={() => setIsAddingGoal(true)}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#1769FF] dark:text-[#35B6FF] hover:bg-[#E8F1FF] dark:hover:bg-slate-800 rounded-lg transition-colors border border-dashed border-[#1769FF]/40 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Custom Learning Goal</span>
            </button>
          )}
        </div>
      </section>
    </div>
  );
};
