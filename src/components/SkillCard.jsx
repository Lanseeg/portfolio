import PropTypes from "prop-types";
import { motion } from "framer-motion";
import "../styles/components/_skillCard.scss";

const SkillCard = ({ name, image, tags }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="skill-card"
      variants={cardVariants}
      whileHover={{ scale: 1.05, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)" }}
      whileTap={{ scale: 0.95, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)" }}
    >
      {/* Display the image if it exists */}
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
      {tags && (
        <ul className="skill-card__tags">
          {tags.map((tag, index) => (
            <li key={index} className="skill-card__tag">
              {tag}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
};

SkillCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default SkillCard;
