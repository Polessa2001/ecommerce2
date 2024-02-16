import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
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
  const removeFromCart = (product, id) => {
    const newCart = cart.filter(item => {
      return item.id !== id;
    });
    setCart(newCart);
  }
  const resetCart = () => {
    setCart([]);
  }
  // increase amount
  const increaseAmount = (id) => {
    const item = cart.find(item => item.id === id);
    addToCart(item ,id);
    console.log(item);
  }
  // decrease amount
  const decreaseAmount = (id) => {
    const item = cart.find(item => item.id === id);
    if (item) {
      const newCart = cart.map(item => {
        if(item.id === id) {
          return {...item, amount: item.amount - 1}
        } else {
          return item
        }
      });
      setCart(newCart);
    }
    if (item.amount < 2) {
      removeFromCart(id);
    }
  }
  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart, resetCart, increaseAmount, decreaseAmount}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
