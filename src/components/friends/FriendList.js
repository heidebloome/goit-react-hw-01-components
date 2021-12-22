import propTypes from 'prop-types';

import FriendItem from './friendItem/FriendItem';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.list}>
      {friends.map(item => (
        <FriendItem
          key={item.id}
          isOnline={item.isOnline}
          avatar={item.avatar}
          userName={item.name}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default FriendList;
