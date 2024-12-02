import PropTypes from "prop-types";
import "../styles/components/_language.scss";

const Language = ({ language, onChangeLanguage }) => {
  return (
    <div className="language-selector">
      <button
        onClick={() => onChangeLanguage("en")}
        className={language === "en" ? "active" : ""}
      >
        EN
      </button>
      <button
        onClick={() => onChangeLanguage("fr")}
        className={language === "fr" ? "active" : ""}
      >
        FR
      </button>
      <button
        onClick={() => onChangeLanguage("br")}
        className={language === "br" ? "active" : ""}
      >
        BR
      </button>
    </div>
  );
};

Language.propTypes = {
  language: PropTypes.string.isRequired,
  onChangeLanguage: PropTypes.func.isRequired,
};

export default Language;
