import { useState } from 'react';
import { useLogViewer } from '../../../hooks/useLogViewer';
import { TagPill } from '../../shared/TagPill';
import { Sparkles } from '../../shared/Sparkles';
import styles from '../../../styles/LogViewer.module.css';

export function TagEditor({ log }) {
  const { dispatch } = useLogViewer();
  const [tagInput, setTagInput] = useState('');
  const [sparklesTrigger, setSparklesTrigger] = useState(0);

  const handleAddTag = () => {
    const tag = tagInput.trim();
    if (!tag) return;
    dispatch({
      type: 'ADD_TAG',
      payload: { logId: log.id, tag }
    });
    setTagInput('');
    setSparklesTrigger(prev => prev + 1);
  };

  const handleRemoveTag = (tag) => {
    dispatch({
      type: 'REMOVE_TAG',
      payload: { logId: log.id, tag }
    });
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTag();
    }
  };

  return (
    <div className={styles.tagEditor} style={{ position: 'relative' }}>
      <div className={styles.detailLine}>
        <div className={styles.detailLabel}>Tags</div>
        <div className={styles.detailValue}>
          {log.tags && log.tags.length > 0 ? (
            <div>
              {log.tags.map(tag => (
                <TagPill
                  key={tag}
                  tag={tag}
                  showRemove={true}
                  onRemove={handleRemoveTag}
                />
              ))}
            </div>
          ) : (
            <span className={styles.muted}>No tags yet — start the witchcraft! ✨</span>
          )}
        </div>
      </div>
      <div className={styles.tagEditorRow}>
        <input
          id="tagInput"
          type="text"
          className={styles.input}
          placeholder="Add tag (e.g. 'Suspicious', 'Brute-force')"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          id="addTagBtn"
          className={styles.btn}
          style={{paddingInline: '10px'}}
          onClick={handleAddTag}
        >
          <span className={styles.btnIcon}>➕</span> Add
        </button>
      </div>
      <p className={styles.helperText}>
        Press Enter to add a tag. Remove tags by clicking the ✕.
      </p>
      <Sparkles trigger={sparklesTrigger} />
    </div>
  );
}
