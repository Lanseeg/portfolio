// src/Router.jsx
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const AppRouter = ({ language, handleLanguageChange }) => {
  return (
    <Router>
      <Layout language={language} handleLanguageChange={handleLanguageChange}>
        <Routes>
        <Route
            path="/"
            element={<Home language={language} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

AppRouter.propTypes = {
  language: PropTypes.string.isRequired,
  handleLanguageChange: PropTypes.func.isRequired,
};

export default AppRouter;