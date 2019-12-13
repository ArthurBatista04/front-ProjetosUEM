import React, { Component, Fragment } from "react";
import Header from "../../../Header/Header";
import { Redirect } from "react-router-dom";
import { TextInput, Select } from "react-materialize";
import {
  handleChange,
  handleClick,
  handleSignUp
} from "../controller/CtrlCadastroDiscente";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

class Cadastro extends Component {
  state = {
    nome: "",
    email: "",
    ra: "",
    curso: "",
    turno: "",
    campus: "",
    serie: "",
    situacaoAcademica: "",
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
      else return <Redirect to="/" />;
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
                  <h3>Cadastro do Discente</h3>
                  <div className="row">
                    <Tooltip
                      title={
                        <span style={{ fontSize: "12px" }}>
                          Insira seu nome completo
                        </span>
                      }
                      TransitionComponent={Zoom}
                      enterDelay={500}
                    >
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
                    </Tooltip>

                    <Tooltip
                      title={
                        <span style={{ fontSize: "12px" }}>
                          Insira o número de seu Registro Acadêmico
                        </span>
                      }
                      TransitionComponent={Zoom}
                      enterDelay={500}
                    >
                      <TextInput
                        s={12}
                        label="RA"
                        name="ra"
                        value={this.state.ra}
                        required
                        onChange={e => {
                          handleChange(this, e);
                        }}
                      />
                    </Tooltip>

                    <Tooltip
                      title={
                        <span style={{ fontSize: "12px" }}>
                          Por exemplo: Ciência da Computação, Informática
                        </span>
                      }
                      TransitionComponent={Zoom}
                      enterDelay={500}
                    >
                      <TextInput
                        s={12}
                        label="Curso"
                        name="curso"
                        value={this.state.curso}
                        required
                        onChange={e => {
                          handleChange(this, e);
                        }}
                      />
                    </Tooltip>

                    <Tooltip
                      title={
                        <span style={{ fontSize: "12px" }}>
                          Insira APENAS O NÚMERO da série que está matriculado
                        </span>
                      }
                      TransitionComponent={Zoom}
                      enterDelay={500}
                    >
                      <TextInput
                        s={12}
                        label="Série"
                        name="serie"
                        value={this.state.serie}
                        onChange={e => {
                          handleChange(this, e);
                        }}
                      />
                    </Tooltip>
                    <Tooltip
                      title={
                        <span style={{ fontSize: "12px" }}>
                          Selecione o turno do seu curso
                        </span>
                      }
                      TransitionComponent={Zoom}
                      enterDelay={500}
                    >
                      <Select
                        s={12}
                        value={this.state.value}
                        name="turno"
                        onChange={e => handleChange(this, e)}
                      >
                        <option name="Turno" value="0" defaultValue>
                          Turno
                        </option>
                        <option name="Integral" value="Integral">
                          Integral
                        </option>
                        <option name="Matutino" value="Matutino">
                          Matutino
                        </option>
                        <option name="Vespertino" value="Vespertino">
                          Vespertino
                        </option>
                        <option name="Noturno" value="Noturno">
                          Noturno
                        </option>
                      </Select>
                    </Tooltip>

                    <Tooltip
                      title={
                        <span style={{ fontSize: "12px" }}>
                          Insira o local do seu campus
                        </span>
                      }
                      TransitionComponent={Zoom}
                      enterDelay={500}
                    >
                      <TextInput
                        s={12}
                        label="Campus"
                        name="campus"
                        value={this.state.campus}
                        required
                        onChange={e => {
                          handleChange(this, e);
                        }}
                      />
                    </Tooltip>

                    <Tooltip
                      title={
                        <span style={{ fontSize: "12px" }}>
                          Selecione sua situação acadêmica (Igual à do SISAV)
                        </span>
                      }
                      TransitionComponent={Zoom}
                      enterDelay={500}
                    >
                      <Select
                        s={12}
                        value={this.state.value}
                        name="situacaoAcademica"
                        onChange={e => handleChange(this, e)}
                      >
                        <option
                          name="Situação Acadêmica"
                          value="0"
                          defaultValue
                        >
                          Situação Acadêmica
                        </option>
                        <option name="Matriculado" value="Matriculado">
                          Matriculado
                        </option>
                        <option name="Trancado" value="Trancado">
                          Trancado
                        </option>
                        <option name="Desistente" value="Desistente">
                          Desistente
                        </option>
                      </Select>
                    </Tooltip>

                    <Tooltip
                      title={
                        <span style={{ fontSize: "12px" }}>
                          Insira seu email, de preferência, institucional
                        </span>
                      }
                      TransitionComponent={Zoom}
                      enterDelay={500}
                    >
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
                    </Tooltip>

                    <Tooltip
                      title={
                        <span style={{ fontSize: "12px" }}>
                          Insira um nome de usuário para sua conta.
                        </span>
                      }
                      TransitionComponent={Zoom}
                      enterDelay={500}
                    >
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
                    </Tooltip>

                    <Tooltip
                      title={
                        <span style={{ fontSize: "12px" }}>
                          Insira uma senha de no mínimo 4 dígitos
                        </span>
                      }
                      TransitionComponent={Zoom}
                      enterDelay={500}
                    >
                      <TextInput
                        s={12}
                        password
                        value={this.state.password}
                        name="password"
                        required
                        label="Senha"
                        onChange={e => {
                          handleChange(this, e);
                        }}
                      />
                    </Tooltip>

                    <Tooltip
                      title={
                        <span style={{ fontSize: "12px" }}>
                          Insira a mesma senha inserida acima
                        </span>
                      }
                      TransitionComponent={Zoom}
                      enterDelay={500}
                    >
                      <TextInput
                        s={12}
                        password
                        value={this.state.confirmPassword}
                        name="confirmPassword"
                        required
                        label="Confirme senha"
                        onChange={e => {
                          handleChange(this, e);
                        }}
                      />
                    </Tooltip>
                  </div>
                </div>
                <br />
                <div>
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
