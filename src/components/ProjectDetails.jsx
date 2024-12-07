import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/components/_project-details.scss";

const ProjectDetails = ({ project }) => {
  const { t } = useTranslation("projectCard");

  // Slider configuration
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="project-details">
      <h2 className="project-details__title">
        {t(`items.${project.id}.title`, project.title)}
      </h2>
      <p className="project-details__description">
        {t(`items.${project.id}.description`, project.description)}
      </p>

      {/* Tags display */}
      <div className="project-details__tags">
        {project.tags.map((tag, index) => (
          <span key={index} className="project-details__tag">
            {tag}
          </span>
        ))}
      </div>

            {/* Link to the project */}
            {project.link && (
        <div className="project-details__link">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-details__button">
            Voir le projet
          </a>
        </div>
      )}

      {/* Slider for images */}
      {project.images && project.images.length > 0 && (
        <div className="project-details__slider">
          <Slider {...settings}>
            {project.images.map((image, index) => (
              <div key={index} className="project-details__image-container">
                <img
                  src={image}
                  alt={`Project ${project.id} Image ${index + 1}`}
                  className="project-details__image"
                />
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};

ProjectDetails.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    link: PropTypes.string,
    onClose: PropTypes.func,
  }).isRequired,
};

export default ProjectDetails;
