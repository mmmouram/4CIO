import fornecedorService from '../service/fornecedorService';

// We will use a global fetch mock

describe('fornecedorService', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('registrarFornecedor calls fetch with correct parameters', async () => {
    const fakeResponse = { id: 1 };
    global.fetch.mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(fakeResponse)
    });

    const fornecedor = { nome: 'Teste', documento: '123', tipoFornecedor: 'PessoaJuridica', status: 'PendenteValidação' };
    const response = await fornecedorService.registrarFornecedor(fornecedor);

    expect(global.fetch).toHaveBeenCalledWith('http://localhost:5000/api/Fornecedor', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(fornecedor)
    });
    expect(response).toEqual(fakeResponse);
  });

  test('validarFornecedor calls fetch with correct URL', async () => {
    const fakeResponse = {};
    global.fetch.mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(fakeResponse)
    });

    await fornecedorService.validarFornecedor(1);
    expect(global.fetch).toHaveBeenCalledWith('http://localhost:5000/api/Fornecedor/1/validar', { method: 'POST' });
  });

  test('consultarFornecedorPorId calls fetch with correct URL', async () => {
    const fakeResponse = { id: 1 };
    global.fetch.mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(fakeResponse)
    });
    
    const response = await fornecedorService.consultarFornecedorPorId(1);
    expect(global.fetch).toHaveBeenCalledWith('http://localhost:5000/api/Fornecedor/1');
    expect(response).toEqual(fakeResponse);
  });

  test('consultarFornecedores calls fetch with filtro when provided', async () => {
    const fakeResponse = [{ id: 1 }];
    global.fetch.mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(fakeResponse)
    });
    
    const response = await fornecedorService.consultarFornecedores('Teste');
    expect(global.fetch).toHaveBeenCalledWith('http://localhost:5000/api/Fornecedor?filtro=Teste');
    expect(response).toEqual(fakeResponse);
  });

  test('atualizarFornecedor calls fetch with correct URL and parameters', async () => {
    const fakeResponse = {};
    global.fetch.mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(fakeResponse)
    });

    const fornecedor = { nome: 'Teste' };
    const response = await fornecedorService.atualizarFornecedor(1, fornecedor);
    expect(global.fetch).toHaveBeenCalledWith('http://localhost:5000/api/Fornecedor/1', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(fornecedor)
    });
    expect(response).toEqual(fakeResponse);
  });
});
