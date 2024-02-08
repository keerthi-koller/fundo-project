import React from 'react';
import { render, screen } from '@testing-library/react';
import HomeComponent from './src/components/HomeComponent';

test('renders learn react link11', () => {
    render(<HomeComponent />);
    const linkElement = screen.getByText(/App/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders learn react link21', () => {
    render(<HomeComponent />);
    const linkElement = screen.getByText(/App/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders learn react link31', () => {
    render(<HomeComponent />);
    const linkElement = screen.getByText(/App/i);
    expect(linkElement).toBeInTheDocument();
});
