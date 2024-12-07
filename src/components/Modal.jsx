import { useEffect } from "react";
import PropTypes from "prop-types";
import "../styles/components/_modal.scss";

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    // Close clicking Esc. key
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    // Event listener
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    // Clean up
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-background" onClick={onClose}>
      <div
        className="modal-window"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="modal-header">
          <button className="modal-close" title="Close" aria-label="Close" onClick={onClose}>
            &times;
          </button>
        </header>
        <section className="modal-content">{children}</section>
        <footer className="modal-footer">
          {/* content can be added here */}
        </footer>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Modal;
