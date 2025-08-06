import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          © 2025 Sir Pounce App. All rights reserved.
        </p>
        <div className={styles.links}>
          <a href="#" className={styles.link}>Privacy</a>
          <a href="#" className={styles.link}>Terms</a>
          <a href="#" className={styles.link}>Support</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
