import { useLogViewer } from '../../../hooks/useLogViewer';
import { EmptyState } from './EmptyState';
import { EventDetails } from './EventDetails';
import { TagEditor } from './TagEditor';
import { StatsBar } from './StatsBar';
import styles from '../../../styles/LogViewer.module.css';

export function DetailCard() {
  const { state } = useLogViewer();
  const selectedLog = state.logs.find(log => log.id === state.selectedLogId);

  return (
    <div className={styles.detailCard}>
      {!selectedLog ? (
        <EmptyState />
      ) : (
        <>
          <EventDetails log={selectedLog} />
          <TagEditor log={selectedLog} />
        </>
      )}
      <StatsBar />
    </div>
  );
}
