import TodoListContainer from '@/app/components/containers/TodoListContainer';
import Button from '@/app/components/form/Button';
import Form from '@/app/components/form/Form';
import Input from '@/app/components/form/Input';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { TestTodo } from './app.test';

describe('form functionality', () => {
  let form: HTMLFormElement,
    button: HTMLButtonElement,
    titleInput: HTMLInputElement,
    taskInput: HTMLInputElement;

  beforeEach(() => {
    render(
      <Form onSubmit={() => {}} aria-label='task-form'>
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
    form = screen.getByRole('form', { name: 'task-form' });
    button = screen.getByRole('button', { name: 'task-button' });
    titleInput = screen.getByPlaceholderText('Title');
    taskInput = screen.getByPlaceholderText('Add a new happy task...');
  });

  it('should have a form with a input and a submit button', () => {
    expect(form).toHaveProperty('submit');
    expect(button.textContent).toBe('Add Task');
    expect(button).toHaveProperty('type', 'submit');
  });

  it('should submit the form and feed the app', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        newToDo: {
          id: 1,
          title: 'new task title',
          description: 'new task desc',
        },
      }),
    });
    const mockSubmit = jest.fn(async (e) => {
      e.preventDefault();
      const res = await fetch('');
      const json = await res.json();
      const { newToDo } = json;
      const ToDos = [newToDo];
      render(
        <>
          <TodoListContainer>
            {ToDos?.map((todo) => (
              <TestTodo key={todo.id} {...todo} />
            ))}
            {ToDos.length == 0 && (
              <p className='text-indigo-700 font-bold text-lg'>
                You haven&apos;t added any ToDo yet
              </p>
            )}
          </TodoListContainer>
        </>
      );
      expect(screen.queryByText("You haven't added any ToDo yet")).toBeFalsy();
      screen.getByText('new task title');
      screen.getByText('new task desc');
    });
    render(<Form aria-label='test-form' onSubmit={mockSubmit} />);
    fireEvent.submit(screen.getByRole('form', { name: 'test-form' }));
    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalled();
    });
  });
});
