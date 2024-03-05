import MainPage from '@/app/components/pages/MainPage';
import { IToDo } from '@/types/ToDo';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Page', () => {
  it('checks if the title was rendered', () => {
    render(<MainPage ToDos={[]} />);
    const text = screen.getByText(
      "This is a To Do List App that I've made to pratice TDD"
    );
    expect(text).toBeInTheDocument();
  });

  it('should properly render the ToDos from the props', () => {
    const toDoList: IToDo[] = [
      { id: 1, title: 'ToDo 1', description: 'description from ToDo 1' },
      { id: 2, title: 'ToDo 2', description: 'description from ToDo 2' },
      { id: 3, title: 'ToDo 3', description: 'description from ToDo 3' },
    ];
    render(<MainPage ToDos={toDoList} />);
    toDoList.forEach((todo) => {
      const toDoDescription = screen.getByText(todo.description);
      expect(toDoDescription).toBeInTheDocument();
    });
  });

  it('should render the empty ToDo text', () => {
    render(<MainPage ToDos={[]} />);
    const noToDosYetText = screen.getByText("You haven't added any ToDo yet");
    expect(noToDosYetText).toBeInTheDocument();
  });
});
