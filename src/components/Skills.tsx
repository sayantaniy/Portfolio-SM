import type { SkillCategory } from '../types';

const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      'Next.js',
      'React.js',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'HTML5 & CSS3',
    ],
  },
  {
    title: 'Backend & Data',
    skills: [
      'Node.js',
      'Express',
      'MongoDB',
      'REST APIs',
      'Local Storage',
    ],
  },
  {
    title: 'Core & Tools',
    skills: [
      'Python',
      'C++',
      'Java',
      'DSA',
      'Git & GitHub',
      'Terminal',
    ],
  },
];

export const Skills = () => {
  return (
    <section className="skills-section glass">
      <div className="section-header">
        <h2 className="section-title">
          <span>Tech Stack</span>
        </h2>
        <span className="section-tag">Skills</span>
      </div>

      <div className="skills-list">
        {SKILLS_DATA.map((category) => (
          <div 
            key={category.title} 
            className="skill-row"
          >
            <div className="skill-category-label">
              <span className="text-xs font-mono font-medium text-[var(--accent-pink)] uppercase tracking-wider">
                {category.title}
              </span>
            </div>
            
            <div className="skill-pills">
              {category.skills.map((skill, index) => (
                <span
                  key={index}
                  className="skill-pill"
                >
                  <span className="skill-pill-dot" />
                  <span className="leading-tight">{skill}</span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
