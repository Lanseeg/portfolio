
// src/i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// 1 - import translation files
import enNav from './locales/en/nav.json';
import frNav from './locales/fr/nav.json';
import brNav from './locales/br/nav.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { nav: enNav }, // 2 - add locales
      fr: { nav: frNav },
      br: { nav: brNav },
    },
    fallbackLng: 'en',
    ns: ['nav'], // 3 - declare namespaces
    defaultNS: 'nav',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
