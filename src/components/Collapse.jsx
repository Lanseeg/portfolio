import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "../styles/components/_collapse.scss";

const Collapse = ({ icon, title, subtitle, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      {/* Header with rotating icon */}
      <div className="collapse__header" onClick={toggleCollapse}>
        <span className="collapse__icon">
          <FontAwesomeIcon icon={icon} />
        </span>
        <div className="collapse__titles">
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
        <span className={`collapse__toggle ${isOpen ? "open" : ""}`}>
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
      </div>
      {/* Content with animation */}
      <div
        className={`collapse__content ${isOpen ? "open" : ""}`}
        style={{
          maxHeight: isOpen ? "300px" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease, opacity 0.3s ease",
          opacity: isOpen ? 1 : 0,
        }}
      >
        {children}
      </div>
    </div>
  );
};

Collapse.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Collapse;
