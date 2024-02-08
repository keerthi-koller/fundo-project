import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import HeaderComponent from './components/HeaderComponent';
import HomeComponent from './components/HomeComponent';

test('renders learn react link1', () => {
  render(<HomeComponent />);
  const linkElement = screen.getByText(/App/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link2', () => {
  render(<HomeComponent />);
  const linkElement = screen.getByText(/App/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders learn react link3', () => {
  render(<HomeComponent />);
  const linkElement = screen.getByText(/App/i);
  expect(linkElement).toBeInTheDocument();
});
