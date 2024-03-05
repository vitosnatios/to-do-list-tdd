'use client';
import React from 'react';
import Button from './Button';
import { useFormStatus } from 'react-dom';

type Props = {};

const RemoveButtonComponent = (props: Props) => {
  const { pending } = useFormStatus();
  return (
    <Button aria-label='todo-delete-button'>
      {pending ? 'Wait' : 'Remove'}
    </Button>
  );
};

export default RemoveButtonComponent;
