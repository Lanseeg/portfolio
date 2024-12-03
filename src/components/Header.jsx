// src/components/Header.jsx
import Nav from './Nav';
import '../styles/components/_header.scss';

const Header = () => {
  return (
    <header className="header">
      <h1>peRan.deV</h1>
      <Nav />
    </header>
  );
};

export default Header;