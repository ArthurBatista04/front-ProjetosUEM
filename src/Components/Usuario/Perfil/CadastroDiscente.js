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

  handleClick = () => {
    this.setState({ redirect: true, to: "Cadastro" });
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
      ra,
      curso,
      turno,
      campus,
      serie,
      situacaoAcademica,
      username,
      password
    } = this.state;

    const newUser = {
      nome: nome.toUpperCase(),
      email,
      ra,
      curso,
      turno,
      campus,
      serie,
      situacaoAcademica,
      password,
      username: username.toLowerCase(),
      realm: "Discente"
    };

    axios
      .post(`${PathName}/api/Discentes`, newUser)
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
                      label="RA"
                      name="ra"
                      value={this.state.ra}
                      required
                      onChange={e => {
                        this.handleChange(e);
                      }}
                    />

                    <TextInput
                      s={12}
                      label="Curso"
                      name="curso"
                      value={this.state.curso}
                      required
                      onChange={e => {
                        this.handleChange(e);
                      }}
                    />

                    <TextInput
                      s={12}
                      label="Série"
                      name="serie"
                      value={this.state.serie}
                      onChange={e => {
                        this.handleChange(e);
                      }}
                    />
                    <TextInput
                      s={12}
                      label="Turno"
                      name="turno"
                      value={this.state.turno}
                      required
                      onChange={e => {
                        this.handleChange(e);
                      }}
                    />

                    <TextInput
                      s={12}
                      label="Campus"
                      name="campus"
                      value={this.state.campus}
                      required
                      onChange={e => {
                        this.handleChange(e);
                      }}
                    />

                    <TextInput
                      s={12}
                      label="Situação Acadêmica"
                      name="situacaoAcademica"
                      value={this.state.situacaoAcademica}
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
                <div>
                  <div className="row" style={{ display: "flex" }}>
                    <button
                      type="button"
                      name="btn_voltar"
                      className="col s4 btn btn-large waves-effect black"
                      style={{ float: "none", marginLeft: "auto" }}
                      onClick={this.handleClick}
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
