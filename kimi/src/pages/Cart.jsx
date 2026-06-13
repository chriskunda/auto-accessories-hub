
import { IoClose } from 'react-icons/io5'

import './Cart.css';

// Received opened prop as parameter
const Cart = ({ opened, closed }) => { 


  return (
    <div className={`cart-container ${opened ? 'isOpen' : ''}`} onClick={closed}>
      {/*stopPropaganda stops clicking on the cart and get removed*/}
      <div className='main-cart' onClick={(e) => e.stopPropagation()}>
        <div className='cart-header'>
          <h1>YOUR CART</h1>
          <i class="fa-solid fa-xmark" onClick={closed}></i>
        </div>
        <div className='cart-items'>
          <p>Your Cart is empty.</p>
        </div>
      </div> 
    </div>
  );
};

export default Cart;