// eslint-disable-next-line no-unused-vars
import React, {useContext, useState} from 'react';
import {BasketContext} from '../context/basketContext';
import {Link} from 'react-router-dom';
import {IoCartOutline} from 'react-icons/io5';
import {BsBoxArrowRight} from 'react-icons/bs';
import BasketItems from "../components/BasketItems.jsx";
import {useNavigate} from "react-router";

const Basket = () => {
    const {basket, confirmOrder, fullRemoveBasket} = useContext(BasketContext);

    const navigate = useNavigate();

    const totalProducts = basket.reduce((a, b) => a + b.amount, 0);

    console.log(basket)
    const totalBasketPrice = basket.reduce((a, b) => a + b.amount * b.price, 0).toFixed(2);

    const handleClick = () =>{

        navigate('/payment')
    }

    return (

        <div className='flex flex-col min-h-[75vh]'>
            <div className=" grow ">
                {basket.length === 0 && (
                    <div className="flex flex-col gap-5 justify-center items-center mt-10">
                    <span className="text-2xl font-medium ">
                          <IoCartOutline className="m-auto text-5xl"/> Your basket is empty.
                    </span>
                        <div
                            className="flex bg-blue-500 text-white p-2 px-5 rounded-md hover:bg-blue-700  cursor-pointer items-center justify-center gap-3">
                            <Link to="/" className=" ">
                                Continue shopping
                            </Link>
                            <BsBoxArrowRight className="text-2xl"/>
                        </div>
                    </div>
                )}

                {basket?.map((product) =>
                    <BasketItems key={product.id} product={product}/>
                )}

                {basket.length !== 0 &&
                    <div
                        className='w-full max-w-[1280px] m-auto h-40 border-t border-b-gray-400 p-4 flex flex-col gap-3 '>
                        <div className='border-b border-gray-200 py-3 flex justify-between'><span
                            className='text-gray-600'>Number of items in the cart</span> <span
                            className='font-bold'>{totalProducts}</span></div>
                        <div className='border-b border-gray-200 py-3 flex justify-between '><span
                            className='font-bold text-gray-600 text-xl'>Total basket price</span> <span
                            className='font-bold text-xl'>{(totalBasketPrice)}<span
                            className='font-semibold'>$</span></span></div>

                    </div>

                }

                {basket.length !== 0 &&
                    <div className='w-full max-w-[1200px] pe-10 mt-5 mb-10 m-auto text-end'>
                        <span onClick={handleClick}
                              className='py-2 px-5 bg-amber-200 rounded-full border border-amber-700 hover:bg-amber-400'>Confirm order</span>
                    </div>}
            </div>
        </div>

    );
};

export default Basket;
