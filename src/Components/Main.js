import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Cadastro from './Usuario/Perfil/Cadastro';
import Login from './Login/Login';
const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/cadastro" component={Cadastro}></Route>
      <Route exact path="/login" component={Login}></Route>
    </Switch>
  </main>
);

export default Main;
