import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../styles/components/_skillCard.scss';

const SkillCard = ({ name, level }) => {
  return (
    <div className="skill-card">
      <h3 className="skill-card__name">{name}</h3>
      <div className="skill-card__stars">
        {[...Array(5)].map((_, index) => (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            className={index < level ? 'star active' : 'star'}
          />
        ))}
      </div>
    </div>
  );
};

SkillCard.propTypes = {
  name: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
};

export default SkillCard;
