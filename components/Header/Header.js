// src/components/Header.tsx
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>To Do Today</div>
      <nav className={styles.nav}>
        <a href="/" className={styles.navLink}>
          Home
        </a>
        <a href="/about" className={styles.navLink}>
          About
        </a>
      </nav>
    </header>
  );
};

export default Header;
