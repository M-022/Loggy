import { LevelPill } from '../../shared/LevelPill';
import { formatTime } from '../../../utils/formatters';
import styles from '../../../styles/LogViewer.module.css';

export function EventDetails({ log }) {
  return (
    <>
      <div className={styles.detailLine}>
        <div className={styles.detailLabel}>Time</div>
        <div className={styles.detailValue}>{formatTime(log.timestamp)}</div>
      </div>
      <div className={styles.detailLine}>
        <div className={styles.detailLabel}>Level</div>
        <div className={styles.detailValue}>
          <LevelPill level={log.level} />
        </div>
      </div>
      <div className={styles.detailLine}>
        <div className={styles.detailLabel}>Source</div>
        <div className={styles.detailValue}>{log.source || '-'}</div>
      </div>
      <div className={styles.detailLine}>
        <div className={styles.detailLabel}>Category</div>
        <div className={styles.detailValue}>{log.category || '-'}</div>
      </div>
      <div className={styles.detailLine}>
        <div className={styles.detailLabel}>Message</div>
        <div className={styles.detailValue}>
          <div className={styles.detailMessage}>{log.message || ''}</div>
        </div>
      </div>
    </>
  );
}
