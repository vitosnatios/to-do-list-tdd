import { IToDo } from '@/types/ToDo';
import React from 'react';
import RemoveButton from './form/RemoveButton';

const Todo = ({ id, title, description }: IToDo) => {
  return (
    <div
      aria-label={`ToDo-container-${id}`}
      className='flex justify-between bg-blue-200 rounded-lg shadow-md p-4 mb-4'
    >
      <div>
        <h2 className='text-lg font-bold mb-2 break-all'>{title}</h2>
        <p className='text-gray-800 break-all'>{description}</p>
      </div>
      <RemoveButton id={id} />
    </div>
  );
};

export default Todo;
