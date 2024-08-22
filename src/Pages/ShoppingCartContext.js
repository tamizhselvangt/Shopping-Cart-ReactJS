import React, { createContext, useState, useContext } from 'react';

const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [items, setItems] = useState(0);
  const [total, setTotal] = useState(0);

  const addToCart = (price, isAdding) => {
    setItems(prevItems => isAdding ? prevItems + 1 : prevItems - 1);
    setTotal(prevTotal => isAdding ? prevTotal + price : prevTotal - price);
  };

  return (
    <ShoppingCartContext.Provider value={{ items, total, addToCart }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => useContext(ShoppingCartContext);
