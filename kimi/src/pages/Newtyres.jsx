import { useState } from 'react';
import './Newtyres.css';

const products = [
  { id: 1, name: 'Michelin',    size: '275/50/19', quantity: 8, price: '120,000', badge: 'NEW' },
  { id: 2, name: 'Dunlop',      size: '275/50/19', quantity: 8, price: '120,000', badge: '' },
  { id: 3, name: 'Bridgestone', size: '275/50/19', quantity: 8, price: '120,000', badge: 'SALE' },
  { id: 4, name: 'Road Stone',  size: '275/50/19', quantity: 8, price: '120,000', badge: '' },
  { id: 5, name: 'Yokohama',    size: '275/50/19', quantity: 8, price: '120,000', badge: 'NEW' },
  { id: 6, name: 'Chao Yang',   size: '275/50/19', quantity: 8, price: '120,000', badge: '' },
];

const TyreSVG = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="tyre-svg">
    {/* Outer tyre wall */}
    <circle cx="50" cy="50" r="44" fill="none" stroke="#8B3A2A" strokeWidth="10" opacity="0.25" />
    {/* Tread blocks */}
    {Array.from({ length: 16 }).map((_, i) => {
      const angle = (i / 16) * 360;
      const rad = (angle - 90) * Math.PI / 180;
      const x1 = 50 + 38 * Math.cos(rad);
      const y1 = 50 + 38 * Math.sin(rad);
      const x2 = 50 + 44 * Math.cos(rad);
      const y2 = 50 + 44 * Math.sin(rad);
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#8B3A2A" strokeWidth="4" strokeLinecap="round" opacity="0.5" />;
    })}
    {/* Inner rim edge */}
    <circle cx="50" cy="50" r="30" fill="none" stroke="#8B3A2A" strokeWidth="1.5" opacity="0.3" />
    {/* Rim face */}
    <circle cx="50" cy="50" r="28" fill="#f5eeeb" stroke="#8B3A2A" strokeWidth="1" opacity="0.6" />
    {/* Hub */}
    <circle cx="50" cy="50" r="7"   fill="#f5eeeb" stroke="#8B3A2A" strokeWidth="2" opacity="0.9" />
    <circle cx="50" cy="50" r="3"   fill="#8B3A2A" opacity="1" />
  </svg>
);

const Newtyres = () => {
  const [addedIds, setAddedIds] = useState(new Set());
  const [lovedIds, setLovedIds] = useState(new Set());
  const [activeFilter, setFilter] = useState('all');
  const [toast, setToast] = useState(false);

  const filtered = activeFilter === 'all'
    ? products
    : products.filter(p => p.badge === activeFilter);

  const addToCart = (id) => {
    setAddedIds(prev => new Set(prev).add(id));
    setToast(true);
    setTimeout(() => {
      setAddedIds(prev => { const s = new Set(prev); s.delete(id); return s; });
    }, 2000);
    setTimeout(() => setToast(false), 2400);
  };

  const toggleLove = (e, id) => {
    e.stopPropagation();
    setLovedIds(prev => {
      const s = new Set(prev);
      s.has(id) ? s.delete(id) : s.add(id);
      return s;
    });
  };

  return (
    <div className="tyres-parent">

      {/* Hero */}
      <div className="tyres-hero">
        <div className="tyres-hero-bg" />
        <div className="tyres-hero-circle" />
        <div className="tyres-hero-circle2" />
        <span className="tyres-badge">2025 Collection</span>
        <h1 className="tyres-title">NeW TYReS</h1>
        <p className="tyres-subtitle">
          Below there is variety of brands of the new tyres we provide. Take a look and add to cart whichever you would like to purchase.
        </p>
      </div>

      <div className="sub-tyres-parent">

        {/* Filters */}
        <div className="tyres-filters-bar">
          <div className="tyres-filters">
            {['all', 'NEW', 'SALE'].map(f => (
              <button
                key={f}
                className={`tyres-filter-btn ${activeFilter === f ? 'active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f === 'all' ? 'All' : f}
              </button>
            ))}
          </div>
          <span className="tyres-result-count">
            Showing <strong>{filtered.length}</strong> of {products.length} products
          </span>
        </div>

        {/* Cards */}
        <div className="tyres-cards">
          {filtered.map((p, i) => (
            <div className="tyre-card" key={p.id} style={{ animationDelay: `${i * 0.07}s` }}>

              {p.badge && (
                <span className={`tyre-card-badge ${p.badge === 'SALE' ? 'badge-sale' : 'badge-new'}`}>
                  {p.badge}
                </span>
              )}

              <div className="tyres-cards-img">
                <TyreSVG />
              </div>

              <div className="tyre-carrd-descri">
                <div className="tyre-card-top-row">
                  <h2 className="tyre-card-name">{p.name}</h2>
                  <span className="tyre-card-price">{p.price} <small>RWF</small></span>
                </div>
                <div className="tyre-card-specs">
                  {[`Size: ${p.size}`, `Qty: ${p.quantity}`].map(tag => (
                    <span key={tag} className="tyre-spec-tag">{tag}</span>
                  ))}
                </div>
                <div className="tyre-card-actions">
                  <button
                    className={`tyre-btn-cart ${addedIds.has(p.id) ? 'added' : ''}`}
                    onClick={() => addToCart(p.id)}
                  >
                    {addedIds.has(p.id) ? 'Added ✓' : 'Add to Cart'}
                  </button>
                  <button
                    className={`tyre-btn-wish ${lovedIds.has(p.id) ? 'loved' : ''}`}
                    onClick={(e) => toggleLove(e, p.id)}
                  >
                    {lovedIds.has(p.id) ? '♥' : '♡'}
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Toast */}
      <div className={`tyres-toast ${toast ? 'show' : ''}`}>Added to cart ✓</div>

    </div>
  );
};

export default Newtyres;
