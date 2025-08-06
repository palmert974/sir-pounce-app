import styles from './ProfileCard.module.css';
import pounceImg from '../src/pounce.jpg';

const ProfileCard = () => {
  return (
    <div className={styles.profileCard}>
      <h2 className={styles.title}>Sir Pounce-a-Lot</h2>
      <img 
        src={pounceImg} 
        alt="Sir Pounce-a-Lot" 
        className={styles.profileImage}
      />
      <p className={styles.description}>
        With a dignified purr and an impressively fluffed tail, Sir Pounce-a-Lot surveyed his kingdom. This regal feline truly embodied the noble spirit of a pampered housecat. Every nap was a royal decree, and every stretch a display of magnificent, kingly grace.
      </p>
    </div>
  );
};

export default ProfileCard;
