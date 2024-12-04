import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import "../styles/components/_presentation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

const Presentation = () => {
  const { t } = useTranslation("presentation");

  return (
    <section className="presentation">
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
      <div className="presentation__buttons">
        {/* GitHub Button */}
        <a
          href="https://github.com/Lanseeg"
          target="_blank"
          rel="noopener noreferrer"
          className="button github-button"
        >
          <FontAwesomeIcon icon={faGithub} /> {t("github")}
        </a>
        {/* Contact Button */}
        <NavLink to="/contact" className="button contact-button">
          {t("contact")}
        </NavLink>
      </div>
    </section>
  );
};

Presentation.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Presentation;
