import MainPage from '@/app/components/pages/MainPage';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Page', () => {
  it('checks if title "This is a To Do List App that I&apos;ve made to pratice TDD" is rendered', () => {
    render(<MainPage />);
    const text = screen.getByText(
      "This is a To Do List App that I've made to pratice TDD"
    );
    expect(text).toBeInTheDocument();
  });
});
