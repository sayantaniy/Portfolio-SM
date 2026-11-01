export type Theme = 'dark' | 'light';

export interface EducationItem {
  degree: string;
  school: string;
  location: string;
  date: string;
  grades?: string;
  highlights?: string[];
}

export interface Language {
  name: string;
  nativeName?: string;
  level: string;
  proficiency: number; // percentage
}

export interface SkillCategory {
  title: string;
  iconName?: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: 'Frontend' | 'Fullstack' | 'AI & ML' | 'Tools';
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  slug?: string;
}
