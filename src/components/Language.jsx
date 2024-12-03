// src/components/Language.jsx
import PropTypes from 'prop-types';
import '../styles/components/_language.scss';
const Language = ({ language, handleLanguageChange }) => {
  return (
    <div className="language-selector">
      <button
        onClick={() => handleLanguageChange('en')}
        className={language === 'en' ? 'active' : ''}
      >
        EN
      </button>
      <button
        onClick={() => handleLanguageChange('fr')}
        className={language === 'fr' ? 'active' : ''}
      >
        FR
      </button>
      <button
        onClick={() => handleLanguageChange('br')}
        className={language === 'br' ? 'active' : ''}
      >
        BR
      </button>
    </div>
  );
};

Language.propTypes = {
  language: PropTypes.string.isRequired,
  handleLanguageChange: PropTypes.func.isRequired,
};

export default Language;