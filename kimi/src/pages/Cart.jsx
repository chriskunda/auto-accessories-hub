
import { useCart } from '../context/CartContext'
import './Cart.css';

// Received opened prop as parameter
const Cart = ({ opened, closed }) => { 
  const { cartItems, removeFromCart, updateQuantity, getTotal } = useCart();

  return (
    <div className={`cart-container ${opened ? 'isOpen' : ''}`} onClick={closed}>
      {/*stopPropaganda stops clicking on the cart and get removed*/}
      <div className='main-cart' onClick={(e) => e.stopPropagation()}>
        <div className='cart-header'>
          <h1>YOUR CART</h1>
          <i className="fa-solid fa-xmark" onClick={closed}></i>
        </div>
        <div className='cart-items'>
          {cartItems.length === 0 ? (
            <p>Your Cart is empty.</p>
          ) : (
            <>
              <div className='items-list'>
                {cartItems.map((item) => (
                  <div key={item.id} className='cart-item'>
                    <div className='item-image'>
                      <img src={item.image || ''} alt={item.name} />
                    </div>
                    <div className='item-details'>
                      <h3>{item.name}</h3>
                      <p className='item-price'>{item.price} RWF</p>
                      {item.size && <p className='item-size'>Size: {item.size}</p>}
                    </div>
                    <div className='item-quantity'>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className='qty-btn'
                      >
                        -
                      </button>
                      <span className='qty-value'>{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className='qty-btn'
                      >
                        +
                      </button>
                    </div>
                    <div className='item-total'>
                      {item.price * item.quantity} RWF
                    </div>
                    <button 
                      className='remove-btn'
                      onClick={() => removeFromCart(item.id)}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>
                ))}
              </div>
              <div className='cart-footer'>
                <div className='cart-total'>
                  <h3>Total: {getTotal()} RWF</h3>
                </div>
                <button className='checkout-btn'>Proceed to Checkout</button>
              </div>
            </>
          )}
        </div>
      </div> 
    </div>
  );
};

export default Cart;