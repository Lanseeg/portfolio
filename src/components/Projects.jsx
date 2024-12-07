// src/components/Projects.jsx
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import Modal from "./Modal";
import ProjectDetails from "./ProjectDetails";
import projectData from "../content/projectData.json"; // Import des données JSON
import Slider from "react-slick"; // Import du Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/components/_projects.scss";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation("projects"); // Pour le titre et la description
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Configuration du Slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Fonction pour ouvrir la modale avec le projet sélectionné
  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Fonction pour fermer la modale
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className="projects">
      <h2>{t("title")}</h2>
      {t("description") && <p className="projects__description">{t("description")}</p>}

      {/* Slider React-Slick */}
      <Slider {...settings}>
  {projectData.map((project) => (
    <div key={project.id}>
      <ProjectCard
        title={project.title}
        image={project.images[0]} // Prendre la première image du tableau
        tags={project.tags}
        onButtonClick={() => handleOpenModal(project)}
      />
    </div>
  ))}
</Slider>


      {/* Modale pour afficher les détails du projet */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedProject && <ProjectDetails project={selectedProject} />}
      </Modal>
    </section>
  );
};

export default Projects;
