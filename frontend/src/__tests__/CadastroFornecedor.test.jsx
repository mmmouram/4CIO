import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CadastroFornecedor from '../page/CadastroFornecedor';
import fornecedorService from '../service/fornecedorService';

// Mock the fornecedorService module
jest.mock('../service/fornecedorService');


test('submits the CadastroFornecedor form and shows success message', async () => {
  // Setup the mock to resolve successfully
  fornecedorService.registrarFornecedor.mockResolvedValue({ id: 1 });

  render(<CadastroFornecedor />);
  
  // Fill in the inputs
  fireEvent.change(screen.getByLabelText(/Nome/i), { target: { value: 'Fornecedor Teste' } });
  fireEvent.change(screen.getByLabelText(/Documento/i), { target: { value: '123456789' } });
  fireEvent.change(screen.getByLabelText(/Tipo de Fornecedor/i), { target: { value: 'PessoaJuridica' } });
  
  // Submit the form
  fireEvent.click(screen.getByRole('button', { name: /Cadastrar/i }));
  
  // Wait for the success message
  await waitFor(() => {
    expect(screen.getByText(/Fornecedor cadastrado com sucesso!/i)).toBeInTheDocument();
  });
});
