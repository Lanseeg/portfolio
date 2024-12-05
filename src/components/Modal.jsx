import { useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/components/_modal.scss";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    // Fermer la modale sur "Esc"
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    // Attacher l'écouteur d'événements
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    // Nettoyage
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Si la modale n'est pas ouverte, ne rien afficher
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-background" onClick={onClose}>
      <div
        className="modal-window"
        onClick={(e) => e.stopPropagation()} // Empêche la propagation pour éviter de fermer en cliquant à l'intérieur
      >
        <header className="modal-header">
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
        </header>
        <section className="modal-content">{children}</section>
        <footer className="modal-footer">
          {/* Vous pouvez inclure des boutons ou autres éléments ici */}
        </footer>
      </div>
    </div>
  );
};

// Validation des props
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired, // La modale doit être ouverte ou fermée
  onClose: PropTypes.func.isRequired, // Fonction de fermeture
  children: PropTypes.node, // Contenu de la modale
};

export default Modal;
