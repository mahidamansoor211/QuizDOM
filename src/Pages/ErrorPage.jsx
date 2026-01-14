import Footer from "../Components/Footer";
import styles from "./ErrorPage.module.css";

function ErrorPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section className={styles.sectionContainer}>
          <img src="Images/Error.png" alt="error" className={styles.imgE} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ErrorPage;
