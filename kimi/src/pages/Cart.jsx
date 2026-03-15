import { useCart } from '../pages/CartContext';
import { useNavigate } from 'react-router-dom';
import { BsTrash } from 'react-icons/bs';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, totalItems } = useCart();
  const navigate = useNavigate();

  // calculate total price
  // .reduce() loops through every item and adds up the prices
  const totalPrice = cartItems.reduce((sum, item) => {
    const price = parseInt(item.price.replace(/,/g, '')); // remove commas: "120,000" → 120000
    return sum + price * item.qty;
  }, 0); // 0 is the starting value

  // show empty state if cart has nothing
  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <div className="cart-empty-icon">🛒</div>
        <h2>Your cart is empty</h2>
        <p>Go add some rims or tyres!</p>
        <button className="cart-shop-btn" onClick={() => navigate('/')}>
          Shop Now
        </button>
      </div>
    );
  }

  return (
    <div className="cart-parent">

      {/* Header */}
      <div className="cart-hero">
        <div className="cart-hero-bg" />
        <div className="cart-hero-circle" />
        <div className="cart-hero-circle2" />
        <span className="cart-badge">Your Order</span>
        <h1 className="cart-title">Cart</h1>
        <p className="cart-subtitle">{totalItems} item{totalItems !== 1 ? 's' : ''} ready for checkout</p>
      </div>

      <div className="cart-content">

        {/* Item list */}
        <div className="cart-items">
          {cartItems.map(item => (
            <div className="cart-item" key={item.id}>
              <div className="cart-item-img">
                {item.photo
                  ? <img src={item.photo} alt={item.name} />
                  : <div className="cart-item-img-placeholder" />
                }
              </div>
              <div className="cart-item-info">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-meta">
                  {item.size ? `Size: ${item.size}` : item.finish ? item.finish : ''}
                  {item.color ? ` · ${item.color}` : ''}
                </p>
                <span className="cart-item-qty">Qty: {item.qty}</span>
              </div>
              <div className="cart-item-right">
                <span className="cart-item-price">{item.price} <small>RWF</small></span>
                <button
                  className="cart-item-remove"
                  onClick={() => removeFromCart(item.id)}
                  title="Remove item"
                >
                  <BsTrash />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="cart-summary">
          <h3 className="cart-summary-title">Order Summary</h3>
          <div className="cart-summary-row">
            <span>Items ({totalItems})</span>
            <span>{totalPrice.toLocaleString()} RWF</span>
          </div>
          <div className="cart-summary-row">
            <span>Delivery</span>
            <span className="cart-free">Free</span>
          </div>
          <div className="cart-summary-divider" />
          <div className="cart-summary-total">
            <span>Total</span>
            <span>{totalPrice.toLocaleString()} RWF</span>
          </div>
          <button className="cart-checkout-btn">Proceed to Checkout</button>
          <button className="cart-continue-btn" onClick={() => navigate('/')}>
            ← Continue Shopping
          </button>
        </div>

      </div>
    </div>
  );
};

export default Cart;
