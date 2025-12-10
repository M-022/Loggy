import { useEffect, useState } from 'react';
import styles from './FloatingParticles.module.css';

export function FloatingParticles({ count = 15 }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDuration: `${15 + Math.random() * 25}s`,
        animationDelay: `${Math.random() * 5}s`,
        fontSize: `${8 + Math.random() * 8}px`,
        opacity: 0.3 + Math.random() * 0.4
      },
      emoji: ['✨', '💚', '💖', '🧙‍♀️', '⭐'][Math.floor(Math.random() * 5)]
    }));
    setParticles(newParticles);
  }, [count]);

  return (
    <div className={styles.particlesContainer}>
      {particles.map(particle => (
        <span
          key={particle.id}
          className={styles.particle}
          style={particle.style}
        >
          {particle.emoji}
        </span>
      ))}
    </div>
  );
}
