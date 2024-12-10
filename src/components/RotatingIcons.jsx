import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import "../styles/components/_rotatingIcons.scss";

const RotatingCircle = () => {
  return (
    <div className="icon-container">
      <div className="center-icon">
        <FontAwesomeIcon icon={faGlobe} size="3x" style={{ color: "#d68800" }} />
      </div>
      <div className="dotted-circle"></div>
    </div>
  );
};

export default RotatingCircle;
