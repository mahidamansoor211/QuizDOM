import styles from "./Card.module.css";

export default function Card({ title, onSelect }) {
  return (
    <div className={styles.card}>
      <h1>{title}</h1>
      <div>
        <img src={`/Images/${title}.png`} alt="{title}" />
      </div>
      <div>
        <button onClick={onSelect}>Start Quiz</button>
      </div>
    </div>
  );
}
