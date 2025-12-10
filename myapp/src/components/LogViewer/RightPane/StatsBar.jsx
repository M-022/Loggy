import { useFilteredLogs } from '../../../hooks/useFilteredLogs';
import styles from '../../../styles/LogViewer.module.css';

export function StatsBar() {
  const { filtered, taggedCounts } = useFilteredLogs();

  return (
    <div className={styles.statsBar}>
      <span>{filtered.length} event{filtered.length === 1 ? '' : 's'}</span>
      <span>{taggedCounts.Suspicious || 0} suspicious on the road</span>
    </div>
  );
}
