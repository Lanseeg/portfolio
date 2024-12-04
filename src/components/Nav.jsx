import PropTypes from "prop-types";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import Language from "./Language";
import "../styles/components/_nav.scss";

const Nav = ({ language, handleLanguageChange }) => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      {/* Desktop menu navbar */}
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {t("home")}
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {t("about")}
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {t("contact")}
            </NavLink>
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
      <div className={`nav__dropdown ${isMenuOpen ? "visible" : ""}`}>
        <ul className="nav__list">
          <li className="nav__item">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMenu}
            >
              {t("home")}
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMenu}
            >
              {t("about")}
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={closeMenu}
            >
              {t("contact")}
            </NavLink>
          </li>
        </ul>
        {/* Dropdown language selector */}
        <div className="nav__language">
          <Language
            language={language}
            handleLanguageChange={handleLanguageChange}
          />
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
