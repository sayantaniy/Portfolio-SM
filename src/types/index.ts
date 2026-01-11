export type Theme = 'dark' | 'light';

export interface EducationItem {
  degree: string;
  school: string;
  location: string;
  date: string;
  grades?: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

