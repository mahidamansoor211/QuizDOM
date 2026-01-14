import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import GetStartedPage from "./Pages/GetStartedpage";
import ErrorPage from "./Pages/ErrorPage";
import QuizPage from "./Pages/QuizPage";
function App() {
  console.log("✅ App is rendering");
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/get-started" element={<GetStartedPage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
