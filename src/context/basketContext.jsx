import { useLocalStorage } from '@uidotdev/usehooks';
import { createContext, useState } from 'react';
import {Flip, toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate} from "react-router";


export const BasketContext = createContext();


export const BasketProvider = ({ children }) => {

  const [basket, setBasket] = useLocalStorage('basket', []);

  const addToBasket = (newProduct) => {
    // Bu üründen sepette var mı?
    const found = basket.find((product) => product.id === newProduct.id);

    if (!found) {
      // Ürün sepette yoksa ürünü sepete ekle (miktar 1)
      setBasket([...basket, { ...newProduct, amount: 1 }]);
    } else {
      // Ürün sepette varsa miktarını artır
      const updated = { ...found, amount: found.amount + 1 };

      // Sepet dizisindeki eski ürün yerine güncel halini koy
      const newBasket = basket.map((product) =>
          product.id === updated.id ? updated : product
      );
      // State'i güncelle
      setBasket(newBasket);
    }
  };

  const removeFromBasket = (delete_id) => {
    // Tek bir ürünü sepetten çıkarmak için kullanılacak fonksiyon

    const found = basket.find((product) => product.id === delete_id);

    if (found.amount > 1) {
      const updated = {...found, amount: found.amount - 1 };
     const newBasket = basket.map((product) => product.id === delete_id ? updated : product);
     setBasket(newBasket)
    }else {
      removeProductBasket(delete_id);
    }
  };

  const removeProductBasket = (delete_id) => {
    const deleted = basket.filter((product) => product.id !== delete_id);
    setBasket(deleted);
    toast.success("Your basket has been deleted.");
  }



  const fullRemoveBasket = () => {
    toast(
        ({ closeToast }) => (
            <div className='flex flex-col items-center gap-6'>
              <h4>Are you sure?</h4>
              <p>Do you want to delete the entire cart?</p>
              <div>
                <button
                    style={{ backgroundColor: '#3085d6', color: 'white', marginRight: '10px' }}
                    onClick={() => confirmDelete(closeToast)}
                    className='py-2 px-4 rounded'
                >
                  Yes, delete it!
                </button>
                <button
                    style={{ backgroundColor: '#d33', color: 'white' }}
                    onClick={closeToast}
                    className='py-2 px-4 rounded'
                >
                  Cancel
                </button>
              </div>
            </div>
        ),
        { autoClose: false, closeOnClick: false, position: "top-center", transition: Flip, }
    );
  };

  const confirmDelete = (closeToast) => {
    closeToast();
    toast.success("Your basket has been deleted.");
    setBasket([]);
  };


  const confirmOrder = () =>{
    toast.success("Your order confirmation has been received. Thank you.");
    setBasket([]);
  }

  return (
      <BasketContext.Provider value={{ basket, confirmOrder, addToBasket, removeFromBasket, fullRemoveBasket, removeProductBasket }}>
        {children}
        <ToastContainer />
      </BasketContext.Provider>
  );
};
