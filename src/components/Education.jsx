import { useTranslation } from "react-i18next";
import Collapse from "./Collapse";
import "../styles/components/_education.scss";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Education = () => {
  const { t } = useTranslation("education");
  const educationData = t("items", { returnObjects: true });

  // Check if educationData is an array
  if (!Array.isArray(educationData)) {
    console.error("Expected educationData to be an array, got:", educationData);
    return null;
  }

  // Sort educationData by endDate
  const sortedEducationData = [...educationData].sort((a, b) => {
    const dateA = new Date(a.endDate);
    const dateB = new Date(b.endDate);
    return dateB - dateA;
  });

  return (
    <motion.section
      className="education"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2>{t("title")}</h2>
      {t("description") && (
        <p className="education__description">{t("description")}</p>
      )}

      <div className="education__list">
        {sortedEducationData.map((edu, index) => (
          <Collapse
            key={index}
            icon={faGraduationCap}
            title={edu.title}
            subtitle={edu.institution}
          >
            <p>
              {edu.startDate} - {edu.endDate}
            </p>
            <ul>
              {edu.keySkills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </Collapse>
        ))}
      </div>
    </motion.section>
  );
};

export default Education;
