import Todo from '@/app/components/Todo';
import Form from '@/app/components/form/Form';
import TaskForm from '@/app/components/form/TaskForm';
import MainPage from '@/app/components/pages/MainPage';
import { IToDo } from '@/types/ToDo';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

describe('form functionality', () => {
  let form: HTMLFormElement,
    button: HTMLButtonElement,
    titleInput: HTMLInputElement,
    taskInput: HTMLInputElement;

  beforeEach(() => {
    render(<TaskForm />);
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
      render(<MainPage ToDos={[newToDo]} />);
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
