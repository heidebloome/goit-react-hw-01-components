import propTypes from "prop-types";

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map((item) => (
        <li className="item" key={item.id}>
          <span className="status">{item.isOnline}</span>
          <img
            className="avatar"
            src={item.avatar}
            alt="User avatar"
            width="48"
          />
          <p className="name">{item.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: propTypes.arrayOf(propTypes.object),
};

export default FriendList;
