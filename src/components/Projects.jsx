import PropTypes from "prop-types";
import "../styles/components/_projects.scss"; 

const Projects = ({ projects }) => {
  return (
<div className="projects">
  <h2>Projects</h2>
  <div className="projects-grid">
    {projects.map((project) => (
      <div className="project-card" key={project.id}>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul>
          {project.technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>
  );
};

Projects.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      technologies: PropTypes.arrayOf(PropTypes.string).isRequired
    })
  ).isRequired
};

export default Projects;
