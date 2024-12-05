import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import '../styles/components/_skillCard.scss';

const SkillCard = ({ name, description, image }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="skill-card"
      variants={cardVariants}
      whileHover={{ scale: 1.05, boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.2)' }} // Animation au hover
      whileTap={{ scale: 0.95, boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)' }}  // Animation au clic
    >
      {/* Afficher une image si elle existe */}
      {image && (
        <div className="skill-card__image-container">
          <img
            src={image}
            alt={`${name} illustration`}
            className="skill-card__image"
          />
        </div>
      )}
      <h3 className="skill-card__name">{name}</h3>
      {description && <p className="skill-card__description">{description}</p>}
    </motion.div>
  );
};

SkillCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
};

export default SkillCard;
