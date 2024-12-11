import { useTranslation } from "react-i18next";
import "../styles/components/_presentation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Modal from "./Modal";
import ContactForm from "./ContactForm";
import useModal from "../hooks/useModal";
import RotatingIcons from "./RotatingIcons";
import { motion } from "framer-motion";

const Presentation = () => {
  const { t } = useTranslation("presentation");
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <section className="presentation">
      <RotatingIcons />

      <motion.div
        className="presentation__text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1>{t("title")}</h1>
        <p>{t("description")}</p>
      </motion.div>

      <motion.div
        className="presentation__buttons"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
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
      </motion.div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ContactForm />
      </Modal>
    </section>
  );
};

export default Presentation;
