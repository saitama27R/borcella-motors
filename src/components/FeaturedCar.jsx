import heroCar from '../assets/hero-car.jpeg';

export default function FeaturedCar() {
  return (
    <section className="featured-car" aria-labelledby="featured-title">
      <div className="featured-car-bg" aria-hidden="true"></div>
      <div className="container featured-inner">
        <div className="featured-image-wrapper">
          <div className="featured-glow" aria-hidden="true"></div>
          <img 
            src={heroCar} 
            alt="Auto deportivo Borcella Motors con escudo en el capó" 
            className="featured-image"
          />
        </div>
        <div className="featured-content">
          <span className="featured-label">Modelo Estrella</span>
          <h2 id="featured-title" className="featured-title">
            Diseñado para <span className="highlight">Dominar</span>
          </h2>
          <p className="featured-desc">
            Cada línea, cada curva, cada detalle del escudo Borcella sobre el capó — 
            este automóvil representa la fusión perfecta entre potencia bruta y 
            elegancia refinada.
          </p>
          <ul className="featured-specs">
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
              Alto Rendimiento
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              Diseño Exclusivo
            </li>
            <li>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
              Edición Limitada
            </li>
          </ul>
          <a 
            href="https://wa.me/5215512345678?text=Hola%2C%20me%20interesa%20el%20auto%20destacado%20de%20Borcella%20Motors."
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp-large"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.472.099-.174.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378 3.44 3.44 0 01-.477-.215l-1.835-.652-.587-1.811a3.486 3.486 0 01-.223-.49c-.104-.396-.046-3.554 2.298-5.732 2.024-1.897 4.207-3.358 6.147-4.16 1.94-.802 3.282-.928 3.77-.976.488-.048 1.074.224 1.47.56.396.336.687.88.775 1.12.143.396.047.78-.135 1.154-.621 1.275-2.672 3.57-4.072 4.978-.468.47-.974.892-1.438 1.279-.464.387-.862.687-1.18.916-.316.228-.588.396-.817.531-.229.134-.574.235-.723.131-.125-.085-.477-.223-.477-.477v-.65c0-.282.119-.692.077-.925a8.47 8.47 0 00-.237-1.278 4.52 4.52 0 00-.564-.977c-.093-.125-.226-.223-.33-.282-.105-.058-.272-.077-.413.077-.14.154-.377.478-.668 1.068-.31.635-.686 1.385-1.18 1.885-.494.5-.934.88-1.316 1.143-.382.263-.855.442-1.153.508-.298.065-.615.02-.727-.105-.112-.124-.198-.377-.135-.556.062-.178.276-.422.666-.728.388-.307.662-.564.806-.72.144-.154.298-.42.373-.67.077-.25.038-.488-.077-.668-.116-.18-.418-.488-.845-.69-.427-.202-.724-.266-.9-.266-.16 0-.403.02-.547.135-.144.115-.397.358-.668.727-.27.368-.66.757-.944.933-.284.176-.57.31-.736.373-.166.063-.422.048-.53-.062-.108-.11-.086-.33-.038-.52.048-.19.277-.638.488-.934.21-.297.5-.668.76-.976.26-.307.46-.52.598-.646.138-.125.33-.26.56-.374.23-.115.46-.179.69-.198.23-.02.503-.023.784-.023.562 0 1.74.407 2.653 2.21.913 1.802 1.562 3.836 1.776 4.51.17.533.097 1.28-.273 1.928-.37.645-.87 1.158-1.357 1.483-.487.325-1.338.635-2.055.778-.717.144-1.64.05-1.933-.05z"/>
            </svg>
            Consultar Disponibilidad
          </a>
        </div>
      </div>
    </section>
  );
}