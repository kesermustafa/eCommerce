import React, {useContext} from 'react';

import {TopProductsContext, TopProductsProvider} from "../context/TopsContext.jsx";
import {BasketContext} from "../context/basketContext.jsx";
import Loader from "./Loader.jsx";
import Error from "../pages/Error.jsx";

const TopsProducts = () => {
    const {top, error, isLoading} = useContext(TopProductsContext);
    const {addToBasket} = useContext(BasketContext);

    if (error) {
        return <Error message={error} />;
    }

    const topLeftProducts = top ? top.slice(0, 1) : [];
    const topR1Products = top ? top.slice(1, 3) : [];
    const topR2Products = top ? top.slice(3, 5) : [];

    return (
        <div>
            <div className='m-auto text-center p-4'>
                <h2 className='m-auto text-3xl'> Favourites in the Laptop category</h2>
            </div>

            {<div className="topContainer flex-col md:flex-row">

                {
                    isLoading ? <Loader /> : topLeftProducts && topLeftProducts.length > 0 &&
                        <div className=" rounded-md rigth flex flex-col  bg-gray-50 relative" key={topLeftProducts.id}>
                            <img src={topLeftProducts[0]?.thumbnail} alt={topLeftProducts.title}
                                 className="productImage h-[100%] w-auto hover:scale-110 "/>
                            <div className="productName flex p-2 justify-between w-full absolute top-0 right-0">
                                <h3 className="productTitle  line-clamp-1">{topLeftProducts[0]?.title}</h3>
                                <p className="productPrice">${topLeftProducts[0]?.price}</p>
                            </div>

                            <button onClick={() => addToBasket(topLeftProducts[0])}
                                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 w-full cursor-pointer mt-4">
                                Add To Basket
                            </button>
                        </div>
                }

                <div className='left flex gap-3 flex-col'>
                    <div className='flex flex-wrap gap-5'>
                        {topR1Products.map((product) => (

                            <div className="topProductCard rounded-md flex flex-col justify-between bg-gray-50 relative" key={product.id}>

                                <img src={product.thumbnail} alt={product.title} className="productImage max-w-[250px] hover:scale-110"/>
                                <div className="productName p-2 flex justify-between w-full absolute top-0 right-0">
                                    <h3 className="productTitle line-clamp-1">{product.title}</h3>
                                    <p className="productPrice">${product.price}</p>
                                </div>


                                <button onClick={() => addToBasket(product)}
                                        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 w-full cursor-pointer mt-4">
                                    Add To Basket
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className='flex flex-wrap  gap-5'>
                        {
                            topR2Products.map((product) => (

                                <div className="topProductCard rounded-md flex justify-between flex-col bg-gray-50 relative" key={product.id}>
                                    <img src={product.thumbnail} alt={product.title}
                                         className="productImage  max-w-[250px]  hover:scale-110"/>
                                    <div className="productName  p-2    flex justify-between w-full absolute top-0 right-0">
                                        <h3 className="productTitle line-clamp-1">{product.title}</h3>
                                        <p className="productPrice">${product.price}</p>
                                    </div>

                                    <button onClick={() => addToBasket(product)}
                                            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 w-full cursor-pointer mt-4">
                                        Add To Basket
                                    </button>
                                </div>
                            ))}
                    </div>

                </div>
            </div>}
            <div className='border max-w-[1200px] mt-5 m-auto border-b-gray-200'></div>
        </div>
    );
};

export default TopsProducts;
