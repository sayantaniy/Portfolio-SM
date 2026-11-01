import { MapPin, Award } from 'lucide-react';
import type { EducationItem } from '../types';

const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'Bachelor of Technology - Computer Science (AI & ML)',
    school: 'Techno Bengal Institute of Technology',
    location: 'Kolkata, West Bengal, India',
    date: 'Expected May 2028',
    highlights: [
      'Specialization in Artificial Intelligence and Machine Learning systems',
      'Coursework in Data Structures, Algorithms, Discrete Mathematics & Web Tech',
    ],
  },
  {
    degree: 'High School Diploma (Science)',
    school: 'South End Centre (E.M) School',
    location: 'Howrah, West Bengal, India',
    date: 'April 2023',
    grades: 'ISC: 83.16% • ICSE: 90.50%',
    
  },
];

export const Education = () => {
  return (
    <section className="education-section glass">
      <div className="section-header">
        <h2 className="section-title">
          <span>Education</span>
        </h2>
        <span className="section-tag">Academics</span>
      </div>

      <div className="timeline">
        {EDUCATION_DATA.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-node" />
            <div className="education-card">
              <div className="education-header-row">
                <div className="flex-1 min-w-[220px]">
                  <h3 className="education-degree">{item.degree}</h3>
                  <p className="education-school">{item.school}</p>
                  <p className="education-location">
                    <MapPin size={11} />
                    <span>{item.location}</span>
                  </p>
                </div>
                <span className="education-date">{item.date}</span>
              </div>

              {item.grades && (
                <div className="education-grades">
                  <Award size={13} className="text-pink-400" />
                  <span>{item.grades}</span>
                </div>
              )}

              {item.highlights && (
                <ul className="mt-3 space-y-1">
                  {item.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="text-xs text-[var(--text-secondary)] flex items-start gap-2">
                      <span className="text-[var(--accent-pink)]">•</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
