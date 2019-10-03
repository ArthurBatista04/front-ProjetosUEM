import React, { Component } from "react";
import UsuariosAtivos from "./usuariosAtivos.js";
import AcessosMensais from "./acessosMensais.js";

export class relatoriosAdminUsuarios extends Component {
  render() {
    return (
      <div className="container">
        <center>
          <AcessosMensais />
          <UsuariosAtivos />
        </center>
      </div>
    );
  }
}

export default relatoriosAdminUsuarios;
