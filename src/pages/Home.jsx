import React, { useContext } from 'react';
import { ProductContext } from '../context/productContext';
import Card from '../components/Card';
import Loader from '../components/Loader';
import Error from './Error';
import TopsProducts from "../components/TopsProducts.jsx";
import { TopProductsProvider } from "../context/TopsContext.jsx";

const Home = () => {
  const { data, error, isLoading } = useContext(ProductContext);



  return (
      <div className="">
        {isLoading ? (
            <Loader />
        ) : error ? (
            <Error message={error} />
        ) : (
            data &&
            <div>
              <TopProductsProvider>
                <TopsProducts />
              </TopProductsProvider>
              <Card products={data} />
            </div>
        )}


      </div>
  );
};

export default Home;
