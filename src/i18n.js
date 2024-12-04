// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// 1 - import translation files
import enNav from './locales/en/nav.json';
import frNav from './locales/fr/nav.json';
import brNav from './locales/br/nav.json';
import enPresentation from './locales/en/presentation.json';
import frPresentation from './locales/fr/presentation.json';
import brPresentation from './locales/br/presentation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        nav: enNav,
        presentation: enPresentation, // Ajout des traductions de "Presentation"
      },
      fr: {
        nav: frNav,
        presentation: frPresentation, // Ajout des traductions en français
      },
      br: {
        nav: brNav,
        presentation: brPresentation, // Ajout des traductions en breton
      },
    },
    fallbackLng: 'en', // Default language
    ns: ['nav', 'presentation'], // Déclare les namespaces
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
