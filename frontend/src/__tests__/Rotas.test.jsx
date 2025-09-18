import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Rotas from '../route/Rotas';


test('renders ListarFornecedores on default route', () => {
  render(
    <MemoryRouter initialEntries={[ '/' ]}>
      <Rotas />
    </MemoryRouter>
  );
  // The ListarFornecedores page has a heading 'Lista de Fornecedores'
  expect(screen.getByText(/Lista de Fornecedores/i)).toBeInTheDocument();
});
