import PropTypes from "prop-types";
import content from "../content/home.json";

const Presentation = ({ language }) => {
  return (
    <div className="presentation">
      <h2>{content[language].presentation}</h2>
      <p>{content[language].presentationText}</p>
    </div>
  );
};

Presentation.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Presentation;
