import { Github, ExternalLink } from 'lucide-react';
import type { ProjectItem } from '../types';

const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'expense-tracker',
    title: 'Expense Tracker',
    description: 'A full-stack application designed to record, categorize, track, and manage personal expenses seamlessly with persistent data management and clean UI.',
    category: 'Fullstack',
    tags: ['JavaScript', 'Fullstack', 'CSS3', 'Data Handling'],
    githubUrl: 'https://github.com/sayantaniy/Expense-Tracker',
    demoUrl: 'https://expense-tracker-syn.vercel.app/',
    featured: true,
  },
  {
    id: 'user-profile',
    title: 'User Profile & Dashboard',
    description: 'An interactive React website styled with Tailwind CSS and Motion animations, featuring personalized widgets, real-time clocks, and weather integration.',
    category: 'Frontend',
    tags: ['React', 'Next.js', 'Tailwind CSS', 'Motion Animations', 'API'],
    githubUrl: 'https://github.com/sayantaniy/UserProfile',
    demoUrl: 'https://sayantani-user-profile.vercel.app/',
    featured: true,
  },
];

export const Projects = () => {
  return (
    <div className="container">
      {/* Header Card */}
      <section className="glass">
        <div className="section-header border-b-0 pb-0 mb-0">
          <h1 className="section-title">
            <span>Projects</span>
          </h1>
        </div>
      </section>

      {/* Projects Grid */}
      <div className="projects-grid">
        {PROJECTS_DATA.map((project) => (
          <article key={project.id} className="project-card">
            <div className="project-card-header">
              <div>
                <h3 className="project-title">{project.title}</h3>
                <span className="text-xs text-[var(--text-muted)] font-mono">
                  {project.category}
                </span>
              </div>
              <span className="project-category-badge">{project.category}</span>
            </div>

            <p className="project-desc">{project.description}</p>

            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-tag">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="project-links">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link-btn"
              >
                <Github size={14} />
                <span>GitHub</span>
              </a>

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-btn primary"
                >
                  <span>Live Demo</span>
                  <ExternalLink size={12} />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
