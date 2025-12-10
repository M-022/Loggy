import { LogViewerProvider } from '../../context/LogViewerContext';
import { Header } from './Header';
import { LeftPane } from './LeftPane/LeftPane';
import { RightPane } from './RightPane/RightPane';
import { FloatingParticles } from '../shared/FloatingParticles';
import styles from '../../styles/LogViewer.module.css';

function LogViewerContent() {
  return (
    <div className={styles.appShell}>
      <FloatingParticles count={15} />
      <Header />
      <main className={styles.mainPanel}>
        <LeftPane />
        <RightPane />
      </main>
    </div>
  );
}

export default function LogViewer() {
  return (
    <LogViewerProvider>
      <LogViewerContent />
    </LogViewerProvider>
  );
}
