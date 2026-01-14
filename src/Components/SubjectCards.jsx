import { useEffect } from "react";
import styles from "./SubjectCards.module.css";
import Card from "./Card";
import useSubject from "../hooks/SubjectHook";
import { useNavigate } from "react-router-dom";

const subjects = ["REACT", "HTML", "CSS", "JS"];

function SubjectCards() {
  const { setSelectedSubject } = useSubject();
  const navigate = useNavigate();

  useEffect(() => {
    setSelectedSubject(null);
  }, [setSelectedSubject]);

  const handleClick = (subject) => {
    setSelectedSubject(subject.toLowerCase());
    navigate("/quiz");
  };

  return (
    <div className={styles.container}>
      {subjects.map((subject) => (
        <Card
          key={subject}
          title={subject}
          onSelect={() => handleClick(subject)}
        />
      ))}
    </div>
  );
}

export default SubjectCards;
