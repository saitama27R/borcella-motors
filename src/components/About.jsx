import logoImg from '../assets/logo.jpeg';

export default function About() {
  return (
    <section id="nosotros" className="about" aria-labelledby="about-title">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2 id="about-title" className="section-title">Sobre <span className="highlight">Borcella Motors</span></h2>
            <p className="about-text">
              Somos el referente en México para la compra y venta de autos deportivos de lujo, 
              supercars y hypercars. Cada vehículo en nuestro inventario pasa por un riguroso 
              proceso de verificación y certificación.
            </p>
            <p className="about-text">
              Trabajamos directamente con coleccionistas, concesionarios oficiales y propietarios 
              privados para ofrecerte acceso a las máquinas más codiciadas del mundo.
            </p>
            
            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <div>
                  <h4>Autos Verificados</h4>
                  <p>Historial completo y certificado</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M21 12V7H5v5"/>
                    <path d="M16 19h6"/>
                    <path d="M19 16v6"/>
                    <path d="M3 19h6"/>
                    <path d="M6 16v6"/>
                  </svg>
                </div>
                <div>
                  <h4>Entrega Nacional</h4>
                  <p>Transportamos a cualquier ciudad</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect x="2" y="3" width="20" height="14" rx="2"/>
                    <path d="M8 21h8"/>
                    <path d="M12 17v4"/>
                  </svg>
                </div>
                <div>
                  <h4>Financiamiento</h4>
                  <p>Opciones flexibles disponibles</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <div>
                  <h4>Atención 24/7</h4>
                  <p>WhatsApp siempre disponible</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <img 
              src={logoImg} 
              alt="Escudo Borcella Motors"
              className="about-img about-logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}