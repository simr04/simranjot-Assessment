import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Simran on the page', () => {
  render(<App />);
  const nameEl = screen.getByText(/Simran/i);
  expect(nameEl).toBeInTheDocument();
});

