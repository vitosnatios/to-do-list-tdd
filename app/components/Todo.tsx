import React from 'react';

type Props = {
  title: string;
  description: string;
};

const Todo = ({ title, description }: Props) => {
  return (
    <div className='bg-blue-200 rounded-lg shadow-md p-4 mb-4'>
      <h2 className='text-lg font-bold mb-2'>{title}</h2>
      <p className='text-gray-800'>{description}</p>
    </div>
  );
};

export default Todo;
