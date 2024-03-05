'use client';
import { removeToDo } from '@/app/server-actions/removeToDo';
import RemoveButtonComponent from './RemoveButtonComponent';
import { memo } from 'react';

type Props = { id: number };

const RemoveButton = ({ id }: Props) => {
  return (
    <form action={(formData) => removeToDo(id, formData)}>
      <RemoveButtonComponent />
    </form>
  );
};

export default memo(RemoveButton);
