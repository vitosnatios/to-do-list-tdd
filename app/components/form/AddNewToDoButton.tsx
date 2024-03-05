'use client';
import Button from './Button';
import { useFormStatus } from 'react-dom';

type Props = {};

const AddNewToDoButton = (props: Props) => {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type='submit' aria-label='task-button'>
      {pending ? 'Sending' : 'Add Task'}
    </Button>
  );
};

export default AddNewToDoButton;
