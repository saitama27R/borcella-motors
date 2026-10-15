import logoImg from '../assets/logo.jpeg';

export default function BrandShowcase() {
  return (
    <section className="brand-showcase" aria-labelledby="brand-title">
      <div className="brand-bg-glow" aria-hidden="true"></div>
      <div className="container brand-inner">
        <div className="brand-logo-wrapper">
          <div className="brand-ring" aria-hidden="true"></div>
          <img 
            src={logoImg} 
            alt="Borcella Motors - Escudo de la marca" 
            className="brand-logo"
          />
        </div>
        <div className="brand-info">
          <span className="brand-label">Nuestra Marca</span>
          <h2 id="brand-title" className="brand-name">Borcella <span className="highlight">Motors</span></h2>
          <p className="brand-desc">
            Símbolo de excelencia, potencia y elegancia. Cada auto en nuestro catálogo 
            lleva el sello de calidad Borcella — pasión por los automóviles de alto rendimiento.
          </p>
          <div className="brand-badges">
            <span className="badge">Premium</span>
            <span className="badge">Certificado</span>
            <span className="badge">Exclusivo</span>
          </div>
        </div>
      </div>
    </section>
  );
}