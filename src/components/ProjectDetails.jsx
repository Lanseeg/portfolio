import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/components/_project-details.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

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
      {/* Link to the project */}
      {project.link && (
        <div className="project-details__link">
          <FontAwesomeIcon icon={faGlobe} className="project-details__icon" />
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-details__button"
          >
            Open site
          </a>
        </div>
      )}
      {/* Tags display */}
      <div className="project-details__tags">
        {project.tags.map((tag, index) => (
          <span key={index} className="project-details__tag">
            {tag}
          </span>
        ))}
      </div>
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
      <p className="project-details__description">
        {t(`items.${project.id}.description`, project.description)}
      </p>
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
