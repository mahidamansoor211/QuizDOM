import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";

function AppNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>QuizDOM</div>

      {/* Hamburger Icon */}
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Links - Conditionally add the 'active' class */}
      <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
        <li>
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/get-started" onClick={() => setIsOpen(false)}>
            Get Started
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
