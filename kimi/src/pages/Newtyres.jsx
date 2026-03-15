import { useState } from 'react';
import './Newtyres.css';
import Nav from '../components/Header'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const products = [
  { id: 1, name: 'Michelin',    size: '275/50/19', quantity: 8,  price: '120,000', badge: 'NEW',  photo: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=500&q=80' },
  { id: 2, name: 'Dunlop',      size: '275/50/19', quantity: 8,  price: '120,000', badge: '',     photo: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=500&q=80' },
  { id: 3, name: 'Bridgestone', size: '275/50/19', quantity: 8,  price: '120,000', badge: 'SALE', photo: 'https://images.unsplash.com/photo-1568772585019-cca1cfe5d8a7?w=500&q=80' },
  { id: 4, name: 'Road Stone',  size: '275/50/19', quantity: 8,  price: '120,000', badge: '',     photo: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=500&q=80' },
  { id: 5, name: 'Yokohama',    size: '275/50/19', quantity: 8,  price: '120,000', badge: 'NEW',  photo: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=500&q=80' },
  { id: 6, name: 'Chao Yang',   size: '275/50/19', quantity: 8,  price: '120,000', badge: '',     photo: 'https://images.unsplash.com/photo-1568772585019-cca1cfe5d8a7?w=500&q=80' },
  { id: 7, name: 'Road King',   size: '215/70/16', quantity: 10, price: '150,000', badge: 'SALE', photo: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=500&q=80' },
];

const Newtyres = () => {
  const [addedIds, setAddedIds] = useState(new Set());
  const [lovedIds, setLovedIds] = useState(new Set());
  const [activeFilter, setFilter] = useState('all');
  const [toast, setToast] = useState(false);

  const filtered = (activeFilter === 'all')
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
      <Nav/>

      {/* Hero */}
      <div className="tyres-hero">
        <div className="tyres-hero-bg" />
        <div className="tyres-hero-circle" />
        <div className="tyres-hero-circle2" />
        <span className="tyres-badge">2025 Collection</span>
        <h1 className="tyres-title">NEW TYRES</h1>
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
                <img src={p.photo} alt={p.name} className="tyre-img" />
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

          <Contact/>
          <Footer/>
    </div>
  );
};

export default Newtyres;
