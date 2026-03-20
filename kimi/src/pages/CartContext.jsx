// 1. Import the tools we need from React
import { createContext, useContext, useState } from 'react';

// 2. Create the whiteboard (the context itself)
//    Right now it's empty — just an empty board
const CartContext = createContext();

// 3. Create the "CartProvider" — this is the component that WRAPS your app
//    It holds the actual cart data and the functions to change it
export const CartProvider = ({ children }) => {

    // 4. cartItems is an array that holds everything added to cart
    //    setCartItems is the only way to update it
    const [cartItems, setCartItems] = useState([]);

    // 5. This function runs when someone clicks "Add to Cart"
    //    It receives the rim product as "item"
    const addToCart = (item) => {
        setCartItems((prev) => [...prev, item]);
        //  ↑ "prev" = the old cart. We copy it with [...prev] and ADD the new item at the end
    };

    // 6. This function removes one item by its index position
    const removeFromCart = (indexToRemove) => {
        setCartItems((prev) => prev.filter((_, i) => i !== indexToRemove));
        //  ↑ filter keeps everything EXCEPT the item at the given index
    };

    // 7. We share 3 things on the whiteboard:
    //    - cartItems: the list itself
    //    - addToCart: the "add" function
    //    - removeFromCart: the "remove" function
    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
            {children}
            {/* ↑ "children" means whatever is INSIDE <CartProvider>...</CartProvider> */}
        </CartContext.Provider>
    );
};

// 8. A custom hook — just a shortcut so you don't repeat useContext(CartContext) everywhere
//    Any component calls: const { cartItems, addToCart } = useCart();
export const useCart = () => useContext(CartContext);