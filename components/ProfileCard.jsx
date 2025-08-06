import styles from './ProfileCard.module.css';
import pounceImg from '../pounce.jpg';

const ProfileCard = ({ name = "Sir Pounce", title = "Chief Cat Officer", status = "Online" }) => {
  return (
    <div className={styles.profileCard}>
      <div className={styles.imageContainer}>
        <img 
          src={pounceImg} 
          alt="Sir Pounce" 
          className={styles.profileImage}
        />
        <div className={`${styles.statusDot} ${styles[status.toLowerCase()]}`}></div>
      </div>
      
      <div className={styles.info}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.title}>{title}</p>
        <span className={styles.status}>{status}</span>
      </div>
      
      <div className={styles.actions}>
        <button className={styles.button}>Edit Profile</button>
        <button className={`${styles.button} ${styles.secondary}`}>View Details</button>
      </div>
    </div>
  );
};

export default ProfileCard;
