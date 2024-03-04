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
        {/* <Todo title='asd' description='sasdas' id={1} /> */}
      </TodoListContainer>
    </AppContainer>
  );
};

export default MainPage;
