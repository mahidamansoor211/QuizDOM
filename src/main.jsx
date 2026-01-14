import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { SubjectProvider } from "./contexts/SubjectContext.jsx";
import { QuizProvider } from "./contexts/QuizContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <SubjectProvider>
        <QuizProvider>
          <App />
        </QuizProvider>
      </SubjectProvider>
    </BrowserRouter>
  </StrictMode>
);
