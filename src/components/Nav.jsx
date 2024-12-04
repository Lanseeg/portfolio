// src/components/Nav.jsx
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Language from './Language';
import '../styles/components/_nav.scss';

const Nav = ({ language, handleLanguageChange }) => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      {/* Desktop menu navbar */}
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="/">{t("home")}</a>
          </li>
          <li className="nav__item">
            <a href="/about">{t("about")}</a>
          </li>
          <li className="nav__item">
            <a href="/projects">{t("projects")}</a>
          </li>
          <li className="nav__item">
            <a href="/contact">{t("contact")}</a>
          </li>
        </ul>

        {/* Toggle menu button for smartphone and tablet */}
        <button
          className="nav__toggle"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? t("close_menu") : t("open_menu")}
        >
          ☰
        </button>
      </nav>

      {/* Dropdown menu for tablet and smartphone */}
      <div className={`nav__dropdown ${isMenuOpen ? 'visible' : ''}`}>
        <ul className="nav__list">
          <li className="nav__item">
            <a href="/">{t("home")}</a>
          </li>
          <li className="nav__item">
            <a href="/about">{t("about")}</a>
          </li>
          <li className="nav__item">
            <a href="/projects">{t("projects")}</a>
          </li>
          <li className="nav__item">
            <a href="/contact">{t("contact")}</a>
          </li>
        </ul>
        {/* Dropdown language selector */}
        <div className="nav__language">
          <Language language={language} handleLanguageChange={handleLanguageChange} />
        </div>
      </div>
    </>
  );
};

Nav.propTypes = {
  language: PropTypes.string.isRequired,
  handleLanguageChange: PropTypes.func.isRequired,
};

export default Nav;
