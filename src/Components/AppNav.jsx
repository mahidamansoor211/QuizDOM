import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";

function AppNav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>QuizDOM</div>
      <ul className={styles.navLinks}>
        <li>
          <NavLink to="/">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/get-started">Get Started</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
