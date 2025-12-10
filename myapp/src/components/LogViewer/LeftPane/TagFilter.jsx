import { useLogViewer } from '../../../hooks/useLogViewer';
import styles from '../../../styles/LogViewer.module.css';

export function TagFilter() {
  const { state, dispatch } = useLogViewer();

  const handleChange = (e) => {
    dispatch({
      type: 'UPDATE_FILTERS',
      payload: { tag: e.target.value }
    });
  };

  return (
    <div className={styles.fieldGroup}>
      <span className={styles.fieldLabel}>Tag</span>
      <select
        id="tagFilter"
        className={styles.select}
        value={state.filters.tag}
        onChange={handleChange}
      >
        <option value="ALL">Any</option>
        <option value="Suspicious">Suspicious</option>
        <option value="Benign">Benign</option>
        <option value="Investigate">Investigate</option>
      </select>
    </div>
  );
}
