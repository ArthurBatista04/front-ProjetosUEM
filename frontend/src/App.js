import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/navBar.js'
import CadastroProjeto from './Components/cadastroProjeto.js'
import AtualizarProjeto, { atualizarProjeto } from './Components/atualizarProjeto.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <AtualizarProjeto />
      </div>
    );
  }
}

export default App;
