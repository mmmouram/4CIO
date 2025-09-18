import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ListarFornecedores from '../page/ListarFornecedores';
import fornecedorService from '../service/fornecedorService';

// Mock the fornecedorService module
jest.mock('../service/fornecedorService');


test('renders a list of suppliers', async () => {
  const fornecedoresMock = [
    { id: 1, nome: 'Fornecedor 1', documento: '123', tipoFornecedor: 'PessoaJuridica', status: 'Ativo' }
  ];
  fornecedorService.consultarFornecedores.mockResolvedValue(fornecedoresMock);

  render(
    <MemoryRouter>
      <ListarFornecedores />
    </MemoryRouter>
  );

  // Wait until the supplier name is rendered
  await waitFor(() => {
    expect(screen.getByText(/Fornecedor 1/i)).toBeInTheDocument();
  });
});
