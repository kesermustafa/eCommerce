import React from 'react';
import { IoWarningOutline } from 'react-icons/io5';
const Error = ({ message }) => {
  return (
    <div className="my-5 text-center p-4 inline   ">
      <div className="flex flex-col gap-5 bg-amber-400 rounded max-w-[800px] w-[600px] m-auto py-20  mt-10 ">
        <h2 className="text-5xl font-bold text-red-600">
          <IoWarningOutline className="m-auto text-5xl " />
          Oopss..
        </h2>
        <h3 className="text-xl">{message}</h3>
      </div>
    </div>
  );
};

export default Error;
