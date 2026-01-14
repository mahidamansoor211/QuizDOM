import styles from "./QuizPage.module.css";
import { useQuiz } from "../hooks/useQuiz";
import Question from "../Components/Question";
import FinishScreen from "../Components/FinishScreen";
import Loader from "../Components/Loading";

function QuizPage() {
  const { CurrStatus } = useQuiz();
  return (
    <div className={styles.quiz}>
      {CurrStatus === "error" && <p>Something went wrong!</p>}
      {CurrStatus === "loading" && <Loader />}
      {CurrStatus === "active" && (
        <>
          <Question />
        </>
      )}
      {CurrStatus === "finished" && <FinishScreen />}
    </div>
  );
}

export default QuizPage;
