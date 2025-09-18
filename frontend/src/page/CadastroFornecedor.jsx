import React, { useState } from 'react';
import fornecedorService from '../service/fornecedorService';
import './CadastroFornecedor.css';

const CadastroFornecedor = () => {
  const [fornecedor, setFornecedor] = useState({
    nome: '',
    documento: '',
    tipoFornecedor: '',
    status: 'PendenteValidação'
  });
  const [mensagem, setMensagem] = useState('');

  const handleChange = (e) => {
    setFornecedor({
      ...fornecedor,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fornecedorService.registrarFornecedor(fornecedor);
      setMensagem('Fornecedor cadastrado com sucesso!');
      setFornecedor({
        nome: '',
        documento: '',
        tipoFornecedor: '',
        status: 'PendenteValidação'
      });
    } catch (error) {
      setMensagem('Erro ao cadastrar fornecedor.');
      console.error(error);
    }
  };

  return (
    <div className="container-cadastro">
      <h2>Cadastro de Fornecedor</h2>
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
        <button type="submit">Cadastrar</button>
      </form>
      {mensagem && <p className="mensagem">{mensagem}</p>}
    </div>
  );
};

export default CadastroFornecedor;
