// src/pages/Home.jsx
import PropTypes from "prop-types";
import "../styles/pages/_home.scss";
import Presentation from '../components/Presentation';
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";

const Home = ({ language }) => {
  return (
    <div className="home">
      <Presentation language={language} />
      <Skills />
      <Projects />
      <Education />
    </div>
  );
};

Home.propTypes = {
  language: PropTypes.string.isRequired,
};

export default Home;
