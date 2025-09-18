import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ValidarFornecedor from '../page/ValidarFornecedor';
import fornecedorService from '../service/fornecedorService';

// Mock the fornecedorService module
jest.mock('../service/fornecedorService');


test('validates a supplier and shows confirmation message', async () => {
  // Setup the mock to resolve successfully
  fornecedorService.validarFornecedor.mockResolvedValue({});

  render(
    <MemoryRouter initialEntries={[ '/validar/1' ]}>
      <Routes>
        <Route path="/validar/:id" element={<ValidarFornecedor />} />
      </Routes>
    </MemoryRouter>
  );

  // Click the validate button
  fireEvent.click(screen.getByRole('button', { name: /Validar Fornecedor/i }));
  
  await waitFor(() => {
    expect(screen.getByText(/Fornecedor validado com sucesso!/i)).toBeInTheDocument();
  });
});
