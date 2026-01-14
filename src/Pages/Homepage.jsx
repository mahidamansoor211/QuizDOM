import BlurText from "../Components/animations/BlurText";
import AppNav from "../Components/AppNav";
import Footer from "../Components/Footer";
import styles from "./Homepage.module.css";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();

  return (
    <main className={styles.homepage}>
      <AppNav />
      <section className={styles.sectionContainer}>
        <div className={styles.img}>
          <img src="Images/work.png" alt="work" />
        </div>

        <div className={styles.textContent}>
          <div className={styles.hello}>
            <strong>
              <BlurText
                text="Hey, DEV!"
                delay={50}
                animateBy="words"
                direction="top"
                className={styles.hello}
              />
            </strong>
          </div>

          <BlurText
            text="Welcome to QuizDOM — your ultimate dev playground! Whether you're prepping for an interview or just flexing your frontend muscles, test your skills with our lightning-fast quizzes on HTML, CSS, JavaScript, and React. Ready to prove you're the DOM-inator?"
            delay={50}
            animateBy="words"
            direction="top"
            className={styles.paragraph}
          />

          <div>
            <button
              className={styles.button}
              onClick={() => navigate("/get-started")}
            >
              Start Here!
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default Homepage;
