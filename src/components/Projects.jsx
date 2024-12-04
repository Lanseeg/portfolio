import { useTranslation } from 'react-i18next';
import '../styles/components/_projects.scss';

const Projects = () => {
  const { t } = useTranslation('projects');

  return (
    <section className="projects">
      <h2>{t('title')}</h2>
      {t('description') && <p className="projects__description">{t('description')}</p>}
    </section>
  );
};

export default Projects;
