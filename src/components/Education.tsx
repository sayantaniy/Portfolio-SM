import type { EducationItem } from '../types';

const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'Bachelor in Technology Computer Science (AI&ML)',
    school: 'Techno Bengal Institute of Technology',
    location: 'Kolkata, India',
    date: 'Expected in May 2028',
  },
  {
    degree: 'High School Diploma',
    school: 'South End Centre (E.M) School',
    location: 'Howrah, India',
    date: 'April 2023',
    grades: 'ISC: 83.16% | ICSE: 90.5%',
  },
];

export const Education = () => {
  return (
    <section className="education-section glass">
      <h2 className="section-title">Education</h2>
      {EDUCATION_DATA.map((item, index) => (
        <div key={index} className="education-item">
          <div className="education-header">
            <div className="education-info">
              <h3 className="education-degree">{item.degree}</h3>
              <p className="education-school">{item.school}</p>
              <p className="education-location">{item.location}</p>
              {item.grades && (
                <p className="education-grades">{item.grades}</p>
              )}
            </div>
            <div className="education-date">
              <span>{item.date}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

