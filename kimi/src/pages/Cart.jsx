import { useCart } from '../pages/CartContext';

import './Cart.css';

// Received opened prop as parameter
const Cart = ({ opened, closed }) => { 


  return (
    <div className={`cart-container ${opened ? 'isOpen' : ''}`} onClick={closed}>
      <div className='main-cart' onClick={(e) => e.stopPropagation()}></div> {/*stopPropaganda stops clicking on the maincart*/}
    </div>
  );
};

export default Cart;