import styles from "./UserName.module.css";

export default function UserName(props) {
  return (
    <div className={styles.userContainer}>
      <img
        className={styles.avatar}
        src={props.image}
        alt="User avatar"
        width="200"
      />
      <h2 className={styles.title}>{props.name}</h2>
      <p className={styles.text}>{props.tag}</p>
      <p className={styles.location}>{props.location}</p>
    </div>
  );
}
