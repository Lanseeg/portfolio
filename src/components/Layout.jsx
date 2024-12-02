//enveloppe toutes les pages et contient les éléments communs comme le Header, le Footer, et tout autre composant partagé
import "../styles/components/_layout.scss";

import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="layout__content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

