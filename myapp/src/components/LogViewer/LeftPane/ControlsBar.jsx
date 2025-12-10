import { useLogViewer } from '../../../hooks/useLogViewer';
import { SearchFilter } from './SearchFilter';
import { LevelFilter } from './LevelFilter';
import { TagFilter } from './TagFilter';
import { FileUpload } from './FileUpload';
import styles from '../../../styles/LogViewer.module.css';

export function ControlsBar() {
  const { state, dispatch } = useLogViewer();

  const handleOnlyTaggedChange = (e) => {
    dispatch({
      type: 'UPDATE_FILTERS',
      payload: { onlyTagged: e.target.checked }
    });
  };

  const handleLoadSamples = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <div className={styles.controlsBar}>
      <div className={styles.controlsRow}>
        <SearchFilter />
        <LevelFilter />
        <TagFilter />
      </div>

      <div className={styles.controlsRow} style={{justifyContent: 'flex-end'}}>
        <label className={styles.toggleChip}>
          <input
            id="onlyTagged"
            type="checkbox"
            checked={state.filters.onlyTagged}
            onChange={handleOnlyTaggedChange}
          />
          <span>Only tagged</span>
        </label>
        <button
          id="sampleBtn"
          className={`${styles.btn} ${styles.btnSecondary}`}
          onClick={handleLoadSamples}
        >
          <span className={styles.btnIcon}>✨</span> Sample logs
        </button>
      </div>

      <div className={styles.controlsRow} style={{marginTop: '6px'}}>
        <FileUpload />
      </div>
    </div>
  );
}
