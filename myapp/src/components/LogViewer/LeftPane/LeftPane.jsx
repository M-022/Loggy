import { ControlsBar } from './ControlsBar';
import { LogTable } from './LogTable';
import styles from '../../../styles/LogViewer.module.css';

export function LeftPane() {
  return (
    <section className={styles.leftPane}>
      <ControlsBar />
      <LogTable />
    </section>
  );
}
