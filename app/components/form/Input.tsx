import React, { InputHTMLAttributes, PropsWithChildren } from 'react';

const Input = (
  props: PropsWithChildren<InputHTMLAttributes<HTMLInputElement>>
) => {
  return (
    <input
      className='p-2 bg-gradient-to-r from-green-200 to-teal-200 text-purple-800 font-bold border border-purple-300 rounded-md focus:outline-none focus:border-purple-500 transition duration-300'
      {...props}
    />
  );
};

export default Input;
