import { useEffect, useState } from "react";
import Skills from "../components/Skills";
import Training from "../components/Training";
import Jobs from "../components/Jobs";
import Spinner from "../components/Spinner";
import { fetchSkills, fetchTraining, fetchJobs } from "../services/api";

const HomePage = () => {
  const [skills, setSkills] = useState([]);
  const [trainings, setTrainings] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const skillsData = await fetchSkills();
        const trainingData = await fetchTraining();
        const jobsData = await fetchJobs();

        // Mise à jour des états
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
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="homepage">
      <h1>Welcome to My Portfolio</h1>
      <div className="container">
        <Skills skills={skills} />
        <Training trainings={trainings} />
        <Jobs jobs={jobs} />
      </div>
    </div>
  );
};

export default HomePage;
