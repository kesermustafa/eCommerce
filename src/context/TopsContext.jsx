import React, {createContext, useEffect, useState} from 'react';
import axios from "axios";

export const TopProductsContext = createContext();

export const TopProductsProvider = ({children}) => {

    const [top, setTop] = useState(null);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios
            .get('https://dummyjson.com/products/category/laptops')
            .then((res) => setTop(res.data.products))
            .catch((err) => setError(err.message))
            .finally(() => setIsLoading(false));
    }, []);


    return (
        <TopProductsContext.Provider value={{ top, error, isLoading }}>
            {children}
        </TopProductsContext.Provider>
    );
};


