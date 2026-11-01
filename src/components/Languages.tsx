import type { Language } from '../types';

const LANGUAGES_DATA: Language[] = [
  { 
    name: 'English', 
    nativeName: 'English', 
    level: 'Bilingual & Full Professional (C2)', 
    proficiency: 100 
  },
  { 
    name: 'Hindi', 
    nativeName: 'हिन्दी', 
    level: 'Native & Bilingual Proficiency (C2)', 
    proficiency: 100 
  },
  { 
    name: 'Bengali', 
    nativeName: 'বাংলা', 
    level: 'Native & Bilingual Proficiency (C2)', 
    proficiency: 100 
  },
];

export const Languages = () => {
  return (
    <section className="languages-section glass">
      <div className="section-header">
        <h2 className="section-title">
          <span>Languages</span>
        </h2>
        <span className="section-tag">Fluency</span>
      </div>

      <div className="languages-grid">
        {LANGUAGES_DATA.map((lang) => (
          <div key={lang.name} className="language-card">
            <div className="language-header">
              <div className="language-name-wrapper">
                <span className="language-name">{lang.name}</span>
                <span className="language-native">{lang.nativeName}</span>
              </div>
              <span className="language-badge">C2 Mastery</span>
            </div>

            <div className="proficiency-bar-bg" title={`${lang.proficiency}% Proficiency`}>
              <div 
                className="proficiency-bar-fill" 
                style={{ width: `${lang.proficiency}%` }} 
              />
            </div>

            <span className="language-level">{lang.level}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Languages;
