import PropTypes from 'prop-types';
import '../styles/components/_skillCard.scss';

const SkillCard = ({ name, description, image }) => {
  return (
    <div className="skill-card">
      {/* Afficher une image si elle existe */}
      {image && (
        <div className="skill-card__image-container">
          <img
            src={image} // Utilisation directe du chemin absolu
            alt={`${name} illustration`}
            className="skill-card__image"
          />
        </div>
      )}
      <h3 className="skill-card__name">{name}</h3>
      {description && <p className="skill-card__description">{description}</p>}
    </div>
  );
};

SkillCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string, // Optionnel
  image: PropTypes.string // Optionnel
};

export default SkillCard;
