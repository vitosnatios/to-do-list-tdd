'use client';
import { memo, useEffect } from 'react';
import Button from './Button';
import { useFormStatus } from 'react-dom';

type Props = {};

const AddNewToDoButton = (props: Props) => {
  const { pending } = useFormStatus();
  useEffect(() => {
    if (pending) {
      const [titleInput, descInput] = [
        document.querySelector<HTMLInputElement>("[aria-label='task-input']"),
        document.querySelector<HTMLInputElement>("[aria-label='desc-input']"),
      ];

      if (titleInput && descInput) {
        titleInput.value = '';
        descInput.value = '';
      }
    }
  }, [pending]);
  return (
    <Button disabled={pending} type='submit' aria-label='task-button'>
      {pending ? 'Sending' : 'Add Task'}
    </Button>
  );
};

export default memo(AddNewToDoButton);
