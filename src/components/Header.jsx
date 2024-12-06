// src/components/Header.jsx
import Nav from './Nav';
import { NavLink } from 'react-router-dom';
import Language from './Language';
import '../styles/components/_header.scss';

const Header = () => {
  return (
    <header className="header" role="banner">
     <NavLink to="/" className="site-logo" aria-label="Return to the homepage">
        <h1>
          peRan<span className="dot-dev">.deV</span>
        </h1>
      </NavLink>
      <div className="header-options">
        <Nav />
        <Language />
      </div>
    </header>
  );
};

export default Header;
