import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fornecedorService from '../service/fornecedorService';
import './AtualizarFornecedor.css';

const AtualizarFornecedor = () => {
  const { id } = useParams();
  const [fornecedor, setFornecedor] = useState({
    nome: '',
    documento: '',
    tipoFornecedor: '',
    status: ''
  });
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    const buscarFornecedor = async () => {
      try {
        const dados = await fornecedorService.consultarFornecedorPorId(id);
        setFornecedor(dados);
      } catch (error) {
        console.error('Erro ao buscar fornecedor:', error);
      }
    };
    buscarFornecedor();
  }, [id]);

  const handleChange = (e) => {
    setFornecedor({
      ...fornecedor,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fornecedorService.atualizarFornecedor(id, fornecedor);
      setMensagem('Fornecedor atualizado com sucesso!');
    } catch (error) {
      setMensagem('Erro ao atualizar fornecedor.');
      console.error(error);
    }
  };

  return (
    <div className="container-atualizar">
      <h2>Atualizar Fornecedor</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input type="text" name="nome" value={fornecedor.nome} onChange={handleChange} required />
        </div>
        <div>
          <label>Documento:</label>
          <input type="text" name="documento" value={fornecedor.documento} onChange={handleChange} required />
        </div>
        <div>
          <label>Tipo de Fornecedor:</label>
          <select name="tipoFornecedor" value={fornecedor.tipoFornecedor} onChange={handleChange} required>
            <option value="">Selecione</option>
            <option value="PessoaFisica">Pessoa Física</option>
            <option value="PessoaJuridica">Pessoa Jurídica</option>
          </select>
        </div>
        <div>
          <label>Status:</label>
          <input type="text" name="status" value={fornecedor.status} onChange={handleChange} required />
        </div>
        <button type="submit">Atualizar</button>
      </form>
      {mensagem && <p className="mensagem">{mensagem}</p>}
    </div>
  );
};

export default AtualizarFornecedor;
