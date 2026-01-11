import type { Language } from '../types';

const LANGUAGES_DATA: Language[] = [
  { name: 'English', level: 'Bilingual or Proficient (C2)' },
  { name: 'Hindi', level: 'Bilingual or Proficient (C2)' },
  { name: 'Bengali', level: 'Bilingual or Proficient (C2)' },
];

export const Languages = () => {
  return (
    <section className="languages-section glass">
      <h2 className="section-title">Languages</h2>
      <div className="languages-list">
        {LANGUAGES_DATA.map((language) => (
          <span key={language.name} className="language-item">
            {language.name}
          </span>
        ))}
      </div>
    </section>
  );
};
