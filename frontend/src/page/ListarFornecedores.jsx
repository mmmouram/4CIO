import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fornecedorService from '../service/fornecedorService';
import './ListarFornecedores.css';

const ListarFornecedores = () => {
  const [fornecedores, setFornecedores] = useState([]);
  const [filtro, setFiltro] = useState('');

  useEffect(() => {
    consultarFornecedores();
  }, []);

  const consultarFornecedores = async () => {
    try {
      const resposta = await fornecedorService.consultarFornecedores(filtro);
      setFornecedores(resposta);
    } catch (error) {
      console.error('Erro ao consultar fornecedores:', error);
    }
  };

  const handleFiltroChange = (e) => {
    setFiltro(e.target.value);
  };

  const handlePesquisar = async () => {
    await consultarFornecedores();
  };

  return (
    <div className="container-listar">
      <h2>Lista de Fornecedores</h2>
      <div className="filtro">
        <input
          type="text"
          placeholder="Digite para filtrar..."
          value={filtro}
          onChange={handleFiltroChange}
        />
        <button onClick={handlePesquisar}>Pesquisar</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Documento</th>
            <th>Tipo</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {fornecedores.map((fornecedor) => (
            <tr key={fornecedor.id}>
              <td>{fornecedor.id}</td>
              <td>{fornecedor.nome}</td>
              <td>{fornecedor.documento}</td>
              <td>{fornecedor.tipoFornecedor}</td>
              <td>{fornecedor.status}</td>
              <td>
                <Link to={`/atualizar/${fornecedor.id}`}>Editar</Link> |{' '}
                <Link to={`/validar/${fornecedor.id}`}>Validar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListarFornecedores;
