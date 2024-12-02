import PropTypes from "prop-types";
import "../styles/components/_jobs.scss";

const Jobs = ({ jobs }) => {
  return (
    <div className="jobs">
      <h2>Jobs</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            {/* Display the job position and company */}
            <strong>{job.position}</strong> at <em>{job.company}</em> ({job.years})
          </li>
        ))}
      </ul>
    </div>
  );
};

Jobs.propTypes = {
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired, // Now expecting `id` after mapping
      position: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      years: PropTypes.string.isRequired, // Formatted years (e.g., "2012 - 2014")
    })
  ).isRequired,
};

export default Jobs;
