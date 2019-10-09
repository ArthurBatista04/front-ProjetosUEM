import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import axios from 'axios';
import Swal from 'sweetalert2';
import { TextInput } from 'react-materialize';
import PathName from '../pathConst.js';

class RedefineSenha extends Component {
  componentWillMount() {
    let token = window.location.pathname;
    token = token.substring(token.indexOf('=') + 1, token.length);
    this.setState({ token });
  }

  constructor(props) {
    super(props);
    this.state = {
      password: '',
      confirmPassword: '',
      token: '',
      redirect: false
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlePassChange = async e => {
    e.preventDefault();
    const { password, confirmPassword } = this.state;
    if (password.length < 4) {
      return Swal.fire({
        type: 'error',
        title: 'Senha deve ter pelo menos 4 caracteres',
        text: 'Tente novamente'
      });
    } else if (password !== confirmPassword) {
      return Swal.fire({
        type: 'error',
        title: 'As senhas são diferentes',
        text: 'É necessário que a nova senha e a confirmação sejam iguais'
      });
    } else {
      axios
        .post(
          `${PathName}/api//Usuarios/reset-password`,
          {
            newPassword: this.state.password
          },
          {
            headers: {
              Authorization: this.state.token
            }
          }
        )
        .then(async res => {
          this.setState({ redirect: true });
          return Swal.fire({
            type: 'success',
            title: 'Senha alterada com sucesso!'
          });
        })
        .catch(err => {
          return Swal.fire({
            type: 'error',
            title: 'Ops! algo deu errado',
            text: err.response.data.error.message
          });
        });
    }
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
            <div className="section" />
            <h5 className="indigo-text">Insira sua nova senha</h5>
            <div className="section" />

            <div className="container">
              <div
                className="z-depth-1 grey lighten-4 row"
                style={{
                  display: 'inlineBlock',
                  padding: 32 + 'px' + 48 + 'px' + 0 + 'px' + 48 + 'px',
                  border: 1 + 'px solid  #EEE'
                }}
              >
                <form
                  className="col s12"
                  method="post"
                  onSubmit={this.handlePassChange}
                >
                  <div className="container">
                    <div className="row">
                      <span>
                        <TextInput
                          s={12}
                          password
                          validate
                          icon="lock"
                          label="Senha"
                          name="password"
                          error="Insira uma senha"
                          success=""
                          required
                          onChange={e => {
                            this.handleChange(e);
                          }}
                        />
                      </span>
                      <span>
                        <TextInput
                          s={12}
                          password
                          validate
                          icon="lock"
                          label="Confirme a senha"
                          name="confirmPassword"
                          error="Confirme a senha"
                          success=""
                          required
                          onChange={e => {
                            this.handleChange(e);
                          }}
                        />
                      </span>
                    </div>
                  </div>
                  <center>
                    <div className="row">
                      <button
                        type="submit"
                        name="btn_senha"
                        className="col s6 btn btn-large waves-effect indigo"
                        style={{ float: 'none' }}
                      >
                        Redefinir Senha
                      </button>
                    </div>
                  </center>
                </form>
              </div>
            </div>
          </div>
        </center>
      </Fragment>
    );
  }
}

export default RedefineSenha;
