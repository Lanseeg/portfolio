import { useEffect } from "react";
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
  }, [controls, inView]);

  return (
    <section className="skills" ref={ref}>
      {/* h2 animation */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {t("title")}
      </motion.h2>

      {/* p animation */}
      {t("description") && (
        <motion.p
          className="skills__description"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {t("description")}
        </motion.p>
      )}

      {/* Animated grid */}
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
            image={skill.image}
            tags={skill.tags}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
