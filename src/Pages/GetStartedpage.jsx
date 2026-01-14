import BlurText from "../Components/animations/BlurText";
import Footer from "../Components/Footer";
import SubjectCards from "../Components/SubjectCards";
import styles from "./GetStartedpage.module.css";
import AppNav from "../Components/AppNav";

function GetStartedpage() {
  return (
    <main className={styles.main}>
      <AppNav />
      <div className={styles.heading}>
        <strong>
          <BlurText
            text="Choose your Subject from below:-"
            delay={50}
            animateBy="words"
            direction="top"
            className={styles.hello}
          />
        </strong>
      </div>
      <div className={styles.container}>
        <SubjectCards />
      </div>
      <Footer />
    </main>
  );
}

export default GetStartedpage;
