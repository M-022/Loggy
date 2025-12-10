import { useState } from 'react';
import { Sparkles } from '../shared/Sparkles';
import styles from '../../styles/LogViewer.module.css';

export function Header() {
  const [logoSparkles, setLogoSparkles] = useState(0);
  const [orbSparkles, setOrbSparkles] = useState(0);

  const handleLogoClick = () => {
    setLogoSparkles(prev => prev + 1);
  };

  const handleOrbClick = () => {
    setOrbSparkles(prev => prev + 1);
  };

  return (
    <header className={styles.header}>
      <div
        className={styles.logoCircle}
        onClick={handleLogoClick}
        style={{ position: 'relative' }}
      >
        <span>👠</span>
        <Sparkles trigger={logoSparkles} />
      </div>
      <div className={styles.headerText}>
        <h1>Wicked Log Road</h1>
        <p>Follow the yellow brick road straight to the sketchy events.</p>
      </div>
      <div
        className={styles.headerOrb}
        onClick={handleOrbClick}
        style={{ position: 'relative' }}
      >
        💚 🧙‍♀️ 💖
        <span className={styles.label}>Elphaba × Glinda</span>
        <Sparkles trigger={orbSparkles} />
      </div>
    </header>
  );
}
