import PropTypes from "prop-types";
import "./Spinner.scss";


const Training = ({ trainings }) => {
  return (
    <div className="training">
      <h2>Training</h2>
      <ul>
        {trainings.map((training) => (
          <li key={training.id}>
            {training.title} - {training.institution}
          </li>
        ))}
      </ul>
    </div>
  );
};

Training.propTypes = {
    trainings: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        institution: PropTypes.string.isRequired,
      })
    ).isRequired,
  };

export default Training;
