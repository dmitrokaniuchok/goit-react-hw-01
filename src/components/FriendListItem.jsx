import styles from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={styles.card}>
      <img src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
      <p className={isOnline ? styles.isOnline : styles.offline}>
        {isOnline ? "Online" : "Ofline"}
      </p>
    </div>
  );
}
