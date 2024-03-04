'use client';
import React from 'react';
import Form from './Form';
import Input from './Input';
import Button from './Button';

type Props = {};

const TaskForm = (props: Props) => {
  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <Input type='text' placeholder='Add a new happy task...' />
      <Button type='submit'>Add Task</Button>
    </Form>
  );
};

export default TaskForm;
