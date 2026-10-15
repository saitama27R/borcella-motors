import { useState, useMemo } from 'react';
import { cars, brands, years, transmissions, drivetrains } from '../data/cars';
import CarCard from './CarCard';
import FilterPanel from './FilterPanel';

export default function Inventory() {
  const [filters, setFilters] = useState({
    search: '',
    brand: '',
    year: '',
    transmission: '',
    drivetrain: '',
    priceRange: [0, 4000000],
  });

  const filteredCars = useMemo(() => {
    return cars.filter(car => {
      if (filters.search && !`${car.brand} ${car.model}`.toLowerCase().includes(filters.search.toLowerCase())) {
        return false;
      }
      if (filters.brand && car.brand !== filters.brand) return false;
      if (filters.year && car.year !== parseInt(filters.year)) return false;
      if (filters.transmission && car.transmission !== filters.transmission) return false;
      if (filters.drivetrain && car.drivetrain !== filters.drivetrain) return false;
      if (car.price < filters.priceRange[0] || car.price > filters.priceRange[1]) return false;
      return true;
    });
  }, [filters]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      search: '',
      brand: '',
      year: '',
      transmission: '',
      drivetrain: '',
      priceRange: [0, 4000000],
    });
  };

  const hasActiveFilters = Object.entries(filters).some(([key, value]) => {
    if (key === 'priceRange') return value[0] > 0 || value[1] < 4000000;
    return value !== '';
  });

  return (
    <section id="inventario" className="inventory" aria-labelledby="inventory-title">
      <div className="container">
        <header className="section-header">
          <h2 id="inventory-title" className="section-title">Nuestro Inventario</h2>
          <p className="section-subtitle">
            {filteredCars.length} de {cars.length} autos disponibles
          </p>
        </header>

        <div className="inventory-layout">
          <aside className="filters-sidebar" aria-label="Filtros de búsqueda">
            <FilterPanel
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={clearFilters}
              hasActiveFilters={hasActiveFilters}
              options={{ brands, years, transmissions, drivetrains }}
            />
          </aside>

          <main className="inventory-main">
            <div className="inventory-toolbar">
              <div className="results-count">
                Mostrando <strong>{filteredCars.length}</strong> autos
              </div>
              <select
                className="sort-select"
                aria-label="Ordenar por"
                defaultValue="featured"
              >
                <option value="featured">Destacados primero</option>
                <option value="price-asc">Precio: Menor a Mayor</option>
                <option value="price-desc">Precio: Mayor a Menor</option>
                <option value="year-desc">Año: Más Nuevo</option>
                <option value="year-asc">Año: Más Antiguo</option>
              </select>
            </div>

            {filteredCars.length > 0 ? (
              <div className="cars-grid" role="list" aria-label="Lista de autos deportivos">
                {filteredCars.map(car => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            ) : (
              <div className="no-results">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="M21 21l-4.35-4.35"/>
                </svg>
                <h3>No se encontraron autos</h3>
                <p>Intenta ajustar los filtros o busca con otros términos</p>
                <button onClick={clearFilters} className="btn btn-secondary">
                  Limpiar filtros
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </section>
  );
}