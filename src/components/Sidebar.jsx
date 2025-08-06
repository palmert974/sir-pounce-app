import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.content}>
        <h3 className={styles.title}>Other Cats</h3>
        <ul className={styles.linkList}>
          <li className={styles.linkItem}>
            <a href="#" className={styles.link}>Chairman Meow</a>
          </li>
          <li className={styles.linkItem}>
            <a href="#" className={styles.link}>Lint Trap</a>
          </li>
          <li className={styles.linkItem}>
            <a href="#" className={styles.link}>Whisker T. Fluffington</a>
          </li>
          <li className={styles.linkItem}>
            <a href="#" className={styles.link}>Reginald Floofypants</a>
          </li>
          <li className={styles.linkItem}>
            <a href="#" className={styles.link}>Mister Mittens</a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
