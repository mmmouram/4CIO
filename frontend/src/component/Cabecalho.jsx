import React from 'react';
import { Link } from 'react-router-dom';
import './Cabecalho.css';

const Cabecalho = () => {
  return (
    <header className="cabecalho">
      <nav className="navegacao">
        <Link to="/">Fornecedores</Link>
        <Link to="/cadastrar">Cadastrar Fornecedor</Link>
      </nav>
    </header>
  );
};

export default Cabecalho;
