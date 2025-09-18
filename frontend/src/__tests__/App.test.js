import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';


test('renders Cabecalho with navigation links', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  // Checking for the navigation links from Cabecalho
  expect(screen.getByText(/Fornecedores/i)).toBeInTheDocument();
  expect(screen.getByText(/Cadastrar Fornecedor/i)).toBeInTheDocument();
});
