import { useState } from "react";
import ProjectCard from "./ProjectCard";
import Modal from "./Modal";
import ProjectDetails from "./ProjectDetails";
import projectData from "../content/projectData.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/components/_projects.scss";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation("projects");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedTag, setSelectedTag] = useState("All");

  const allTags = [
    "All",
    ...new Set(projectData.flatMap((project) => project.tags)),
  ];

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const filteredProjects =
    selectedTag === "All"
      ? projectData
      : projectData.filter((project) => project.tags.includes(selectedTag));

  const settings = {
    dots: true,
    infinite: false,
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

  return (
    <section className="projects">
      <h2>{t("title")}</h2>
      {t("description") && <p className="projects__description">{t("description")}</p>}

      {/* Boutons de filtres */}
      <div className="projects__filters">
        {allTags.map((tag) => (
          <button
            key={tag}
            className={`projects__filter-button ${selectedTag === tag ? "active" : ""}`}
            onClick={() => setSelectedTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Slider React-Slick */}
      <Slider {...settings}>
        {filteredProjects.map((project) => (
          <div key={project.id}>
            <ProjectCard
              title={project.title}
              image={project.images[0]}
              tags={project.tags}
              onButtonClick={() => handleOpenModal(project)}
            />
          </div>
        ))}
      </Slider>

      {/* Modal to display project details */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedProject && <ProjectDetails project={selectedProject} />}
      </Modal>
    </section>
  );
};

export default Projects;
