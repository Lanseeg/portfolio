// src/i18n.js
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

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        nav: enNav,
        presentation: enPresentation,
        skills: enSkills,
      },
      fr: {
        nav: frNav,
        presentation: frPresentation,
        skills: frSkills,
      },
      br: {
        nav: brNav,
        presentation: brPresentation,
        skills: brSkills,
      },
    },
    fallbackLng: 'en', // Default language
    ns: ['nav', 'presentation', 'skills'], // Declare namespaces
    defaultNS: 'nav',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'], // localStorage has higher priority
      caches: ['localStorage'], // language cache in localStorage
    },
  });

export default i18n;
