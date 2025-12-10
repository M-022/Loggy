import styles from './TagPill.module.css';

export function TagPill({ tag, onRemove, showRemove = false, alignment = null }) {
  const getClassName = () => {
    let className = styles.tagPill;
    if (alignment === 'elphaba') {
      className += ' ' + styles.tagElphaba;
    } else if (alignment === 'glinda') {
      className += ' ' + styles.tagGlinda;
    }
    return className;
  };

  return (
    <span className={getClassName()}>
      <span>{tag}</span>
      {showRemove && (
        <span
          className={styles.remove}
          onClick={(e) => {
            e.stopPropagation();
            onRemove?.(tag);
          }}
        >
          ✕
        </span>
      )}
    </span>
  );
}
