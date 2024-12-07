import PropTypes from "prop-types";
import "../styles/components/_projectCard.scss";

const ProjectCard = ({ title, image, tags, onButtonClick }) => {
  return (
    <div className="project-card" style={image ? { backgroundImage: `url(${image})` } : { backgroundColor: "#ccc" }}>
      <div className="project-card__content">
        <h3 className="project-card__title">{title}</h3>
        {tags && (
          <ul className="project-card__tags">
            {tags.map((tag, index) => (
              <li key={index} className="project-card__tag">
                {tag}
              </li>
            ))}
          </ul>
        )}
        <button className="project-card__button" onClick={onButtonClick}>
          Voir les détails
        </button>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  onButtonClick: PropTypes.func.isRequired,
};

export default ProjectCard;
