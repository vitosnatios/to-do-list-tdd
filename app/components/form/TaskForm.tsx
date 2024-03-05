'use client';
import React, { FormEvent, useRef, useState } from 'react';
import Form from './Form';
import Input from './Input';
import Button from './Button';

const TaskForm = () => {
  const submitNewToDo = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !('title' in e.target) ||
      !('description' in e.target) ||
      !(e.target.title instanceof HTMLInputElement) ||
      !(e.target.description instanceof HTMLInputElement)
    ) {
      throw new Error('Hacker, please.');
    }

    const res = await fetch('/api/newToDo', {
      method: 'POST',
      body: JSON.stringify({
        title: e.target.title.value,
        description: e.target.description.value,
      }),
    });

    const json = await res.json();
    console.log(json);
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
      <Button type='submit' aria-label='task-button'>
        Add Task
      </Button>
    </Form>
  );
};

export default TaskForm;
