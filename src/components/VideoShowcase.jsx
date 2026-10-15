import { useState, useRef } from 'react';

export default function VideoShowcase() {
  const [muted, setMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
    if (video.paused) video.play().catch(() => {});
  };

  return (
    <section className="video-showcase" aria-labelledby="video-title">
      <div className="container">
        <div className="video-header">
          <span className="video-label">Experiencia Visual</span>
          <h2 id="video-title" className="section-title">Mira la Potencia en <span className="highlight">Acción</span></h2>
          <p className="section-subtitle">Adéntrate en el mundo Borcella Motors</p>
        </div>
        <div className="video-wrapper">
          <div className="video-frame" aria-hidden="true"></div>
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="showcase-video"
            aria-label="Video showcase Borcella Motors"
          >
            <source src="/showcase-video.mp4" type="video/mp4" />
          </video>
          <div className="video-overlay" aria-hidden="true">
            <div className="video-badge">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <polygon points="5,3 19,12 5,21"/>
              </svg>
            </div>
          </div>
          <button
            type="button"
            className="video-sound-btn"
            onClick={toggleSound}
            aria-label={muted ? 'Activar sonido' : 'Silenciar'}
          >
            {muted ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <line x1="23" y1="9" x2="17" y2="15"></line>
                <line x1="17" y1="9" x2="23" y2="15"></line>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
              </svg>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}