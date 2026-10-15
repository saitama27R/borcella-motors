export default function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="hero-video"
        poster="/hero-video.mp4"
        aria-hidden="true"
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      
      <div className="hero-overlay"></div>
      
      <div className="container hero-content">
        <p className="hero-label">Bienvenido a Borcella Motors</p>
        <h1 id="hero-title" className="hero-title">
          <span className="hero-title-line">Automóviles de</span>
          <span className="hero-title-line highlight">Alto Rendimiento</span>
        </h1>
        <p className="hero-subtitle">
          La colección más exclusiva de supercars y hypercars.
          Encuentra tu próxima máquina de ensueño.
        </p>
        <div className="hero-actions">
          <a 
            href="#inventario"
            className="btn btn-primary"
          >
            Ver Inventario
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a 
            href="https://wa.me/5215512345678?text=Hola%2C%20quiero%20más%20información%20sobre%20sus%20autos."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp-large"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.472.099-.174.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378 3.44 3.44 0 01-.477-.215l-1.835-.652-.587-1.811a3.486 3.486 0 01-.223-.49c-.104-.396-.046-3.554 2.298-5.732 2.024-1.897 4.207-3.358 6.147-4.16 1.94-.802 3.282-.928 3.77-.976.488-.048 1.074.224 1.47.56.396.336.687.88.775 1.12.143.396.047.78-.135 1.154-.621 1.275-2.672 3.57-4.072 4.978-.468.47-.974.892-1.438 1.279-.464.387-.862.687-1.18.916-.316.228-.588.396-.817.531-.229.134-.574.235-.723.131-.125-.085-.477-.223-.477-.477v-.65c0-.282.119-.692.077-.925a8.47 8.47 0 00-.237-1.278 4.52 4.52 0 00-.564-.977c-.093-.125-.226-.223-.33-.282-.105-.058-.272-.077-.413.077-.14.154-.377.478-.668 1.068-.31.635-.686 1.385-1.18 1.885-.494.5-.934.88-1.316 1.143-.382.263-.855.442-1.153.508-.298.065-.615.02-.727-.105-.112-.124-.198-.377-.135-.556.062-.178.276-.422.666-.728.388-.307.662-.564.806-.72.144-.154.298-.42.373-.67.077-.25.038-.488-.077-.668-.116-.18-.418-.488-.845-.69-.427-.202-.724-.266-.9-.266-.16 0-.403.02-.547.135-.144.115-.397.358-.668.727-.27.368-.66.757-.944.933-.284.176-.57.31-.736.373-.166.063-.422.048-.53-.062-.108-.11-.086-.33-.038-.52.048-.19.277-.638.488-.934.21-.297.5-.668.76-.976.26-.307.46-.52.598-.646.138-.125.33-.26.56-.374.23-.115.46-.179.69-.198.23-.02.503-.023.784-.023.562 0 1.74.407 2.653 2.21.913 1.802 1.562 3.836 1.776 4.51.17.533.097 1.28-.273 1.928-.37.645-.87 1.158-1.357 1.483-.487.325-1.338.635-2.055.778-.717.144-1.64.05-1.933-.05z"/>
            </svg>
            Contactar por WhatsApp
          </a>
        </div>
        
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">50+</span>
            <span className="stat-label">Autos en Stock</span>
          </div>
          <div className="stat">
            <span className="stat-number">15+</span>
            <span className="stat-label">Marcas Exclusivas</span>
          </div>
          <div className="stat">
            <span className="stat-number">100%</span>
            <span className="stat-label">Verificados</span>
          </div>
          <div className="stat">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Atención WhatsApp</span>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll" aria-hidden="true">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </div>
    </section>
  );
}