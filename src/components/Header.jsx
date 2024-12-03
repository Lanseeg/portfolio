// src/components/Header.jsx
import PropTypes from 'prop-types';
import Nav from './Nav';
import Language from './Language';
import '../styles/components/_header.scss';

const Header = ({ language, handleLanguageChange }) => {
  return (
    <header className="header">
      <h1>peRan.deV</h1>
      <Language language={language} handleLanguageChange={handleLanguageChange} />
      <Nav />
    </header>
  );
};

Header.propTypes = {
  language: PropTypes.string.isRequired,
  handleLanguageChange: PropTypes.func.isRequired,
};

export default Header;