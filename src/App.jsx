// src/App.jsx
import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import AppRouter from './Router';
import i18next from './i18n';

const App = () => {
  useEffect(() => {
    const storedLanguage = localStorage.getItem('language') || 'en';
    i18next.changeLanguage(storedLanguage);
  }, []);

  return (
    <I18nextProvider i18n={i18next}>
      <AppRouter />
    </I18nextProvider>
  );
};

export default App;
