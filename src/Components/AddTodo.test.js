import { render, screen } from '@testing-library/react';
import AddTodoList from './AddTodo';

describe("Render AddTodo",()=>{
  test('renders AddTodo Button', () => {
  render(<AddTodoList />);
  const linkElement = screen.getByRole('button')
  expect(linkElement).toBeInTheDocument();
});

test('renders AddTodo Input', () => {
  render(<AddTodoList />);
  const linkElement = screen.getByRole('textbox')
  expect(linkElement).toBeInTheDocument();
});
})
