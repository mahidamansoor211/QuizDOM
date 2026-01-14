import { useQuiz } from "../hooks/useQuiz";
import styles from "./FinishScreen.module.css";
import { useNavigate } from "react-router-dom";
import useSubject from "../hooks/SubjectHook";

function FinishScreen() {
  const navigate = useNavigate();
  const { points, dispatch } = useQuiz();
  const { setSelectedSubject } = useSubject();

  const handleRestart = () => {
    dispatch({ type: "restart" });
    setSelectedSubject(null);
    navigate("/get-started");
  };

  return (
    <div className={styles.finish}>
      <h2>🎉 Quiz Complete</h2>
      <p className={styles.score}>
        You scored <strong>{points}</strong> points!
      </p>

      <div className={styles.buttonWrapper}>
        <button className="btn btn-ui" onClick={handleRestart}>
          Restart Quiz
        </button>
      </div>
    </div>
  );
}

export default FinishScreen;
