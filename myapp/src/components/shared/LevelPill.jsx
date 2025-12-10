import styles from './LevelPill.module.css';

export function LevelPill({ level }) {
  return (
    <span className={`${styles.levelPill} ${styles[`level${level}`]}`}>
      {level}
    </span>
  );
}
