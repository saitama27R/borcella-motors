export default function FilterPanel({ filters, onFilterChange, onClearFilters, hasActiveFilters, options }) {
  const { brands, years, transmissions, drivetrains } = options;

  return (
    <div className="filter-panel">
      <div className="filter-header">
        <h3>Filtros</h3>
        {hasActiveFilters && (
          <button onClick={onClearFilters} className="clear-filters" aria-label="Limpiar todos los filtros">
            Limpiar todo
          </button>
        )}
      </div>

      <div className="filter-group">
        <label htmlFor="search" className="filter-label">Buscar</label>
        <input
          type="text"
          id="search"
          placeholder="Marca, modelo..."
          value={filters.search}
          onChange={(e) => onFilterChange('search', e.target.value)}
          className="filter-input"
        />
      </div>

      <div className="filter-group">
        <label htmlFor="brand" className="filter-label">Marca</label>
        <select
          id="brand"
          value={filters.brand}
          onChange={(e) => onFilterChange('brand', e.target.value)}
          className="filter-select"
        >
          <option value="">Todas las marcas</option>
          {brands.map(brand => (
            <option key={brand} value={brand}>{brand}</option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="year" className="filter-label">Año</label>
        <select
          id="year"
          value={filters.year}
          onChange={(e) => onFilterChange('year', e.target.value)}
          className="filter-select"
        >
          <option value="">Todos los años</option>
          {years.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="transmission" className="filter-label">Transmisión</label>
        <select
          id="transmission"
          value={filters.transmission}
          onChange={(e) => onFilterChange('transmission', e.target.value)}
          className="filter-select"
        >
          <option value="">Todas</option>
          {transmissions.map(t => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="drivetrain" className="filter-label">Tracción</label>
        <select
          id="drivetrain"
          value={filters.drivetrain}
          onChange={(e) => onFilterChange('drivetrain', e.target.value)}
          className="filter-select"
        >
          <option value="">Todas</option>
          {drivetrains.map(d => (
            <option key={d} value={d}>{d === 'RWD' ? 'Trasera (RWD)' : d === 'AWD' ? 'Integral (AWD)' : d}</option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label className="filter-label">Rango de Precio (USD)</label>
        <div className="price-range">
          <input
            type="range"
            min="0"
            max="4000000"
            step="50000"
            value={filters.priceRange[0]}
            onChange={(e) => onFilterChange('priceRange', [parseInt(e.target.value), filters.priceRange[1]])}
            className="range-input"
            aria-label="Precio mínimo"
          />
          <input
            type="range"
            min="0"
            max="4000000"
            step="50000"
            value={filters.priceRange[1]}
            onChange={(e) => onFilterChange('priceRange', [filters.priceRange[0], parseInt(e.target.value)])}
            className="range-input"
            aria-label="Precio máximo"
          />
          <div className="price-values">
            <span>${filters.priceRange[0].toLocaleString()}</span>
            <span>${filters.priceRange[1].toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}