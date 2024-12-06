import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/components/_language.scss';

const Language = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const selectLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
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
        aria-label={`Current language: ${languageLabels[i18n.language]}`}
      >
        {languageLabels[i18n.language]}
      </button>
      {isOpen && (
        <ul role="menu" className="language-menu">
          {Object.entries(languageLabels).map(([lang, label]) => (
            <li key={lang}>
              <button
                onClick={() => selectLanguage(lang)}
                className={i18n.language === lang ? 'active' : ''}
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

export default Language;
