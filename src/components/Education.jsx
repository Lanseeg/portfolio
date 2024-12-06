import { useTranslation } from "react-i18next";
import Collapse from "./Collapse";
import "../styles/components/_education.scss";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

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
    <section className="education">
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
    </section>
  );
};

export default Education;
