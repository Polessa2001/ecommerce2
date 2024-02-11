import React, { createContext, useState, useEffect } from 'react';

// Create context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://api.storerestapi.com/products');
      const data = await response.json();
      setProducts(data);
      console.log(data);
    };

    fetchProducts();
  }, []);

  return <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>;
};

export default ProductProvider;
