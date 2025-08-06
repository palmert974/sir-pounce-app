import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>Sir Pounce App</h1>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink}>Home</a>
            </li>
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink}>About</a>
            </li>
            <li className={styles.navItem}>
              <a href="#" className={styles.navLink}>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
