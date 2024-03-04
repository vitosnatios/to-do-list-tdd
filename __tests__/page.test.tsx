import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Page from '../app/page';

describe('Page', () => {
  it('checks if title "This is a To Do List App that I&apos;ve made to pratice TDD" is rendered', () => {
    render(<Page />);
    const text = screen.getByText(
      "This is a To Do List App that I've made to pratice TDD"
    );
    expect(text).toBeInTheDocument();
  });
});
