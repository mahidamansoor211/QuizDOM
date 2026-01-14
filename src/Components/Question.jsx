import styles from "./Question.module.css";
import { useQuiz } from "../hooks/useQuiz";
import Options from "./Options";

export default function Question() {
  const { questions, index, answer, dispatch } = useQuiz();
  const question = questions[index];

  return (
    <div className={styles.question}>
      <h4>{question.question}</h4>
      <Options question={question} />
      {answer !== null && (
        <button
          className="btn btn-ui"
          style={{ marginTop: "2rem" }}
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </button>
      )}
    </div>
  );
}
