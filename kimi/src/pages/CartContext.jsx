import { createContext, useContext, useState } from 'react';

// 1. Create the box
const CartContext = createContext();

// 2. Create the provider — this wraps your whole app
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prev => {
      // if product already in cart, increase quantity
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      // otherwise add it fresh with qty 1
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, totalItems }}>
      {children}
    </CartContext.Provider>
  );
};

// 3. Custom hook — how any component accesses the cart
export const useCart = () => useContext(CartContext);