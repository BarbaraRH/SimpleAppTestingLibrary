import { render, screen, fireEvent } from '@testing-library/react';
import App, {replaceCamelWithSpaces} from './App';

test('button is red and it turns blue when clicked', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'});
  expect(colorButton).toHaveStyle({backgroundColor: 'MediumVioletRed'});

  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({backgroundColor: 'MidnightBlue'});
  expect(colorButton.textContent).toBe('Change to Medium Violet Red');
  
});

test('initial condition', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'});
  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked()

})

test('checkbox functionality', () => {
  render(<App />);

  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});//name obedece al label relacionado por "htmlFor"
  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'});

  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);

  expect(checkbox).not.toBeChecked();
  expect(colorButton).toBeEnabled();

})

test('button gray when disabled', () => {
  render(<App />);

  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});//name obedece al label relacionado por "htmlFor"
  const colorButton = screen.getByRole('button', {name: 'Change to Midnight Blue'});

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor: 'gray'});
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor: 'MediumVioletRed'});

  fireEvent.click(colorButton);
  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor: 'gray'});

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle({backgroundColor: 'MidnightBlue'});

})

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });
  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');

  });
});