import { IToDo } from '@/types/ToDo';
import RemoveForm from './form/RemoveForm';

const Todo = ({ id, title, description }: IToDo) => {
  return (
    <div
      aria-label={`ToDo-container-${id}`}
      className='flex justify-between bg-gradient-to-r from-blue-400 to-teal-500 rounded-lg shadow-md p-6 mb-6'
    >
      <div>
        <h2 className='text-2xl text-green-800 font-extrabold mb-2 break-all'>
          {title}
        </h2>
        <p className='text-green-700 font-bold break-all'>{description}</p>
      </div>
      <RemoveForm id={id} />
    </div>
  );
};

export default Todo;
