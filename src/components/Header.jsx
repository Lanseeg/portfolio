// src/components/Header.jsx
import PropTypes from 'prop-types';
import Nav from './Nav';
import Language from './Language';
import '../styles/components/_header.scss';

const Header = ({ language, handleLanguageChange }) => {
  return (
    <header className="header" role="banner">
      <a href="/" className="site-logo" aria-label="Return to the homepage">
        <h1>
          peRan<span className="dot-dev">.deV</span>
        </h1>
      </a>
      <div className="header-options">
      <Nav />
      <Language language={language} handleLanguageChange={handleLanguageChange} />
      </div>
    </header>
  );
};

Header.propTypes = {
  language: PropTypes.string.isRequired,
  handleLanguageChange: PropTypes.func.isRequired,
};

export default Header;
