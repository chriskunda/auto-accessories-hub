import { useState } from 'react';
import './Newrims.css';
import Nav from '../components/Header'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { useCart } from './CartContext'; // 👈 step 1: import the hook

const products = [
  { id: 1, name: 'Phantom',  color: 'Gunmetal',     size: 19, finish: 'Matte',       price: '1,200,000', badge: 'NEW',  photo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80' },
  { id: 2, name: 'Eclipse',  color: 'Gloss Black',  size: 19, finish: 'Gloss',       price: '1,350,000', badge: '',     photo: 'https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=500&q=80' },
  { id: 3, name: 'Vortex',   color: 'Silver',       size: 20, finish: 'Polished',    price: '1,500,000', badge: 'SALE', photo: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=500&q=80' },
  { id: 4, name: 'Stealth',  color: 'Matte Black',  size: 20, finish: 'Satin',       price: '1,450,000', badge: '',     photo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80' },
  { id: 5, name: 'Razor',    color: 'Hyper Silver', size: 21, finish: 'Diamond-Cut', price: '1,750,000', badge: 'NEW',  photo: 'https://images.unsplash.com/photo-1600712242805-5f78671b24da?w=500&q=80' },
  { id: 6, name: 'Abyss',    color: 'Anthracite',   size: 21, finish: 'Dark Tint',   price: '1,650,000', badge: '',     photo: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=500&q=80' },
];

const Newrims = () => {
  const { addToCart, cartItems } = useCart(); // 👈 step 2: get addToCart from the shared box

  // build addedIds FROM the shared cart, not local state
  // checks which product IDs are already in the cart
  const addedIds = new Set(cartItems.map(item => item.id));

  const [lovedIds, setLovedIds]   = useState(new Set());
  const [activeFilter, setFilter] = useState('all');
  const [toast, setToast]         = useState(false);

  const filtered = activeFilter === 'all'
    ? products
    : products.filter(p => p.size === parseInt(activeFilter));

  const handleAddToCart = (p) => {
    addToCart(p);  // 👈 pass the whole product object, not just the id
    setToast(true);
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
      <Nav/>
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

        <div className="rims-cards">
          {filtered.map((p, i) => (
            <div className="card2" key={p.id} style={{ animationDelay: `${i * 0.07}s` }}>
              {p.badge && (
                <span className={`card-badge ${p.badge === 'SALE' ? 'badge-sale' : 'badge-new'}`}>
                  {p.badge}
                </span>
              )}
              <div className="rims-cards-img">
                <img src={p.photo} alt={p.name} className="rim-img" />
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
                    onClick={() => handleAddToCart(p)}
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

      <div className={`rims-toast ${toast ? 'show' : ''}`}>Added to cart ✓</div>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Newrims;
