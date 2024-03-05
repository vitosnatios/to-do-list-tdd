import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';

const Button = ({
  children,
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => {
  return (
    <button
      style={{ width: 87 }}
      className='bg-purple-800 text-green-200 p-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300 transition duration-300'
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
