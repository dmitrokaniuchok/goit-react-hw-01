import styles from "./FriendList.module.css";
import FriendListItem from "./FriendListItem.jsx";

export default function FriendList({ friends }) {
  return (
    <ul className={styles.listCard}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
}
