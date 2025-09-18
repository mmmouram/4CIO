import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Cabecalho from '../component/Cabecalho';


test('renders navigation links in Cabecalho', () => {
  render(
    <MemoryRouter>
      <Cabecalho />
    </MemoryRouter>
  );
  expect(screen.getByText(/Fornecedores/i)).toBeInTheDocument();
  expect(screen.getByText(/Cadastrar Fornecedor/i)).toBeInTheDocument();
});
