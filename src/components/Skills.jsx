import { useTranslation } from 'react-i18next';
import '../styles/components/_skills.scss';
import SkillCard from './SkillCard';
import skills from '../content/skills.json';

const Skills = () => {
  const { t } = useTranslation('skills');

  return (
    <section className="skills">
      <h2>{t('title')}</h2>
      {t('description') && <p className="skills__description">{t('description')}</p>}

      {/* Display skillcards */}
      <div className="skills__grid">
        {skills.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} level={parseInt(skill.level, 10)} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
