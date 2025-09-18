import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ListarFornecedores from '../page/ListarFornecedores';
import CadastroFornecedor from '../page/CadastroFornecedor';
import ValidarFornecedor from '../page/ValidarFornecedor';
import AtualizarFornecedor from '../page/AtualizarFornecedor';

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<ListarFornecedores />} />
      <Route path="/cadastrar" element={<CadastroFornecedor />} />
      <Route path="/validar/:id" element={<ValidarFornecedor />} />
      <Route path="/atualizar/:id" element={<AtualizarFornecedor />} />
    </Routes>
  );
};

export default Rotas;
