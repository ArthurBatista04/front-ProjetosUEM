import React, { Component, Fragment } from 'react';
import Header from '../../Header/Header';
import { Redirect } from 'react-router-dom';
import { TextInput } from 'react-materialize';
import axios from 'axios';
import Swal from 'sweetalert2';
import PathName from '../../pathConst.js';

const cpfMask = val => {
  if (typeof val !== 'string') return '';

  val = val.replace(/[^0-9]/g, '').substring(0, Math.min(11, val.length));

  if (val.length <= 3) return val;

  if (val.length <= 6)
    return `${val.substring(0, 3)}.${val.substring(3, val.length)}`;

  if (val.length <= 9)
    return `${val.substring(0, 3)}.${val.substring(3, 6)}.${val.substring(
      6,
      val.length
    )}`;

  return `${val.substring(0, 3)}.${val.substring(3, 6)}.${val.substring(
    6,
    9
  )}-${val.substring(9, val.length)}`;
};

class Cadastro extends Component {
  state = {
    nome: '',
    email: '',
    cpf: '',
    password: '',
    confirmPassword: '',
    username: '',
    redirect: false
  };

  handleChange = (e, mask) => {
    if (typeof mask === 'function')
      this.setState({ [e.target.name]: mask(e.target.value) });
    else this.setState({ [e.target.name]: e.target.value });
  };

  handleSignUp = e => {
    e.preventDefault();
    if (this.state.password !== this.state.confirmPassword) {
      this.setState({ confirmPassword: '' });
      return Swal.fire({
        type: 'error',
        title: 'Senha confirmada incorretamente',
        text: 'Tente novamente'
      });
    } else if (this.state.password.length < 4) {
      this.setState({ confirmPassword: '' });
      return Swal.fire({
        type: 'error',
        title: 'Senha deve ter pelo menos 4 caracteres',
        text: 'Tente novamente'
      });
    }
    const { nome, email, cpf, password, username } = this.state;
    const newUser = {
      nome: nome.toUpperCase(),
      email,
      cpf,
      password,
      username: username.toLowerCase(),
      realm: 'Normal'
    };
    axios
      .post(`${PathName}/api//Usuarios`, newUser)
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          Swal.fire({
            type: 'success',
            title: 'Cadastro realizado com sucesso',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            this.setState({ redirect: true });
          });
        }
      })
      .catch(err => {
        return Swal.fire({
          type: 'error',
          title: 'Ops! algo deu errado',
          text: err.response.data.error.message
        });
      });
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to="/pet/login" />;
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
                display: 'inlineBlock',
                padding: 32 + 'px' + 48 + 'px' + 0 + 'px' + 48 + 'px',
                border: 1 + 'px solid  #EEE'
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
                      label="CPF"
                      name="cpf"
                      value={this.state.cpf}
                      required
                      onChange={e => {
                        this.handleChange(e, cpfMask);
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
                      style={{ float: 'none' }}
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
