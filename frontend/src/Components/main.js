import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CadastroProjeto from './cadastroProjeto.js'
import AtualizarProjeto from './atualizarProjeto.js'
import Projetos from './projetos.js'
import ProjetoItem from './projetoItem.js'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Projetos} />
      <Route exact path='/projeto/add' component={CadastroProjeto} />
      <Route exact path='/projeto/edit/:id' component={AtualizarProjeto} />
      <Route exact path='/projeto/:id' component={ProjetoItem} />
    </Switch>
  </main>
)

export default Main;