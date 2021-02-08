import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('button is red and it turns blue when clicked', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', {name: 'Change to blue'});
  expect(colorButton).toHaveStyle({backgroundColor: 'red'});

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({backgroundColor: 'blue'});
  expect(colorButton.textContent).toBe('Change to red');
  
});

test('initial condition', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', {name: 'Change to blue'});
  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked()

})

test('checkbox functionality', () => {
  render(<App />);

  const checkbox = screen.getByRole('checkbox');
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});

  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);

  expect(checkbox).not.toBeChecked();
  expect(colorButton).toBeEnabled();

})
