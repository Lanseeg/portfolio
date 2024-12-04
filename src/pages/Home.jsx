// src/pages/Home.jsx
import PropTypes from "prop-types";
import "../styles/pages/_home.scss";
import Presentation from '../components/Presentation';
import Skills from "../components/Skills";

const Home = ({ language }) => {
  return (
    <div className="home">
      <Presentation language={language} />
      <Skills />
    </div>
  );
};

Home.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Home;
