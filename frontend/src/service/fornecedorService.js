const API_URL = 'http://localhost:5000/api/Fornecedor';

const registrarFornecedor = async (fornecedor) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(fornecedor)
  });
  if (!response.ok) {
    throw new Error('Erro ao registrar fornecedor');
  }
  return await response.json();
};

const validarFornecedor = async (id) => {
  const response = await fetch(`${API_URL}/${id}/validar`, {
    method: 'POST'
  });
  if (!response.ok) {
    throw new Error('Erro ao validar fornecedor');
  }
  return await response.json();
};

const consultarFornecedorPorId = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  if (!response.ok) {
    throw new Error('Fornecedor não encontrado');
  }
  return await response.json();
};

const consultarFornecedores = async (filtro) => {
  let url = API_URL;
  if (filtro) {
    url += `?filtro=${encodeURIComponent(filtro)}`;
  }
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Erro ao consultar fornecedores');
  }
  return await response.json();
};

const atualizarFornecedor = async (id, fornecedor) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(fornecedor)
  });
  if (!response.ok) {
    throw new Error('Erro ao atualizar fornecedor');
  }
  return await response.json();
};

const fornecedorService = {
  registrarFornecedor,
  validarFornecedor,
  consultarFornecedorPorId,
  consultarFornecedores,
  atualizarFornecedor
};

export default fornecedorService;
