//
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/main.scss";
import "./i18n";

// Montre l'application React dans l'élément root
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
