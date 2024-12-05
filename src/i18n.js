import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// 1 - Import JSON
//NAV
import enNav from './locales/en/nav.json';
import frNav from './locales/fr/nav.json';
import brNav from './locales/br/nav.json';
//PRESENTATION
import enPresentation from './locales/en/presentation.json';
import frPresentation from './locales/fr/presentation.json';
import brPresentation from './locales/br/presentation.json';
//SKILLS
import enSkills from './locales/en/skills.json';
import frSkills from './locales/fr/skills.json';
import brSkills from './locales/br/skills.json';
//PROJECTS
import enProjects from './locales/en/projects.json';
import frProjects from './locales/fr/projects.json';
import brProjects from './locales/br/projects.json';
//PROJECTCARD
import enProjectCard from './locales/en/projectcard.json';
import frProjectCard from './locales/fr/projectcard.json';
import brProjectCard from './locales/br/projectcard.json';
//EDUCATION
import enEducation from './locales/en/education.json';
import frEducation from './locales/fr/education.json';
import brEducation from './locales/br/education.json';
//ABOUT
import enAbout from './locales/en/about.json';
import frAbout from './locales/fr/about.json';
import brAbout from './locales/br/about.json';

// 2 - Add ressource & namespace
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
        education: enEducation,
        about: enAbout,
      },
      fr: {
        nav: frNav,
        presentation: frPresentation,
        skills: frSkills,
        projects: frProjects,
        projectCard: frProjectCard,
        education: frEducation,
        about: frAbout,
      },
      br: {
        nav: brNav,
        presentation: brPresentation,
        skills: brSkills,
        projects: brProjects,
        projectCard: brProjectCard,
        education: brEducation,
        about: brAbout,
      },
    },
    fallbackLng: 'en',
    ns: ['nav', 'presentation', 'skills', 'projects', 'projectCard', 'education', 'about'],
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
