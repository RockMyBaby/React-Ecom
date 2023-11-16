import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Happy Diwali', () => {
  render(<App />);
  const linkElement = screen.getByText(/Happy Diwali/i);
  expect(linkElement).toBeInTheDocument();
});
