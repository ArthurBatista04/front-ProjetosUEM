import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import chooseCadastro from "./Usuario/Perfil/chooseCadastro";
import CadastroDocente from "./Usuario/Perfil/CadastroDocente";
import CadastroDiscente from "./Usuario/Perfil/CadastroDiscente";
import Login from "./Login/Login";
import Manager from "./Admin/Controller/controller";
import userProfile from "./Usuario/userProfile";
import TrocaSenha from "./Usuario/Perfil/TrocaSenha";
import TrocaEmail from "./Usuario/Perfil/trocarEmail";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/cadastro" component={chooseCadastro}></Route>
      <Route exact path="/cadastro/Docente" component={CadastroDocente}></Route>
      <Route
        exact
        path="/cadastro/Discente"
        component={CadastroDiscente}
      ></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/perfil" component={userProfile}></Route>
      <Route exact path="/admin" component={Manager} />
      <Route exact path="/perfil/trocarSenha" component={TrocaSenha} />
      <Route exact path="/perfil/trocarEmail" component={TrocaEmail} />
    </Switch>
  </main>
);

export default Main;
