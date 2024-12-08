// src/components/Footer.jsx
import '../styles/components/_footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Pierre Gourves - Peran.dev - All rights reserved.</p>
      <div className="footer__icons">
        <a href="https://www.linkedin.com/in/pierre-gourves/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="footer__icon" />
        </a>
        <a href="https://github.com/Lanseeg" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="footer__icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
