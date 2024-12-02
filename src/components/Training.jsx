import PropTypes from "prop-types";
import "../styles/components/_training.scss";

const Training = ({ trainings, language }) => {
  return (
    <div className="training">
      <h2>Training</h2>
      <ul>
        {trainings.map((training) => (
          <li key={training._id}>
            <h3>
              {training.title[language] || training.title.en} -{" "}
              {training.institution[language] || training.institution.en}
            </h3>
            <p>
              {new Date(training.startDate).toLocaleDateString(language, {
                year: "numeric",
                month: "long",
              })}{" "}
              -{" "}
              {new Date(training.endDate).toLocaleDateString(language, {
                year: "numeric",
                month: "long",
              })}
            </p>
            <ul>
              {training.keySkills[language].map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

Training.propTypes = {
  trainings: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.object.isRequired, // Multilingual titles
      institution: PropTypes.object.isRequired, // Multilingual institutions
      keySkills: PropTypes.object.isRequired, // Multilingual key skills
      startDate: PropTypes.string.isRequired, // ISO date format
      endDate: PropTypes.string.isRequired, // ISO date format
    })
  ).isRequired,
  language: PropTypes.string.isRequired, // Current language
};

export default Training;
