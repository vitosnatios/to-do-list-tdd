import Form from './Form';
import Input from './Input';
import { submitNewToDo } from '@/app/server-actions/submitNewToDo';
import AddNewToDoButton from './AddNewToDoButton';

const TaskForm = () => {
  return (
    <Form action={submitNewToDo} aria-label='task-form'>
      <Input
        type='text'
        placeholder='Title'
        size={12}
        aria-label='task-input'
        name='title'
        required
      />
      <Input
        type='text'
        placeholder='Add a new happy task...'
        aria-label='desc-input'
        name='description'
        required
      />
      <AddNewToDoButton />
    </Form>
  );
};

export default TaskForm;
