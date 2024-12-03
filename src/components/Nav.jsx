// src/components/Nav.jsx
import '../styles/components/_nav.scss';
import { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`nav ${isOpen ? 'open' : ''}`}>
      <button className="nav__toggle" onClick={toggleMenu}>
        ☰ {/* Icône du menu burger */}
      </button>
      <ul className="nav__list">
        <li className="nav__item">
          <a href="/">Home</a>
        </li>
        <li className="nav__item">
          <a href="/about">About</a>
        </li>
        <li className="nav__item">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
