import propTypes from "prop-types";
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map((item) => {
        const type = item.isOnline ? 'online' : 'offline';
        return (
          <li className={styles.item} key={item.id}>
            <span className={styles[type]}>{item.isOnline}</span>
            <img
              className={styles.avatar}
              src={item.avatar}
              alt="User avatar"
              width="48"
            />
            <p className="name">{item.name}</p>
          </li>
        )
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      avatar: propTypes.string,
      name: propTypes.string,
      isOnline: propTypes.bool,
      id: propTypes.number,
    })
  ),
};

export default FriendList;
