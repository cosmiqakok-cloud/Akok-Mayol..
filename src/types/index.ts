export type ProjectCategory = 'all' | 'python' | 'networking' | 'web-security' | 'tools';

export type ProjectStatus = 'Learning Project' | 'Project Concept' | 'In Progress' | 'Lab Experiment';

export interface Project {
  id: string;
  title: string;
  summary: string;
  category: 'python' | 'networking' | 'web-security' | 'tools';
  status: ProjectStatus;
  technologies: string[];
  safetyNotice: string;
  objectives: string[];
  learningOutcomes: string[];
  lessonsLearned: string[];
  githubUrl?: string;
}

export type SkillLevel = 'Currently Learning' | 'Foundational Knowledge' | 'Practicing' | 'Familiar';

export interface SkillItem {
  name: string;
  description: string;
  status: SkillLevel;
  iconName?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  icon: string;
  skills: SkillItem[];
}

export interface LearningGoal {
  id: string;
  title: string;
  category: string;
  targetDescription: string;
  completed: boolean;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
  consent: boolean;
  honeypot?: string;
}
