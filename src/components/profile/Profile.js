import styles from './Profile.module.css';
import propTypes from "prop-types";

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt="User avatar" className={styles.image} />
        <p className={styles.name}>{username}</p>
        <p className={styles.text}>@{tag}</p>
        <p className={styles.text}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.item}>
          <span className="label">Followers</span>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li className={styles.item}>
          <span className="label">Views</span>
          <span className={styles.quantity}>{stats.views}</span>
        </li>
        <li className={styles.item}>
          <span className="label">Likes</span>
          <span className={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  avatar: propTypes.string.isRequired,
  stats: propTypes.objectOf(propTypes.number).isRequired,
};

export default Profile;
