import { useFilteredLogs } from '../../../hooks/useFilteredLogs';
import { LogTableRow } from './LogTableRow';
import styles from '../../../styles/LogViewer.module.css';

export function LogTable() {
  const { filtered } = useFilteredLogs();

  return (
    <div className={styles.logTableWrap}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th} style={{width: '150px'}}>Timestamp</th>
            <th className={styles.th} style={{width: '80px'}}>Level</th>
            <th className={styles.th} style={{width: '120px'}}>Source</th>
            <th className={styles.th}>Message</th>
            <th className={styles.th} style={{width: '140px'}}>Tags</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {filtered.map(log => (
            <LogTableRow key={log.id} log={log} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
