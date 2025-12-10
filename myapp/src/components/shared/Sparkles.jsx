import { useEffect, useState } from 'react';
import styles from './Sparkles.module.css';

export function Sparkles({ trigger }) {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    if (trigger) {
      const newSparkles = Array.from({ length: 6 }, (_, i) => ({
        id: Date.now() + i,
        style: {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 0.3}s`,
          fontSize: `${12 + Math.random() * 8}px`
        }
      }));

      setSparkles(newSparkles);

      setTimeout(() => setSparkles([]), 1000);
    }
  }, [trigger]);

  return (
    <div className={styles.sparklesContainer}>
      {sparkles.map(sparkle => (
        <span
          key={sparkle.id}
          className={styles.sparkle}
          style={sparkle.style}
        >
          ✨
        </span>
      ))}
    </div>
  );
}
