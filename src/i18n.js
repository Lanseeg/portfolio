import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// import translation files
import enNav from './locales/en/nav.json';
import frNav from './locales/fr/nav.json';
import brNav from './locales/br/nav.json';
import enPresentation from './locales/en/presentation.json';
import frPresentation from './locales/fr/presentation.json';
import brPresentation from './locales/br/presentation.json';
import enSkills from './locales/en/skills.json';
import frSkills from './locales/fr/skills.json';
import brSkills from './locales/br/skills.json';
import enProjects from './locales/en/projects.json';
import frProjects from './locales/fr/projects.json';
import brProjects from './locales/br/projects.json';
import enProjectCard from './locales/en/projectcard.json';
import frProjectCard from './locales/fr/projectcard.json';
import brProjectCard from './locales/br/projectcard.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        nav: enNav,
        presentation: enPresentation,
        skills: enSkills,
        projects: enProjects,
        projectCard: enProjectCard,
      },
      fr: {
        nav: frNav,
        presentation: frPresentation,
        skills: frSkills,
        projects: frProjects,
        projectCard: frProjectCard,
      },
      br: {
        nav: brNav,
        presentation: brPresentation,
        skills: brSkills,
        projects: brProjects,
        projectCard: brProjectCard,
      },
    },
    fallbackLng: 'en',
    ns: ['nav', 'presentation', 'skills', 'projects', 'projectCard'],
    defaultNS: 'projects',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
