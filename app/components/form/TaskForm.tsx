'use client';
import React, { FormEvent, useState } from 'react';
import Form from './Form';
import Input from './Input';
import Button from './Button';
import { useRouter } from 'next/navigation';

const TaskForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const submitNewToDo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (
      !('title' in e.target) ||
      !('description' in e.target) ||
      !(e.target.title instanceof HTMLInputElement) ||
      !(e.target.description instanceof HTMLInputElement)
    ) {
      throw new Error('Hacker, please.');
    }

    await fetch('/api/newToDo', {
      method: 'POST',
      body: JSON.stringify({
        title: e.target.title.value,
        description: e.target.description.value,
      }),
    });
    setLoading(false);
    router.refresh();
  };

  return (
    <Form onSubmit={submitNewToDo} aria-label='task-form'>
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
        aria-label='task-input'
        name='description'
        required
      />
      <Button disabled={loading} type='submit' aria-label='task-button'>
        {loading ? 'Sending' : 'Add Task'}
      </Button>
    </Form>
  );
};

export default TaskForm;
