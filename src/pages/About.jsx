import { useTranslation } from 'react-i18next';
import "../styles/pages/_about.scss";

const About = () => {
  const { t } = useTranslation('about'); // Namespace 'about'

  return (
    <div className="about">
      {/* Conteneur principal */}
      <div className="about__container">
        {/* Div 1 : Photo à gauche */}
        <div className="about__photo-section">
          <img
            src="/images/about/pg.png"
            alt={t('photoCaption')} // Caption dans les traductions
            className="about__photo"
          />
          <h3 className="about__title">{t('title')}</h3>
          <p className="about__caption">{t('photoCaption')}</p>
        </div>

        {/* Div 2 : Présentation à droite */}
        <div className="about__presentation-section">
          <p className="about__presentation">{t('presentation')}</p>
        </div>
      </div>

      {/* Lien pour télécharger le CV */}
      <div className="about__cv">
        <a
          href="/images/about/cv.pdf"
          download
          className="about__cv-link"
        >
          {t('downloadCV')}
        </a>
      </div>
    </div>
  );
};

export default About;
