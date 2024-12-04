// src/components/Header.jsx
import PropTypes from 'prop-types';
import Nav from './Nav';
import { NavLink } from 'react-router-dom';
import Language from './Language';
import '../styles/components/_header.scss';

const Header = ({ language, handleLanguageChange }) => {
  return (
    <header className="header" role="banner">
     <NavLink to="/" className="site-logo" aria-label="Return to the homepage">
        <h1>
          peRan<span className="dot-dev">.deV</span>
        </h1>
      </NavLink>
      <div className="header-options">
        <Nav language={language} handleLanguageChange={handleLanguageChange} />
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
