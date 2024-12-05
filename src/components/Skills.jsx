import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "../styles/components/_skills.scss";
import SkillCard from "./SkillCard";
import skills from "../content/skills.json";

const Skills = () => {
  const { t } = useTranslation("skills");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Chaque enfant apparaît avec un délai
      },
    },
  };

  return (
    <section className="skills">
      <h2>{t("title")}</h2>
      {t("description") && (
        <p className="skills__description">{t("description")}</p>
      )}

      {/* Display skillcards */}
      <motion.div
        className="skills__grid"
        variants={containerVariants} // Animation collective
        initial="hidden"
        animate="visible"
      >
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            description={skill.description}
            image={skill.image}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
