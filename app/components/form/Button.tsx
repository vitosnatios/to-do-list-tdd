import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';

const Button = ({
  children,
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => {
  return (
    <button
      style={{ width: 87 }}
      className='bg-gradient-to-r from-purple-800 to-violet-600 text-white p-2 rounded-md hover:bg-green-500 focus:outline-none focus:ring focus:border-green-300 transition duration-300'
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
