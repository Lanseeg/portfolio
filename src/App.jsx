import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage";

const App = () => {
  const [language, setLanguage] = useState("en"); // Default language is English

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <>
      {/* Language Selector */}
      <header>
        <button onClick={() => handleLanguageChange("en")}>English</button>
        <button onClick={() => handleLanguageChange("fr")}>Français</button>
        <button onClick={() => handleLanguageChange("br")}>Brezhoneg</button>
      </header>

      <Router>
        <Routes>
          {/* Pass language as a prop to HomePage */}
          <Route path="/" element={<HomePage language={language} />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
