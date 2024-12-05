import { useTranslation } from 'react-i18next';
import '../styles/components/_education.scss';

const Education = () => {
  const { t } = useTranslation('education');
  const educationData = t('items', { returnObjects: true });

  // Checking if educationData is an array
  if (!Array.isArray(educationData)) {
    console.error('Expected educationData to be an array, got:', educationData);
    return null;
  }

  // Sort from newer to older
  const sortedEducationData = [...educationData].sort((a, b) => {
    const dateA = new Date(a.endDate);
    const dateB = new Date(b.endDate);
    return dateB - dateA; // Resverse Sort
  });

  return (
    <section className="education">
      <h2>{t('title')}</h2>
      {t('description') && <p className="education__description">{t('description')}</p>}
      
      <div className="education__list">
        {sortedEducationData.map((edu, index) => (
          <div key={index} className="education__item">
            <h3>{edu.title}</h3>
            <p>{edu.institution}</p>
            <ul>
              {edu.keySkills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
            <p>
              {edu.startDate} - {edu.endDate}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;