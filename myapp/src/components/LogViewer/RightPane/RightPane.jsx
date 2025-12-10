import { useLogViewer } from '../../../hooks/useLogViewer';
import { DetailCard } from './DetailCard';
import { BrickPath } from './BrickPath';
import styles from '../../../styles/LogViewer.module.css';

export function RightPane() {
  const { state } = useLogViewer();

  return (
    <aside className={styles.rightPane}>
      <div className={styles.rightPaneHeader}>
        <h2>Event Details</h2>
        <span className={styles.badge}>
          {state.selectedLogId || 'No event selected'}
        </span>
      </div>
      <DetailCard />
      <BrickPath />
    </aside>
  );
}
