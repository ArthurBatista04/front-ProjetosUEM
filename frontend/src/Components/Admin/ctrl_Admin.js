import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./dashboard.js";
import GenrenciarDadosAdmin from "./gerenciarDadosAdmin.js";
import Swal from "sweetalert2";
import NavBarAdmin from "./navBarAdmin.js";
import RelatoriosAdminUsuarios from "./relatoriosAdminUsuarios.js";
import RelatoriosAdminProjetos from "./relatoriosAdminProjetos.js";

export class ctrl_Admin extends Component {
  handleClickAreas = () => {
    Swal.fire({
      title: "Selecione uma operação",
      input: "select",
      inputOptions: {
        A: "Adicionar área",
        D: "Deletar área"
      },
      inputPlaceholder: "Opção",
      showCancelButton: true,
      inputValidator: value => {
        return new Promise(resolve => {
          if (value === "A") {
            Swal.fire({
              title: "Digite o nome da nova área",
              input: "text",
              // inputValue: inputValue,
              showCancelButton: true,
              inputValidator: value => {
                if (!value) {
                  return "Você precisa escrever algo!";
                } else {
                  return new Promise(() => {
                    Swal.fire({
                      type: "success",
                      title: "Área adicionada com sucesso!"
                    });
                  });
                }
              }
            });
          } else if (value === "D") {
            Swal.fire({
              title: "Seleciona uma área para excluir",
              input: "select",
              inputOptions: {
                C: "Ciências biológicas",
                D: "Ciências exatas",
                A: "Ciências humanas"
              },
              inputPlaceholder: "Selecione",
              showCancelButton: true,
              inputValidator: () => {
                return new Promise(() => {
                  Swal.fire({
                    type: "success",
                    title: "Área deletada com sucesso!"
                  });
                });
              }
            });
          }
        });
      }
    });
  };

  handleClickSubAreas = () => {
    Swal.fire({
      title: "Selecione uma operação",
      input: "select",
      inputOptions: {
        A: "Adicionar Sub-área",
        D: "Deletar Sub-área"
      },
      inputPlaceholder: "Opção",
      showCancelButton: true,
      inputValidator: value => {
        return new Promise(resolve => {
          if (value === "A") {
            Swal.fire({
              title: "Digite o nome da nova sub-área",
              input: "text",
              // inputValue: inputValue,
              showCancelButton: true,
              inputValidator: value => {
                if (!value) {
                  return "Você precisa escrever algo!";
                } else {
                  return new Promise(() => {
                    Swal.fire({
                      type: "success",
                      title: "Sub-área adicionada com sucesso!"
                    });
                  });
                }
              }
            });
          } else if (value === "D") {
            Swal.fire({
              title: "Seleciona uma sub-área para excluir",
              input: "select",
              inputOptions: {
                C: "Teoria dos Números",
                D: "Banco de Dados",
                A: "Astronomia Dinâmica"
              },
              inputPlaceholder: "Selecione",
              showCancelButton: true,
              inputValidator: () => {
                return new Promise(() => {
                  Swal.fire({
                    type: "success",
                    title: "Sub-área deletada com sucesso!"
                  });
                });
              }
            });
          }
        });
      }
    });
  };
  handleClickTipos = () => {
    Swal.fire({
      title: "Selecione uma operação",
      input: "select",
      inputOptions: {
        A: "Adicionar tipo de projeto",
        D: "Deletar tipo de projeto"
      },
      inputPlaceholder: "Opção",
      showCancelButton: true,
      inputValidator: value => {
        return new Promise(resolve => {
          if (value === "A") {
            Swal.fire({
              title: "Digite um novo tipo",
              input: "text",
              // inputValue: 'Ex: PIBIC',
              showCancelButton: true,
              inputValidator: value => {
                if (!value) {
                  return "Você precisa escrever algo!";
                } else {
                  return new Promise(() => {
                    Swal.fire({
                      type: "success",
                      title: "Tipo adicionado com sucesso!"
                    });
                  });
                }
              }
            });
          } else if (value === "D") {
            Swal.fire({
              title: "Seleciona um tipo para excluir",
              input: "select",
              inputOptions: {
                C: "PIC",
                D: "PIBIC",
                A: "PIBITI"
              },
              inputPlaceholder: "Selecione",
              showCancelButton: true,
              inputValidator: () => {
                return new Promise(() => {
                  Swal.fire({
                    type: "success",
                    title: "Tipo deletado com sucesso!"
                  });
                });
              }
            });
          }
        });
      }
    });
  };

  navbar = component => props => (
    <React.Fragment>
      <NavBarAdmin logout={this.props.logout} />
      {component}
    </React.Fragment>
  );

  render() {
    return (
      <Switch>
        <Route
          exact
          path="/admin/dashboard/relatorios/usuarios"
          render={this.navbar(<RelatoriosAdminUsuarios />)}
        />
        <Route
          exact
          path="/admin/dashboard/relatorios/projetos"
          render={this.navbar(<RelatoriosAdminProjetos />)}
        />
        <Route
          exact
          path="/admin/gerenciarDados"
          render={this.navbar(
            <GenrenciarDadosAdmin
              handleClickAreas={this.handleClickAreas}
              handleClickSubAreas={this.handleClickSubAreas}
              handleClickTipos={this.handleClickTipos}
            />
          )}
        />
        <Redirect to="/admin/dashboard/relatorios/usuarios" />
      </Switch>
    );
  }
}

export default ctrl_Admin;
