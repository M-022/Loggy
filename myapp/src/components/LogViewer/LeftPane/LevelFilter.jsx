import { useLogViewer } from '../../../hooks/useLogViewer';
import styles from '../../../styles/LogViewer.module.css';

export function LevelFilter() {
  const { state, dispatch } = useLogViewer();

  const handleChange = (e) => {
    dispatch({
      type: 'UPDATE_FILTERS',
      payload: { level: e.target.value }
    });
  };

  return (
    <div className={styles.fieldGroup}>
      <span className={styles.fieldLabel}>Level</span>
      <select
        id="levelFilter"
        className={styles.select}
        value={state.filters.level}
        onChange={handleChange}
      >
        <option value="ALL">All</option>
        <option value="INFO">Info</option>
        <option value="WARN">Warn</option>
        <option value="ERROR">Error</option>
        <option value="CRITICAL">Critical</option>
        <option value="ALERT">Alert</option>
      </select>
    </div>
  );
}
