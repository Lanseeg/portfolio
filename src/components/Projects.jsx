import { useTranslation } from 'react-i18next';
import ProjectCard from './ProjectCard';
import Slider from 'react-slick';
import projectCards from '../locales/en/projectcard.json';
import '../styles/components/_projects.scss';

const Projects = () => {
  const { t } = useTranslation('projects'); // Namespace 'projects'

  // Configuration de react-slick
  const settings = {
    dots: true, // Affiche les points de navigation
    infinite: true, // Défilement infini
    speed: 500, // Vitesse de transition en ms
    slidesToShow: 3, // Nombre de slides visibles
    slidesToScroll: 1, // Nombre de slides qui défilent à la fois
    swipeToSlide: true, // Activer le swipe pour changer de slide
    responsive: [
      {
        breakpoint: 768, // En dessous de 768px
        settings: {
          slidesToShow: 1, // 1 slide visible sur mobile
        },
      },
      {
        breakpoint: 1024, // En dessous de 1024px
        settings: {
          slidesToShow: 2, // 2 slides visibles sur tablette
        },
      },
    ],
  };

  return (
    <section className="projects">
      <h2>{t('title')}</h2>
      {t('description') && <p className="projects__description">{t('description')}</p>}

      {/* Slider React-Slick */}
      <Slider {...settings}>
        {projectCards.map((project) => (
          <div key={project.id}>
            <ProjectCard
              title={project.title}
              image={project.image}
              tags={project.tags}
              description={project.description}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Projects;
