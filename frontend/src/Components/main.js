import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import CadastroProjeto from "./cadastroProjeto.js";
import AtualizarProjeto from "./atualizarProjeto.js";
import Projetos from "./projetos.js";
import ProjetoItem from "./projetoItem.js";
import LoginScreen from "./loginScreen.js";
import profile from "./profile.js/index.js.js";
import Axios from "axios";

export class main extends Component {
  state = {
    projetos: []
  };

  componentWillMount() {
    Axios.get("http://localhost:3001/api/Projetos/getProjetos").then(res => {
      this.setState((this.state.projetos = res.data.response));
    });
  }

  handleClickVisualize = id => {
    let url = "/Projetos/" + id;
    this.setState({ idVisualizar: id });
    window.location.href = url;
  };

  handleClickEdit = id => {
    let url = "/Projetos/edit/" + id;
    window.location.href = url;
  };

  handleClickDelete = id => {
    Axios.delete(`http://localhost:3001/api/Projetos/${id}/delete`)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
    window.location.href = "/";
  };

  handleEdit = editedProject => {
    Axios.put(
      "http://localhost:3001/api/Projetos/" + editedProject.id,
      editedProject
    );
  };

  handleSubmit = newProject => {
    if (newProject.dataInicio)
      newProject.dataInicio = Date(newProject.dataInicio);
    if (newProject.dataTermino)
      newProject.dataTermino = Date(newProject.dataTermino);
    else delete newProject["dataTermino"];

    Axios.post("http://localhost:3001/api/Projetos", newProject)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error.response);
      });
    window.location.href = "/";
  };

  handleSubmitLogin = login => {
    Axios.post("http://localhost:3001/api/User/Login", login);
  };

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={props => (
            <Projetos
              projetos={this.state.projetos}
              handleClickVisualize={this.handleClickVisualize}
              handleClickDelete={this.handleClickDelete}
            />
          )}
        />
        <Route
          exact
          path="/login"
          render={props => (
            <LoginScreen handleSubmitLogin={this.handleSubmitLogin} />
          )}
        />
        <Route exact path="/profile" component={profile} />
        <Route
          exact
          path="/Projetos/add"
          render={props => <CadastroProjeto handleSubmit={this.handleSubmit} />}
        />
        <Route
          exact
          path="/Projetos/edit/:id"
          render={props => <AtualizarProjeto handleEdit={this.handleEdit} />}
        />
        <Route
          exact
          path="/Projetos/:id"
          render={props => (
            <ProjetoItem handleClickEdit={this.handleClickEdit} />
          )}
        />
      </Switch>
    );
  }
}

export default main;
