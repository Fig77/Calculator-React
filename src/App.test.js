import React from 'react';
import { render } from '@testing-library/react';
import App from './components/App';
import calc from './logic/calculate';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('call +/- and get negative', () => {
  expect(calc.calculator({0, -1, '+/-'}, '')).toBe(1);
};
