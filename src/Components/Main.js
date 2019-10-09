import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import Cadastro from './Usuario/Perfil/Cadastro';
import Login from './Login/Login';
import Manager from './Admin/Controller/controller';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/cadastro" component={Cadastro}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/admin" component={Manager} />
    </Switch>
  </main>
);

export default Main;
