import { useEffect } from "react"; // Importer uniquement les hooks nécessaires
import { useTranslation } from "react-i18next";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/components/_skills.scss";
import SkillCard from "./SkillCard";
import skills from "../content/skills.json";

const Skills = () => {
  const { t } = useTranslation("skills");
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    // hidden can be added if needed with else
  }, [controls, inView]);

  return (
    <section className="skills" ref={ref}>
      <h2>{t("title")}</h2>
      {t("description") && (
        <p className="skills__description">{t("description")}</p>
      )}

      <motion.div
        className="skills__grid"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
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
