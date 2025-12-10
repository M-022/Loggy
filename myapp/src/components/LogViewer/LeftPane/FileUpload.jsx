import { useLogViewer } from '../../../hooks/useLogViewer';
import { parseUploadedText } from '../../../utils/logParser';
import styles from '../../../styles/LogViewer.module.css';

export function FileUpload() {
  const { dispatch } = useLogViewer();

  const handleFileChange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (ev) => {
      const text = ev.target.result;
      const newLogs = parseUploadedText(text);
      dispatch({ type: 'ADD_LOGS', payload: newLogs });
    };
    reader.readAsText(file);
  };

  return (
    <div className={styles.fieldGroup}>
      <span className={styles.fieldLabel}>Upload</span>
      <input
        id="fileInput"
        type="file"
        className={styles.fileInput}
        accept=".log,.txt,.jsonl,.json"
        onChange={handleFileChange}
      />
    </div>
  );
}
