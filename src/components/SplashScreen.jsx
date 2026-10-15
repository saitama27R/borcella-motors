import { useState, useEffect, useRef } from 'react';
import logoImg from '../assets/logo.jpeg';

export default function SplashScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [fade, setFade] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio('/engine-start.mp3');
    audio.volume = 0.5;
    audioRef.current = audio;
    audio.play().catch(() => {});

    const duration = 10000;
    const interval = 50;
    const step = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress(prev => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          setFade(true);
          if (audioRef.current) {
            audioRef.current.pause();
          }
          setTimeout(() => onComplete(), 800);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => {
      clearInterval(timer);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [onComplete]);

  return (
    <div className={`splash-screen ${fade ? 'fade-out' : ''}`} aria-label="Cargando Borcella Motors">
      <div className="splash-content">
        <div className="splash-logo-wrapper">
          <div className="splash-ring" aria-hidden="true"></div>
          <img src={logoImg} alt="Borcella Motors" className="splash-logo" />
        </div>
        <h1 className="splash-title">Borcella <span>Motors</span></h1>
        <p className="splash-subtitle">Alto Rendimiento</p>
        <div className="splash-progress">
          <div className="splash-progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
        <span className="splash-percent">{Math.round(progress)}%</span>
      </div>
    </div>
  );
}