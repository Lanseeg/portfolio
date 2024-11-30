import { useEffect, useState } from "react";
import PropTypes from "prop-types"; // For prop validation
import Skills from "../components/Skills";
import Training from "../components/Training";
import Jobs from "../components/Jobs";
import Spinner from "../components/Spinner";
import { fetchSkills, fetchTraining, fetchJobs } from "../services/api";

const HomePage = ({ language }) => {
  const [skills, setSkills] = useState([]);
  const [trainings, setTrainings] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const skillsData = await fetchSkills(language);
        const trainingData = await fetchTraining(language);
        const jobsData = await fetchJobs(language);

        // Update state with fetched data
        setSkills(skillsData);
        setTrainings(trainingData);
        setJobs(jobsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [language]); // Re-fetch data whenever the language changes

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="homepage">
      <h1>Welcome to My Portfolio</h1>
      <div className="container">
        <Skills skills={skills} />
        <Training trainings={trainings} language={language} />
        <Jobs jobs={jobs} />
      </div>
    </div>
  );
};

// Validate props using PropTypes
HomePage.propTypes = {
  language: PropTypes.string.isRequired,
};

export default HomePage;
