import React, { Component, Fragment } from "react";
import Header from "../../Header/Header";
import { Redirect } from "react-router-dom";
import { TextInput } from "react-materialize";
import axios from "axios";
import Swal from "sweetalert2";
import PathName from "../../pathConst.js";

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
    type: this.props.type
  };

  handleChange = (e, mask) => {
    if (typeof mask === "function")
      this.setState({ [e.target.name]: mask(e.target.value) });
    else this.setState({ [e.target.name]: e.target.value });
  };

  handleSignUp = e => {
    e.preventDefault();
    if (this.state.password !== this.state.confirmPassword) {
      this.setState({ confirmPassword: "" });
      return Swal.fire({
        type: "error",
        title: "Senha confirmada incorretamente",
        text: "Tente novamente"
      });
    } else if (this.state.password.length < 4) {
      this.setState({ confirmPassword: "" });
      return Swal.fire({
        type: "error",
        title: "Senha deve ter pelo menos 4 caracteres",
        text: "Tente novamente"
      });
    }

    const {
      nome,
      email,
      matricula,
      cargo,
      lotacao,
      situacao,
      vencimentoContrato,
      username,
      password
    } = this.state;
    const newUser = {
      nome: nome.toUpperCase(),
      email,
      matricula,
      cargo,
      lotacao,
      situacao,
      vencimentoContrato,
      password,
      username: username.toLowerCase(),
      realm: "Docente"
    };
    axios
      .post(`${PathName}/api/Docentes`, newUser)
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          Swal.fire({
            type: "success",
            title: "Cadastro realizado com sucesso",
            text: "Veja seu email para confirmar sua conta",
            showConfirmButton: true
          }).then(() => {
            this.setState({ redirect: true });
          });
        }
      })
      .catch(err => {
        return Swal.fire({
          type: "error",
          title: "Ops! algo deu errado",
          text: err.response.data.error.message
        });
      });
  };
  render() {
    if (this.state.redirect) {
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
              <form className="col s12" onSubmit={e => this.handleSignUp(e)}>
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
                        this.handleChange(e);
                      }}
                    />

                    <TextInput
                      s={12}
                      label="Matrícula"
                      name="matricula"
                      value={this.state.matricula}
                      required
                      onChange={e => {
                        this.handleChange(e);
                      }}
                    />

                    <TextInput
                      s={12}
                      label="Cargo"
                      name="cargo"
                      value={this.state.cargo}
                      required
                      onChange={e => {
                        this.handleChange(e);
                      }}
                    />

                    <TextInput
                      s={12}
                      label="Lotação"
                      name="lotacao"
                      value={this.state.lotacao}
                      required
                      onChange={e => {
                        this.handleChange(e);
                      }}
                    />

                    <TextInput
                      s={12}
                      label="Situação"
                      name="situacao"
                      value={this.state.situacao}
                      required
                      onChange={e => {
                        this.handleChange(e);
                      }}
                    />

                    <TextInput
                      s={12}
                      label="Vencimento do Contrato"
                      name="vencimentoContrato"
                      value={this.state.vencimentoContrato}
                      onChange={e => {
                        this.handleChange(e);
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
                        this.handleChange(e);
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
                        this.handleChange(e);
                      }}
                    />

                    <TextInput
                      s={12}
                      password
                      value={this.state.password}
                      name="password"
                      required
                      label="Senha"
                      onChange={this.handleChange}
                    />
                    <TextInput
                      s={12}
                      password
                      value={this.state.confirmPassword}
                      name="confirmPassword"
                      required
                      label="Confirme senha"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <br />
                <center>
                  <div className="row">
                    <button
                      type="submit"
                      name="btn_login"
                      className="col s6 btn btn-large waves-effect black"
                      style={{ float: "none" }}
                    >
                      Cadastrar
                    </button>
                  </div>
                </center>
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
