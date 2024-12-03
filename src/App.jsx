// src/App.jsx
import { useState, useEffect } from 'react';
import AppRouter from './Router';
import i18next from 'i18next';

const App = () => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    // Check if a language is stored in localStorage
    const storedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(storedLanguage);
    i18next.changeLanguage(storedLanguage);
  }, []);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    i18next.changeLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <AppRouter
      language={language}
      handleLanguageChange={handleLanguageChange}
    />
  );
};

export default App;