import React, { Component, Fragment } from "react";
import Header from "../../Header/Header";
import { Redirect } from "react-router-dom";
import { TextInput, DatePicker } from "react-materialize";
import {
  handleChange,
  handleClick,
  handleSignUp
} from "./controller/CtrlCadastroDocente";

class Cadastro extends Component {
  state = {
    nome: "",
    email: "",
    matricula: "",
    cargo: "",
    lotacao: "",
    situacao: "",
    vencimentoContrato: "",
    username: "",
    password: "",
    confirmPassword: "",
    redirect: false,
    type: this.props.type,
    to: ""
  };

  render() {
    if (this.state.redirect) {
      if (this.state.to === "Cadastro") return <Redirect to="/cadastro" />;
      return <Redirect to="/" />;
    }
    return (
      <Fragment>
        <Header />
        <div className="section" />
        <center>
          <div className="container">
            <div
              className="z-depth-1 grey lighten-4 row"
              style={{
                display: "inlineBlock",
                padding: 32 + "px" + 48 + "px" + 0 + "px" + 48 + "px",
                border: 1 + "px solid  #EEE"
              }}
            >
              <form className="col s12" onSubmit={e => handleSignUp(this, e)}>
                <div className="container">
                  <div className="row">
                    <TextInput
                      s={12}
                      label="Nome completo"
                      type="text"
                      name="nome"
                      value={this.state.nome}
                      required
                      onChange={e => {
                        handleChange(this, e);
                      }}
                    />

                    <TextInput
                      s={12}
                      label="Matrícula"
                      name="matricula"
                      value={this.state.matricula}
                      required
                      onChange={e => {
                        handleChange(this, e);
                      }}
                    />

                    <TextInput
                      s={12}
                      label="Cargo"
                      name="cargo"
                      value={this.state.cargo}
                      required
                      onChange={e => {
                        handleChange(this, e);
                      }}
                    />

                    <TextInput
                      s={12}
                      label="Lotação"
                      name="lotacao"
                      value={this.state.lotacao}
                      required
                      onChange={e => {
                        handleChange(this, e);
                      }}
                    />

                    <TextInput
                      s={12}
                      label="Situação"
                      name="situacao"
                      value={this.state.situacao}
                      required
                      onChange={e => {
                        handleChange(this, e);
                      }}
                    />

                    <DatePicker
                      s={12}
                      label="Vencimento do Contrato"
                      name="vencimentoContrato"
                      value={this.state.vencimentoContrato}
                      onChange={e => {
                        handleChange(this, e);
                      }}
                    />

                    <TextInput
                      s={12}
                      email
                      validate
                      label="Email"
                      name="email"
                      required
                      value={this.state.email}
                      onChange={e => {
                        handleChange(this, e);
                      }}
                    />

                    <TextInput
                      s={12}
                      label="Nome de usuário"
                      type="text"
                      name="username"
                      required
                      value={this.state.username}
                      onChange={e => {
                        handleChange(this, e);
                      }}
                    />

                    <TextInput
                      s={12}
                      password
                      value={this.state.password}
                      name="password"
                      required
                      label="Senha"
                      onChange={e => handleChange(this, e)}
                    />
                    <TextInput
                      s={12}
                      password
                      value={this.state.confirmPassword}
                      name="confirmPassword"
                      required
                      label="Confirme senha"
                      onChange={e => handleChange(this, e)}
                    />
                  </div>
                </div>
                <br />
                <div className="row" style={{ display: "flex" }}>
                  <button
                    type="button"
                    name="btn_voltar"
                    className="col s4 btn btn-large waves-effect black"
                    style={{ float: "none", marginLeft: "auto" }}
                    onClick={e => handleClick(this, e)}
                  >
                    Voltar
                  </button>

                  <button
                    type="submit"
                    name="btn_signup"
                    className="col s4 btn btn-large waves-effect black"
                    style={{ float: "none", marginRight: "auto" }}
                  >
                    Cadastrar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </center>
        <div className="section" />
      </Fragment>
    );
  }
}

export default Cadastro;
