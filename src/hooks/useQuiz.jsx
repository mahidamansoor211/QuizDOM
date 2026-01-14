import { useContext } from "react";
import { QuizContext } from "../contexts/QuizContext";

export function useQuiz() {
  const context = useContext(QuizContext);

  if (context === undefined) {
    throw new Error("Quiz context is used outside the provider");
  }

  return context;
}
