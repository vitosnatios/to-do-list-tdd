import Todo from '@/app/components/Todo';
import AppContainer from '@/app/components/containers/AppContainer';
import TodoListContainer from '@/app/components/containers/TodoListContainer';
import MainPage from '@/app/components/pages/MainPage';
import Title from '@/app/components/text/Title';
import { IToDo } from '@/types/ToDo';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Page', () => {
  it('checks if the title was rendered', () => {
    const ToDos: IToDo[] = [];
    render(
      <AppContainer>
        <Title>
          This is a To Do List App that I&apos;ve made to pratice TDD
        </Title>
      </AppContainer>
    );
    screen.getByText("This is a To Do List App that I've made to pratice TDD");
  });

  it('should properly render the ToDos from the props', () => {
    const ToDos: IToDo[] = [
      { id: 1, title: 'ToDo 1', description: 'description from ToDo 1' },
      { id: 2, title: 'ToDo 2', description: 'description from ToDo 2' },
      { id: 3, title: 'ToDo 3', description: 'description from ToDo 3' },
    ];
    render(
      <TodoListContainer>
        {ToDos?.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
        {ToDos.length == 0 && (
          <p className='text-indigo-700 font-bold text-lg'>
            You haven&apos;t added any ToDo yet
          </p>
        )}
      </TodoListContainer>
    );
    ToDos.forEach((todo) => screen.getByText(todo.description));
  });

  it('should render the empty ToDo text', () => {
    const ToDos: IToDo[] = [];
    render(
      <TodoListContainer>
        {ToDos?.map((todo) => (
          <Todo key={todo.id} {...todo} />
        ))}
        {ToDos.length == 0 && (
          <p className='text-indigo-700 font-bold text-lg'>
            You haven&apos;t added any ToDo yet
          </p>
        )}
      </TodoListContainer>
    );
    screen.getByText("You haven't added any ToDo yet");
  });
});
