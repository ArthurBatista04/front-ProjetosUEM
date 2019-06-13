import React, { Component } from "react";
import { Link } from "react-router-dom";

export class signup extends Component {
  state = {
    nome: "Caio Kikuti",
    historico: "",
    curiculo: "",
    resposta: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.handleInscricao(this.state);
  };

  handleSelection = (nome, val) => {
    this.setState({ [nome]: val });
  };

  render() {
    return (
      <div className="container">
        <h1 style={{ textAlign: "center" }}>Inscrição</h1>
        <form onSubmit={e => this.onSubmit(e)}>
          <div className="form-group">
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  Nome
                </span>
              </div>
              <input
                name="Nome"
                value={this.state.nome}
                onChange={e => this.handleChange(e)}
                type="text"
                className="form-control"
                disabled="true"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>

            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">Histórico escolar</span>
              </div>
              <div class="custom-file">
                <input
                  type="file"
                  class="custom-file-input"
                  id="inputGroupFile01"
                  onChange={e => this.handleChange(e)}
                />
                <label class="custom-file-label" for="inputGroupFile01">
                  Choose file
                </label>
              </div>
            </div>

            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">Curículo</span>
              </div>
              <div class="custom-file">
                <input
                  type="file"
                  class="custom-file-input"
                  id="inputGroupFile01"
                  onChange={e => this.handleChange(e)}
                />
                <label class="custom-file-label" for="inputGroupFile01">
                  Choose file
                </label>
              </div>
            </div>

            <div className="input-group" style={{ paddingBottom: "20px" }}>
              <div className="input-group-prepend">
                <span className="input-group-text">Pré-requisitos</span>
              </div>
              <textarea
                name="resposta"
                value={this.state.resposta}
                onChange={e => this.handleChange(e)}
                className="form-control"
                aria-label="With textarea"
              />
            </div>
          </div>
          <button
            type="submit"
            value="Submit"
            className="btn btn-dark"
            style={{ float: "right" }}
          >
            {" "}
            Enviar inscrição{" "}
          </button>
        </form>
        <Link type="submit" className="btn btn-danger" to="/Projetos/search">
          Cancelar
        </Link>
      </div>
    );
  }
}

export default signup;
