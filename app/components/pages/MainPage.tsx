import React from 'react';
import Title from '../text/Title';
import AppContainer from '../containers/AppContainer';
import TaskForm from '../form/TaskForm';

type Props = {};

const MainPage = (props: Props) => {
  return (
    <AppContainer>
      <Title>This is a To Do List App that I&apos;ve made to pratice TDD</Title>
      <TaskForm />
      <div className='w-full max-w-lg mt-8'></div>
    </AppContainer>
  );
};

export default MainPage;
