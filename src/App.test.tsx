import React from 'react';
import { render, screen } from '@testing-library/react';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';


test('renders toolbar title', () => {
  render(<Router><App /></Router>);
  const linkElement = screen.getByText(/MyNote/i);
  expect(linkElement).toBeInTheDocument();
});
