import styles from "./Stats.module.css";

export default function Stats({ stats }) {
  return (
    <ul className={styles.stats}>
      <li className={styles.stylesItem}>
        <span className={styles.statsName}>Followers</span>
        <span className={styles.statsNumber}>{stats.followers}</span>
      </li>
      <li className={styles.stylesItem}>
        <span className={styles.statsName}>Views</span>
        <span className={styles.statsNumber}>{stats.views}</span>
      </li>
      <li className={styles.stylesItem}>
        <span className={styles.statsName}>Likes</span>
        <span className={styles.statsNumber}>{stats.likes}</span>
      </li>
    </ul>
  );
}
