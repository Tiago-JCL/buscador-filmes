import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Importa o roteador
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter basename="/buscador-filmes"> {/* Define a base */}
      <App />
    </BrowserRouter>
  </StrictMode>
);