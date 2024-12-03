// src/components/Layout.jsx
import "../styles/components/_layout.scss";

import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, language, handleLanguageChange }) => {
  return (
    <div className="layout">
      <Header language={language} handleLanguageChange={handleLanguageChange} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  language: PropTypes.string.isRequired,
  handleLanguageChange: PropTypes.func.isRequired,
};

export default Layout;

