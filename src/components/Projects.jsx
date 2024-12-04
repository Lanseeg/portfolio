import { useTranslation } from 'react-i18next';
import ProjectCard from './ProjectCard';
import projectCards from '../locales/en/projectcard.json';
import '../styles/components/_projects.scss';

const Projects = () => {
  const { t } = useTranslation('projects'); // Namespace 'projects'

  return (
    <section className="projects">
      <h2>{t('title')}</h2>
      {t('description') && <p className="projects__description">{t('description')}</p>}

      <div className="projects__grid">
        {projectCards.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            image={project.image}
            tags={project.tags}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
