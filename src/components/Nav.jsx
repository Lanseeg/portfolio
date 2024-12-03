// src/components/Nav.jsx
import { useTranslation } from 'react-i18next';
import '../styles/components/_nav.scss';

const Nav = () => {
  const { t } = useTranslation();

  return (
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
    </nav>
  );
};

export default Nav;
