import React from 'react';
import Title from '../text/Title';
import AppContainer from '../containers/AppContainer';
import TaskForm from '../form/TaskForm';
import Todo from '../Todo';
import TodoListContainer from '../containers/TodoListContainer';
import { IToDo } from '@/types/ToDo';

const MainPage = ({ ToDos }: { ToDos: IToDo[] }) => {
  return (
    <AppContainer>
      <Title>This is a To Do List App that I&apos;ve made to pratice TDD</Title>
      <TaskForm />

      <TodoListContainer>
        {ToDos.length > 0 ? (
          ToDos.map((todo) => <Todo key={todo.id} {...todo} />)
        ) : (
          <p className='text-indigo-700 font-bold text-lg'>
            You haven&apos;t added any ToDo yet
          </p>
        )}
      </TodoListContainer>
    </AppContainer>
  );
};

export default MainPage;
