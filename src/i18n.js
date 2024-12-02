import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en.json";
import translationFR from "./locales/fr.json";
import translationBR from "./locales/br.json";

const resources = {
  en: { translation: translationEN },
  fr: { translation: translationFR },
  br: { translation: translationBR },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  fallbackLng: "en", // Fallback if the language is not available
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
