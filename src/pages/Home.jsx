// src/pages/Home.jsx
import "../styles/pages/_home.scss";
import Presentation from '../components/Presentation';
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";

const Home = () => {
  return (
    <div className="home">
      <Presentation />
      <Skills />
      <Projects />
      <Education />
    </div>
  );
};

export default Home;
