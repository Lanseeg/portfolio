// src/components/ProjectDetails.jsx
import PropTypes from "prop-types";
import "../styles/components/_project-details.scss";

const ProjectDetails = ({ title, description, tags, image, onClose }) => {
  return (
    <div className="project-details">
      <button className="close-button" onClick={onClose} aria-label="Close">
        ×
      </button>
      <img src={image} alt={title} className="project-details__image" />
      <h2 className="project-details__title">{title}</h2>
      <p className="project-details__description">{description}</p>
      <div className="project-details__tags">
        {tags.map((tag, index) => (
          <span key={index} className="project-details__tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

ProjectDetails.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProjectDetails;
