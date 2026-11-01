import { useMemo } from 'react';
import { ExternalLink } from 'lucide-react';

export const Experience = () => {
  // Joined September 21, 2026
  const startDate = useMemo(() => new Date(2026, 8, 21), []);

  // Dynamically calculate exact duration from start date till now
  const durationText = useMemo(() => {
    const now = new Date();
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();

    if (now.getDate() < startDate.getDate()) {
      months -= 1;
    }

    if (months < 0) {
      years -= 1;
      months += 12;
    }

    const parts: string[] = [];
    if (years > 0) parts.push(`${years} yr${years > 1 ? 's' : ''}`);
    if (months > 0) parts.push(`${months} mo${months > 1 ? 's' : ''}`);

    return parts.length > 0 ? parts.join(' ') : '1 mo';
  }, [startDate]);

  return (
    <section className="experience-section glass">
      <div className="section-header">
        <h2 className="section-title">
          <span>Experience</span>
        </h2>
        <span className="section-tag">Work</span>
      </div>

      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-node" />
          <div className="education-card">
            <div className="education-header-row">
              <div className="flex-1 min-w-[200px]">
                <h3 className="education-degree">SDE Intern</h3>
                <a 
                  href="https://weevildrone.in/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-color)] hover:text-[var(--accent-pink)] transition-colors mt-0.5"
                >
                  <span>Weevils Drones</span>
                  <ExternalLink size={12} className="opacity-70" />
                </a>
              </div>

              <span className="education-date">
                Sep 21, 2026 — Present • {durationText}
              </span>
            </div>

            <p className="text-xs text-[var(--text-secondary)] mt-3 leading-relaxed">
             Responsible for website development and maintenance, technical research, and developing and improving software solutions for drone systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
