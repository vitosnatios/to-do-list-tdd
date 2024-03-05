'use client';
import { removeToDo } from '@/app/server-actions/removeToDo';
import React from 'react';
import Button from './Button';

type Props = { id: number };

const RemoveButton = ({ id }: Props) => {
  return (
    <form action={(formData) => removeToDo(id, formData)}>
      <Button aria-label='todo-delete-button'>Remover</Button>
    </form>
  );
};

export default RemoveButton;
