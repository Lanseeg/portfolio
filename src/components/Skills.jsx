import PropTypes from "prop-types";
import "./Skills.scss";

const Skills = ({ skills }) => {
  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill) => (
          <div key={skill._id} className="skill-card">
            <h3>{skill.name}</h3>
            <div className="stars">
              {Array.from({ length: 5 }, (_, index) => (
                <span
                  key={index}
                  className={index < skill.level ? "star filled" : "star"}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Skills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      level: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ).isRequired,
};

export default Skills;
