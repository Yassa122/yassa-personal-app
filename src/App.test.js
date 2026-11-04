import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app without crashing', () => {
  render(<App />);
  // Check for a key element that should be present
  const nameElement = screen.getByRole('heading', { name: 'Yassa Ashraf' });
  expect(nameElement).toBeInTheDocument();
});
