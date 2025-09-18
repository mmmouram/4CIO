import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Rotas from './route/Rotas';
import Cabecalho from './component/Cabecalho';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Rotas />
    </BrowserRouter>
  );
};

export default App;
