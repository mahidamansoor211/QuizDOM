import { useQuiz } from "../hooks/useQuiz";
import styles from "./Options.module.css";

function Options({ question }) {
  const { dispatch, answer } = useQuiz();
  const hasAnswered = answer !== null;

  return (
    <div className={styles.option}>
      {question.options.map((option, index) => {
        let className = `${styles.btn} ${styles["btn-option"]}`;

        if (hasAnswered) {
          if (index === question.correctOption)
            className += ` ${styles.correct}`;
          else if (index === answer) className += ` ${styles.wrong}`;
        }

        if (index === answer) className += ` ${styles.answer}`;

        return (
          <button
            className={className}
            key={option}
            disabled={hasAnswered}
            onClick={() => dispatch({ type: "answer", payload: index })}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default Options;
