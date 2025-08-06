import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.content}>
        <h3 className={styles.title}>Quick Links</h3>
        <ul className={styles.linkList}>
          <li className={styles.linkItem}>
            <a href="#" className={styles.link}>Dashboard</a>
          </li>
          <li className={styles.linkItem}>
            <a href="#" className={styles.link}>Profile</a>
          </li>
          <li className={styles.linkItem}>
            <a href="#" className={styles.link}>Settings</a>
          </li>
          <li className={styles.linkItem}>
            <a href="#" className={styles.link}>Help</a>
          </li>
        </ul>
        
        <div className={styles.section}>
          <h4 className={styles.sectionTitle}>Recent Activity</h4>
          <div className={styles.activity}>
            <p className={styles.activityItem}>No recent activity</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
