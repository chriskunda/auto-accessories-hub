import { useState } from 'react';
import './Newrims.css';

const products = [
  { id: 1, name: 'Phantom',  color: 'Gunmetal',     size: 19, finish: 'Matte',       price: '1,200,000', badge: 'NEW' },
  { id: 2, name: 'Eclipse',  color: 'Gloss Black',  size: 19, finish: 'Gloss',       price: '1,350,000', badge: '' },
  { id: 3, name: 'Vortex',   color: 'Silver',       size: 20, finish: 'Polished',    price: '1,500,000', badge: 'SALE' },
  { id: 4, name: 'Stealth',  color: 'Matte Black',  size: 20, finish: 'Satin',       price: '1,450,000', badge: '' },
  { id: 5, name: 'Razor',    color: 'Hyper Silver', size: 21, finish: 'Diamond-Cut', price: '1,750,000', badge: 'NEW' },
  { id: 6, name: 'Abyss',    color: 'Anthracite',   size: 21, finish: 'Dark Tint',   price: '1,650,000', badge: '' },
];


const SPOKES = [0, 51, 103, 154, 206, 257, 309];

const Newrims = () => {
  const [addedIds, setAddedIds]   = useState(new Set());
  const [lovedIds, setLovedIds]   = useState(new Set());
  const [activeFilter, setFilter] = useState('all');
  const [toast, setToast]         = useState(false);

  const filtered = activeFilter === 'all'
    ? products
    : products.filter(p => p.size === parseInt(activeFilter));

  const addToCart = (id) => {
    setAddedIds(prev => new Set(prev).add(id));
    setToast(true);
    setTimeout(() => {
      setAddedIds(prev => { const s = new Set(prev); s.delete(id); return s; });
    }, 2000);
    console.log(addedIds)
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
    <div className="rims-parent">

      {/* Hero */}
      <div className="rims-hero">
        <div className="rims-hero-bg" />
        <div className="rims-hero-circle" />
        <div className="rims-hero-circle2" />
        <span className="rims-badge">2025 Collection</span>
        <h1 className="rims-title">New Rims</h1>
        <p className="rims-subtitle">
          Elevate your vehicle's profile with our latest collection of precision-engineered alloys.
          Where high-end aesthetics meet the road, turning every drive into a statement of elegance.
        </p>
      </div>

      <div className="sub-rims-parent">

        {/* Filters */}
        <div className="rims-filters-bar">
          <div className="rims-filters">
            {['all', '19', '20', '21'].map(f => (
              <button
                key={f}
                className={`rims-filter-btn ${activeFilter === f ? 'active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f === 'all' ? 'All' : `${f}"`}
              </button>
            ))}
          </div>
          <span className="rims-result-count">
            Showing <strong>{filtered.length}</strong> of {products.length} products
          </span>
        </div>

        {/* Cards */}
        <div className="rims-cards">
          {filtered.map((p, i) => (
            <div className="card2" key={p.id} style={{ animationDelay: `${i * 0.07}s` }}>

              {p.badge && (
                <span className={`card-badge ${p.badge === 'SALE' ? 'badge-sale' : 'badge-new'}`}>
                  {p.badge}
                </span>
              )}

              <div className="rims-cards-img">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="rim-svg">
                  <circle cx="50" cy="50" r="44" fill="none" stroke="#8B3A2A" strokeWidth="4" opacity="0.35"/>
                  <circle cx="50" cy="50" r="36" fill="none" stroke="#8B3A2A" strokeWidth="1.5" opacity="0.2"/>
                  {SPOKES.map((angle, idx) => (
                    <line key={idx} x1="50" y1="50"
                      x2={50 + 36 * Math.cos((angle - 90) * Math.PI / 180)}
                      y2={50 + 36 * Math.sin((angle - 90) * Math.PI / 180)}
                      stroke="#8B3A2A" strokeWidth="3.5" strokeLinecap="round" opacity="0.65"/>
                  ))}
                  <circle cx="50" cy="50" r="9" fill="#f5eeeb" stroke="#8B3A2A" strokeWidth="2" opacity="0.9"/>
                  <circle cx="50" cy="50" r="3.5" fill="#8B3A2A" opacity="1"/>
                </svg>
              </div>

              <div className="rim-carrd-descri">
                <div className="card-top-row">
                  <h2 className="card-name">{p.name}</h2>
                  <span className="card-price">{p.price} <small>RWF</small></span>
                </div>
                <div className="card-specs">
                  {[p.color, `${p.size}"`, 'One set', p.finish].map(tag => (
                    <span key={tag} className="spec-tag">{tag}</span>
                  ))}
                </div>
                <div className="card-actions">
                  <button
                    className={`btn-cart ${addedIds.has(p.id) ? 'added' : ''}`}
                    onClick={() => addToCart(p.id)}
                  >
                    {addedIds.has(p.id) ? 'Added ✓' : 'Add to Cart'}
                  </button>
                  <button
                    className={`btn-wish ${lovedIds.has(p.id) ? 'loved' : ''}`}
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
      <div className={`rims-toast ${toast ? 'show' : ''}`}>Added to cart ✓</div>

    </div>
  );
};

export default Newrims;
