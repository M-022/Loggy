import { useLogViewer } from '../../../hooks/useLogViewer';
import styles from '../../../styles/LogViewer.module.css';

export function SearchFilter() {
  const { state, dispatch } = useLogViewer();

  const handleChange = (e) => {
    dispatch({
      type: 'UPDATE_FILTERS',
      payload: { searchText: e.target.value }
    });
  };

  return (
    <div className={styles.fieldGroup} style={{flex: 1}}>
      <span className={styles.fieldLabel}>Search</span>
      <input
        id="searchInput"
        type="text"
        className={styles.input}
        placeholder="user=root, ip:10.0.0.13, 'failed password'…"
        value={state.filters.searchText}
        onChange={handleChange}
      />
    </div>
  );
}
