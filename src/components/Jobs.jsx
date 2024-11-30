import PropTypes from "prop-types";

const Jobs = ({ jobs }) => {
  return (
    <div className="jobs">
      <h2>Jobs</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            {job.position} at {job.company} ({job.years})
          </li>
        ))}
      </ul>
    </div>
  );
};

Jobs.propTypes = {
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      position: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      years: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Jobs;
