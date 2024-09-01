import React, {useContext, useRef, useState} from 'react';
import { FaCcVisa } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa6";
import { FaCcPaypal } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaBitcoin } from "react-icons/fa";
import {BasketContext} from "../context/basketContext.jsx";
import {useNavigate} from "react-router";
const Payment = () => {

    const {basket, confirmOrder, fullRemoveBasket} = useContext(BasketContext);
    const navigate = useNavigate();
    const totalBasketPrice = basket.reduce((a, b) => a + b.amount * b.price, 0).toFixed(2);

    const [cardNumber, setCardNumber] = useState('');

    const formatCardNumber = (value) => {
        return value
            .replace(/\s?/g, '') // Mevcut tüm boşlukları kaldır
            .replace(/(\d{4})/g, '$1 ') // Her 4 haneden sonra boşluk ekle
            .trim(); // Sondaki gereksiz boşluğu kaldır
    };

    const handleChange = (e) => {
        const input = e.target.value;
        console.log(input)
        const formattedInput = formatCardNumber(input);
        setCardNumber(formattedInput);
    };

    const expirationDateRef = useRef(null);

    const formatExpirationDate = (value) => {

        return value
            .replace(/\D/g, '') // Tüm rakam olmayan karakterleri kaldır
            .replace(/^(\d{2})(\d{0,2})/, (match, p1, p2) => p2 ? `${p1}/${p2}` : `${p1}/`); // İlk 2 haneden sonra eğik çizgi ekle
    };

    const handleExpiryDate = () => {
        const input = expirationDateRef.current.value;
        const formattedInput = formatExpirationDate(input);
        expirationDateRef.current.value = formattedInput;
    };

    const handlePayment = () => {

        navigate('/')
        confirmOrder()
    }

    return (

        <div
            className="mt-5 md:max-w-[90%] gap-6 flex flex-col lg:flex-row justify-center items-center min-h-[70vh] payment-container m-auto rounded-md p-2 md:p-6">

            <div className="flex flex-col gap-2 border p-3 border-gray-400  rounded-md ">
                <h4 className="font-semibold text-amber-600">Teslimat adresi</h4>

                <div>
                    <label className="block px-2" htmlFor="adres1">Address</label>
                    <input className="w-full  py-1 px-3 rounded-md border border-gray-400" type="text"
                           placeholder='mahalle, cadde' id='adres1'/>
                </div>

                <div>
                    <label className="block px-2" htmlFor="adres2">Address</label>
                    <input className="w-full  py-1 px-3 rounded-md border border-gray-400" type="text"
                           placeholder='sokak, Apt. blok, no' id='adres2'/>
                </div>


                <div className='flex w-full gap-4'>
                    <div className="flex-grow-1 basis-1/2">
                        <label className="block px-2" htmlFor="city">City</label>
                        <input className="w-full  py-1 px-3 rounded-md border border-gray-400" type="text"
                               placeholder='Ankara' id='city'/>
                    </div>

                    <div className='flex-grow-1 basis-1/2'>
                        <label className="block  px-2 " htmlFor="state">State</label>
                        <input className="w-full  py-1 px-3 rounded-md border border-gray-400" type="text"
                               maxLength="3" pattern="\d{3}" placeholder='Cankaya' id='state'/>
                    </div>
                </div>

                <div className='flex w-full gap-4'>
                    <div className="flex-grow-1 basis-1/3">
                        <label className="block px-2" htmlFor="zipCode">Zip Code</label>
                        <input className="w-full  py-1 px-3 rounded-md border border-gray-400" type="text"
                               placeholder='420236' id='zipCode'/>
                    </div>

                    <div className='flex-grow-2 basis-2/3'>
                        <label className="block  px-2 " htmlFor="country">Country</label>
                        <input className="w-full  py-1 px-3 rounded-md border border-gray-400" type="text"
                               maxLength="3" pattern="\d{3}" placeholder='Turkiye' id='country'/>
                    </div>
                </div>
            </div>

            <div className='border p-3 border-gray-400  rounded-md '>
                <form className="flex flex-col gap-4 ">
                    <div>
                        <label className="block px-2" htmlFor="name">Name on card</label>
                        <input className="w-full py-1 px-3 rounded-md border border-gray-400"
                               type="text"
                               placeholder='Name'
                               id='name'

                        />
                        <div className="flex justify-between items-center pe-2">
                            <div className="flex items-center gap-2 text-3xl px-1 pt-3">
                                <FaCcVisa className='text-blue-600'/>
                                <FaCcMastercard className='text-red-400'/>
                                <FaCcPaypal className='text-blue-700'/>
                            </div>
                            <div className="text-3xl ">
                                <RiSecurePaymentLine className='text-green-600'/>
                            </div>
                        </div>

                    </div>

                    <div>
                        <label className="block px-2" htmlFor="cardNo">Credit Card Number</label>
                        <input className="w-full  py-1 px-3 rounded-md border border-gray-400" type="text"
                               placeholder='1234 5678 9012 3456' id='cardNo'
                               value={cardNumber}
                               maxLength="19"
                               onChange={handleChange}/>
                    </div>

                    <div className='flex w-full gap-4'>
                        <div className="flex-grow-2 basis-2/3">
                            <label className="block px-2" htmlFor="expiryDate">Expiry Date</label>
                            <input className="w-full  py-1 px-3 rounded-md border border-gray-400" type="text"
                                   id='expiryDate'
                                   ref={expirationDateRef} // Inputa referans veriliyor
                                   maxLength="5" // MM/YY formatı için 5 karakterlik sınır
                                   onChange={handleExpiryDate}
                                   placeholder="MM/YY"
                            />
                        </div>

                        <div className='flex-grow-1 basis-1/3'>
                            <label className="block  px-2 " htmlFor="cvv">CVV</label>
                            <input className="w-full  py-1 px-3 rounded-md border border-gray-400" type="number"
                                   maxLength="3" pattern="\d{3}" placeholder='123' id='cvv'/>
                        </div>
                    </div>

                    <button onClick={handlePayment} className="w-full py-1 bg-cyan-500 rounded-md">
                        <span className="font-semibold">{totalBasketPrice}</span>TL Odeme Onayi</button>
                </form>
            </div>


        </div>
    );
};

export default Payment;

