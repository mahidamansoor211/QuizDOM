import { createContext, useEffect, useReducer, useContext } from "react";
import { SubjectContext } from "./SubjectContext";
import questionsData from "../data/questions.json";

export const QuizContext = createContext();

const initialState = {
  questions: [],
  index: 0,
  CurrStatus: "loading",
  subject: "",
  points: 0,
  answer: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "start":
      return {
        ...initialState,
        subject: action.payload,
        CurrStatus: "loading",
      };

    case "dataReceived":
      return {
        ...state,
        questions: action.payload || [],
        CurrStatus: action.payload?.length > 0 ? "active" : "finished",
      };

    case "answer": {
      const question = state.questions[state.index];
      const isCorrect = action.payload === question.correctOption;
      return {
        ...state,
        answer: action.payload,
        points: isCorrect ? state.points + question.points : state.points,
      };
    }

    case "nextQuestion": {
      const isLast = state.index === state.questions.length - 1;
      return isLast
        ? { ...state, CurrStatus: "finished" }
        : { ...state, index: state.index + 1, answer: null };
    }

    case "restart":
      return {
        ...initialState,
        CurrStatus: "loading",
      };

    case "error":
      return {
        ...state,
        CurrStatus: "error",
      };

    default:
      throw new Error("Unknown action");
  }
}

export function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { selectedSubject } = useContext(SubjectContext);
  const { questions, index, CurrStatus, answer, subject, points } = state;

  useEffect(() => {
    if (!selectedSubject) return;

    dispatch({ type: "start", payload: selectedSubject });

    try {
      // Filter questions by selectedSubject
      const filtered = questionsData.questions.filter(
        (q) => q.subject === selectedSubject
      );
      dispatch({ type: "dataReceived", payload: filtered });
    } catch (error) {
      console.error(error);
      dispatch({ type: "error" });
    }
  }, [selectedSubject]);

  // Block refresh during quiz
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (CurrStatus === "active") {
        e.preventDefault();
        e.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [CurrStatus]);

  return (
    <QuizContext.Provider
      value={{
        questions,
        index,
        CurrStatus,
        subject,
        points,
        dispatch,
        answer,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}
