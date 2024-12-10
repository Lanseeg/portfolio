import { useTranslation } from "react-i18next";
import "../styles/components/_presentation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Modal from "./Modal";
import ContactForm from "./ContactForm";
import useModal from "../hooks/useModal";
import RotatingIcons from "./RotatingIcons";

const Presentation = () => {
  const { t } = useTranslation("presentation");
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <section className="presentation">
      <RotatingIcons />
      <div className="presentation__text">
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
      </div>
      <div className="presentation__buttons">
        <a
          href="https://github.com/Lanseeg"
          target="_blank"
          rel="noopener noreferrer"
          className="button github-button"
        >
          <FontAwesomeIcon icon={faGithub} /> {t("github")}
        </a>
        <button className="button contact-button" onClick={openModal}>
          {t("contact")}
        </button>
      </div>

      {/* Modal with contact form */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ContactForm />
      </Modal>
    </section>
  );
};

export default Presentation;