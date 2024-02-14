import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  // add to cart
  const addToCart = (product, id) => {
    console.log(`item ${id} added to the cart`);
    const newItem = {...product, amount: 1};
    // check if the item is already in the cart
    const cartItem = cart.find(item => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = [...cart].map(item => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1} ;
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
        setCart([...cart, newItem]);
      }
    };
  console.log(cart);
  // remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter(item => {
      return item.id !== id;
    });
    setCart(newCart);
  }
  const resetCart = () => {
    setCart([]);
  }
  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart, resetCart}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
