// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import RatingStars from './RatingStars';
import { BasketContext } from '../context/basketContext';
import { VscPercentage } from "react-icons/vsc";

// eslint-disable-next-line react/prop-types
const Card = ({ products }) => {
  const {addToBasket} = useContext(BasketContext);
  return (
    <div className="bg-white max-w-[1280px] mx-auto  ">
      <div className="mx-auto p-3 lg:px-5 overflow-hidden">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 overflow-hidden">
            {/* eslint-disable-next-line react/prop-types */}
          {products.map((product) => (
            <div key={product.id}>
              <div  className="group relative  ">

                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 ">
                  {product.availabilityStatus === 'Low Stock' ? (
                    <div className="text-end flex justify-end   ">
                      <p className="bg-red-600 px-4  w-28 py-1.5 rounded-bl-3xl text-gray-200 text-sm font-semibold">
                        {product.availabilityStatus}
                      </p>

                    </div>
                  ) : (
                    <div className="text-end pe-2 mt-1 invisible">
                      <p className="invisible bg-red-600 py-1 px-2 rounded-xl text-gray-200 text-sm font-semibold">
                        {product.availabilityStatus}
                      </p>
                    </div>
                  )}

                    {product.discountPercentage
                    && product.discountPercentage > 1
                        ? <p className=" bg-amber-300 overflow-hidden rounded-tl-md rounded-br-3xl flex gap-2 items-center text-sm absolute  top-0 left-0 text-red-600 text-end px-4 p-2">
                           <span >Discount </span> <span className='flex items-center font-bold'> <span> {Math.floor(product.discountPercentage)}</span> <VscPercentage /></span> </p>
                        : <p className='absolute top-0 left-0 invisible'>25</p>}

                  <img
                    alt={product.title}
                    src={product.thumbnail}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />


                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-black font-medium  text-[1rem] line-clamp-1">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-nowrap text-gray-900">
                    {product.price} $
                  </p>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <p className="capitalize text-sm text-gray-700 text-[1rem] line-clamp-1">
                  {product.category}
                </p>
                <div>
                  <RatingStars rating={product.rating} />
                </div>
              </div>
              <button onClick={()=> addToBasket(product)} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700 w-full cursor-pointer mt-4">
                Add To Basket
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
