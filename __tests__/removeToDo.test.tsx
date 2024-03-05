import Todo from '@/app/components/Todo';
import TodoListContainer from '@/app/components/containers/TodoListContainer';
import { IToDo } from '@/types/ToDo';
import { render, screen } from '@testing-library/react';

describe('ToDo remove button', () => {
  let ToDos: IToDo[] = [{ id: 1, title: 'eat', description: 'sanduish' }];
  let setState = (newState: IToDo[]) => {
    ToDos = newState;
  };
  beforeEach(() => {
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
  });

  it('should exist', () => {
    screen.getByRole('button', { name: 'todo-delete-button' });
  });

  it('should remove itself from the state', () => {
    const ToDoDeleteButton = screen.getByRole('button', {
      name: 'todo-delete-button',
    });
    ToDoDeleteButton.onclick = () => setState([]);
    screen.getByText('sanduish');

    ToDoDeleteButton.click();
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
