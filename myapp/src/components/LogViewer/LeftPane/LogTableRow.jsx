import { memo, useState } from 'react';
import { useLogViewer } from '../../../hooks/useLogViewer';
import { LevelPill } from '../../shared/LevelPill';
import { TagPill } from '../../shared/TagPill';
import { Sparkles } from '../../shared/Sparkles';
import { formatTime } from '../../../utils/formatters';
import { getAlignment } from '../../../utils/alignment';
import styles from '../../../styles/LogViewer.module.css';

export const LogTableRow = memo(function LogTableRow({ log }) {
  const { state, dispatch } = useLogViewer();
  const isSelected = state.selectedLogId === log.id;
  const alignment = getAlignment(log);
  const [sparklesTrigger, setSparklesTrigger] = useState(0);

  const handleClick = () => {
    dispatch({ type: 'SELECT_LOG', payload: log.id });
    setSparklesTrigger(prev => prev + 1);
  };

  return (
    <tr
      className={isSelected ? styles.selected : ''}
      onClick={handleClick}
      style={{ position: 'relative' }}
    >
      <td className={styles.td}>{formatTime(log.timestamp)}</td>
      <td className={styles.td}>
        <LevelPill level={log.level || 'INFO'} />
      </td>
      <td className={styles.td}>{log.source || '-'}</td>
      <td className={styles.td}>{log.message || ''}</td>
      <td className={styles.td}>
        {alignment ? (
          <TagPill tag={alignment.label} alignment={alignment.kind} />
        ) : log.tags && log.tags.length > 0 ? (
          log.tags.map(tag => <TagPill key={tag} tag={tag} />)
        ) : (
          <span className={styles.muted}>—</span>
        )}
      </td>
      {isSelected && <Sparkles trigger={sparklesTrigger} />}
    </tr>
  );
});
