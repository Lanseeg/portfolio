import PropTypes from 'prop-types';
import '../styles/components/_projectCard.scss';

const ProjectCard = ({ title, image, tags, description }) => {
  return (
    <div className="project-card" style={image ? { backgroundImage: `url(${image})` } : {}}>
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
        {description && <p className="project-card__description">{description}</p>}
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
};

export default ProjectCard;
