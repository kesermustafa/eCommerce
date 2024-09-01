import React from 'react';
import { Rings } from 'react-loader-spinner';
const Loader = () => {
  return (
    <div className="flex justify-center mt-40 page">
      <Rings
        visible={true}
        height="80"
        width="80"
        color="#eab308"
        ariaLabel="rings-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
      
    </div>
  );
};

export default Loader;
