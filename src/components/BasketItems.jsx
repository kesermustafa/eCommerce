import {CiSquareMinus, CiSquarePlus} from "react-icons/ci";
import {GoTrash} from "react-icons/go";
import {useContext} from "react";
import {BasketContext} from "../context/basketContext.jsx";

// eslint-disable-next-line react/prop-types
const BasketItems = ({product}) => {

    const {basket, addToBasket, fullRemoveBasket, removeFromBasket, removeProductBasket} = useContext(BasketContext);


    return (
        <div
            key={product.id}
            className="flex flex-col  my-5 w-full max-w-[1280px] m-auto border border-gray-200 rounded-md ps-1 py-4 pe-4"
        >

            <div className='flex justify-between items-center'>
                <h2 className="line-clamp-1 text-[20px] ps-2">{product.title}</h2>
                <div>
                    <p className="ml-4 text-nowrap text-[16px] text-end">
                        <span className='me-2 hidden sm:inline text-gray-600'>Price</span> {product.price}$</p>
                </div>
            </div>


            <div className=" gap-3 md:gap-0 flex justify-between">
                <div className="h-32 w-32 md:h-48 md:w-48  overflow-hidden rounded-md ">
                    <img
                        alt={product.imageAlt}
                        src={product.thumbnail}
                        className="h-full w-full object-cover object-center"
                    />
                </div>

                <div className='flex sm:ms-10 flex-1 flex-col  '>
                    <div
                        className="flex gap-3 h-[100%] justify-center   md:gap-0 flex-col sm:flex-row sm:justify-between">
                        <div className='flex text-gray-900 items-center'>
                            <div className="flex items-center gap-6">
                                <p className="text-gray-500 "><span className='me-2'>Amount</span> <span
                                    className='font-bold'>{product.amount}</span>
                                </p>
                                <div className='flex'>
                                    <CiSquarePlus onClick={()=> addToBasket(product) }
                                        className='text-4xl cursor-pointer text-green-700 hover:text-green-900 m-auto hover:scale-105'/>
                                    <CiSquareMinus onClick={() => removeFromBasket(product.id)}
                                        className='text-4xl cursor-pointer text-yellow-600 hover:text-yellow-800 m-auto hover:scale-105'/>
                                </div>
                            </div>
                        </div>

                        {
                            product.amount > 1 &&
                            <div className='flex justify-start items-center '>
                                <p className="text-nowrap text-[16px] text-start">
                                    <span className='me-2 text-gray-600'>Total Price</span>
                                    <span className='font-bold text-xl'>{product.amount * product.price}$</span>
                                </p>
                            </div>
                        }

                    </div>

                    <div className="text-end flex justify-end">
                        <GoTrash className='text-xl text-red-600 cursor-pointer hover:scale-110 hover:text-red-800'
                                 onClick={() => removeProductBasket(product.id)}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BasketItems;
