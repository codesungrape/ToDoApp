// src/components/Footer.tsx
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>
        &copy; {new Date().getFullYear()} To Do Today. All rights reserved.
      </p>
      <p>
        <a href="/privacy-policy" className={styles.footerLink}>
          Privacy Policy
        </a>{" "}
        |
        <a href="/terms-of-service" className={styles.footerLink}>
          Terms of Service
        </a>
      </p>
    </footer>
  );
};

export default Footer;
