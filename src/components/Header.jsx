import '../styles/components/_header.scss';
const Header = () => {
  return (
    <header className="header">
      <h1>My Portfolio</h1>
      <nav className="header__nav">
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
    </header>
  );
};

export default Header;
