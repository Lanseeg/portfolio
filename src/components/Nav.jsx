// src/components/Nav.jsx
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import Modal from "./Modal";
import ContactForm from "./ContactForm";
import "../styles/components/_nav.scss";

const Nav = () => {
  const { t } = useTranslation("nav"); // Namespace "nav"
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Debug
  /*
  useEffect(() => {
    console.log("Current language in i18next:", i18n.language);
  }, [i18n.language]);
  */

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    closeMenu();
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
            <a
              href="#contact"
              className="nav__link"
              onClick={(e) => openModal(e)}
            >
              {t("contact")}
            </a>
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
            <a
              href="#contact"
              className="nav__link"
              onClick={(e) => openModal(e)}
            >
              {t("contact")}
            </a>
          </li>
        </ul>
      </div>

      {/* Modal with contact form */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ContactForm />
      </Modal>
    </>
  );
};

export default Nav;
