import styles from '../../../styles/LogViewer.module.css';

export function EmptyState() {
  return (
    <div className={styles.emptyState}>
      Tap a row on the left to see the full event here, then tag the wicked
      ones like{' '}
      <span className={styles.pillInline}>
        <span>🧙‍♀️</span> Suspicious
      </span>{' '}
      or bless the good ones{' '}
      <span className={styles.pillInline}>
        <span>✨</span> Benign
      </span>.
    </div>
  );
}
