import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import fornecedorService from '../service/fornecedorService';
import './ValidarFornecedor.css';

const ValidarFornecedor = () => {
  const { id } = useParams();
  const [mensagem, setMensagem] = useState('');

  const handleValidar = async () => {
    try {
      await fornecedorService.validarFornecedor(id);
      setMensagem('Fornecedor validado com sucesso!');
    } catch (error) {
      setMensagem('Erro ao validar fornecedor.');
      console.error(error);
    }
  };

  return (
    <div className="container-validar">
      <h2>Validação de Fornecedor</h2>
      <button onClick={handleValidar}>Validar Fornecedor</button>
      {mensagem && <p className="mensagem">{mensagem}</p>}
    </div>
  );
};

export default ValidarFornecedor;
