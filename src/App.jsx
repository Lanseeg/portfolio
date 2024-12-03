import { useState } from 'react';
import AppRouter from './Router';
import i18next from 'i18next';
const App = () => {
  const [language, setLanguage] = useState('en');

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