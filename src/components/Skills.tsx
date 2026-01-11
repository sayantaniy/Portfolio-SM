import type { SkillCategory } from '../types';

const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Web Development (Frontend)',
    skills: [
      'HTML, CSS, JavaScript',
      'React.js',
      'Tailwind CSS',
      'UI/UX styling and responsive design',
    ],
  },
  {
    title: 'Database Management',
    skills: [
      'MySQL (installation, setup, troubleshooting)',
      'MongoDB (basic operations and structure understanding)',
    ],
  },
  {
    title: 'Tools & Platforms',
    skills: [
      'Visual Studio Code (VS Code)',
      'GitHub & GitHub Pages (version control, project deployment)',
      'Google Cloud Arcade (hands-on cloud labs and challenges)',
    ],
  },
  {
    title: 'Programming & Concepts',
    skills: [
      'Basic Python',
      'Command-line operations (macOS Terminal)',
      'Local storage handling in JavaScript',
      'Data Structures & Algorithms (DSA Basics) — arrays, linked lists, stacks, queues, recursion, and sorting/searching fundamentals',
    ],
  },
  {
    title: 'Artificial Intelligence (Fundamentals)',
    skills: [
      'Understanding of AI basics (machine learning concepts, neural networks, and model fundamentals)',
      'Awareness of AI tools and real-world applications',
    ],
  },
];

export const Skills = () => {
  return (
    <section className="skills-section glass">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {SKILLS_DATA.map((category) => (
          <div key={category.title} className="skill-category">
            <h3 className="skill-category-title">{category.title}</h3>
            <ul className="skill-list">
              {category.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

