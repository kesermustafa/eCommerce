import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('https://dummyjson.com/products')
      .then((res) => setData(res.data.products))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  // console.log(product);

  

  return (
    <ProductContext.Provider value={{ data, error, isLoading }}>
      {children}
    </ProductContext.Provider>
  );
};
