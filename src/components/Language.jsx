// src/components/Language.jsx
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import '../styles/components/_language.scss';

const Language = ({ language, handleLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Read language from localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage && savedLanguage !== language) {
      handleLanguageChange(savedLanguage);
    }
  }, [language, handleLanguageChange]);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const selectLanguage = (lang) => {
    handleLanguageChange(lang);
    localStorage.setItem('selectedLanguage', lang);
    setIsOpen(false);
  };

  const languageLabels = {
    en: 'EN',
    fr: 'FR',
    br: 'BR',
  };

  return (
    <div className="language-selector">
      <button
        onClick={toggleMenu}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-label={`Current language: ${languageLabels[language]}`}
      >
        {languageLabels[language]}
      </button>
      {isOpen && (
        <ul role="menu" className="language-menu">
          {Object.entries(languageLabels).map(([lang, label]) => (
            <li key={lang}>
              <button
                onClick={() => selectLanguage(lang)}
                className={language === lang ? 'active' : ''}
                role="menuitem"
                aria-label={`Switch to ${label}`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Language.propTypes = {
  language: PropTypes.string.isRequired,
  handleLanguageChange: PropTypes.func.isRequired,
};

export default Language;
