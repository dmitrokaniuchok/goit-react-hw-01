import styles from "./Stats.module.css";

export default function Stats({ stats }) {
  return (
    <ul className={styles.stats}>
      <li>
        <span>Followers</span>
        <span>{stats.followers}</span>
      </li>
      <li>
        <span>Views</span>
        <span>{stats.views}</span>
      </li>
      <li>
        <span>Likes</span>
        <span>{stats.likes}</span>
      </li>
    </ul>
  );
}
