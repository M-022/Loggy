import { useState } from 'react';
import { Sparkles } from '../../shared/Sparkles';
import styles from '../../../styles/LogViewer.module.css';

export function BrickPath() {
  const [sparklesTrigger, setSparklesTrigger] = useState(0);

  const handleClick = () => {
    setSparklesTrigger(prev => prev + 1);
  };

  return (
    <div
      className={styles.brickPath}
      onClick={handleClick}
      style={{ position: 'relative' }}
    >
      <Sparkles trigger={sparklesTrigger} />
    </div>
  );
}
