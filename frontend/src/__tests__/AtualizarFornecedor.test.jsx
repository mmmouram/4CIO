import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import AtualizarFornecedor from '../page/AtualizarFornecedor';
import fornecedorService from '../service/fornecedorService';

// Mock the fornecedorService module
jest.mock('../service/fornecedorService');


test('updates supplier data and shows success message', async () => {
  const fornecedorMock = {
    nome: 'Fornecedor 1',
    documento: '123',
    tipoFornecedor: 'PessoaJuridica',
    status: 'Ativo'
  };
  fornecedorService.consultarFornecedorPorId.mockResolvedValue(fornecedorMock);
  fornecedorService.atualizarFornecedor.mockResolvedValue({});

  render(
    <MemoryRouter initialEntries={[ '/atualizar/1' ]}>
      <Routes>
        <Route path="/atualizar/:id" element={<AtualizarFornecedor />} />
      </Routes>
    </MemoryRouter>
  );

  // Wait for the initial data to be loaded
  await waitFor(() => {
    expect(screen.getByDisplayValue('Fornecedor 1')).toBeInTheDocument();
  });

  // Update the nome field
  fireEvent.change(screen.getByLabelText(/Nome/i), { target: { value: 'Fornecedor Atualizado' } });
  
  // Submit the update
  fireEvent.click(screen.getByRole('button', { name: /Atualizar/i }));
  
  await waitFor(() => {
    expect(screen.getByText(/Fornecedor atualizado com sucesso!/i)).toBeInTheDocument();
  });
});
