import React, { Component, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import axios from 'axios';
import Swal from 'sweetalert2';
import { TextInput } from 'react-materialize';
import PathName from '../pathConst.js';
import expression from './regex';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      redirect: false
    };
  }

  componentWillMount() {
    const userId = localStorage.getItem('user_id');
    const token = localStorage.getItem('access_token');

    if (userId && token) this.setState({ redirect: true });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async verifyRole() {
    let id = localStorage.getItem('user_id');
    let res = await axios.get(`${PathName}/api/Usuarios//${id}`);
    return res.data;
  }

  verifyEmail = email => {
    return expression.test(String(email).toLowerCase());
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { name, password } = this.state;
    const newLogin = {};
    if (this.verifyEmail(name)) {
      newLogin.email = name.toLowerCase();
      newLogin.password = password;
    } else {
      newLogin.username = name.toLowerCase();
      newLogin.password = password;
    }
    axios
      .post(`${PathName}/api//Usuarios/login/?include=user`, newLogin)
      .then(async res => {
        localStorage.setItem(res.data.user.realm, res.data.id);
        localStorage.setItem('user_id', res.data.userId);
        localStorage.setItem('access_token', res.data.id);
        this.setState({ redirect: true });
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
    const styleLinks = {
      margin: '2em'
    };
    if (this.state.redirect) {
      return <Redirect to="/pet" />;
    }
    return (
      <Fragment>
        <Header />
        <center>
          <div className="container">
            <div className="container">
              <div
                className="z-depth-1 grey lighten-4 row"
                style={{
                  display: 'inlineBlock',
                  padding: 32 + 'px' + 48 + 'px' + 0 + 'px' + 48 + 'px',
                  border: 1 + 'px solid  #EEE'
                }}
              >
                <h5 className="black-text">Login</h5>
                <form
                  className="col s12"
                  method="post"
                  onSubmit={this.handleSignIn}
                >
                  <div className="container">
                    <div className="row">
                      <div>
                        <TextInput
                          s={12}
                          icon="account_box"
                          label="Nome de usuário ou E-mail"
                          name="name"
                          success=""
                          required
                          value={this.state.name}
                          onChange={e => {
                            this.handleChange(e);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="container">
                    <div className="row">
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
                    </div>
                  </div>
                  <br />
                  <center>
                    <div className="row">
                      <button
                        type="submit"
                        name="btn_login"
                        className="col s6 btn btn-large waves-effect black"
                        style={{ float: 'none', marginBottom: '1em' }}
                      >
                        Entrar
                      </button>
                    </div>
                  </center>
                </form>
              </div>
            </div>
            <div className="container" style={styleLinks}>
              <div className="container">
                <Link to="/esqueceuSenha" className="pink-text left">
                  <b>Esqueceu sua senha?</b>
                </Link>
                <Link to="/cadastro" className="blue-text right">
                  <b>Criar uma conta</b>
                </Link>
              </div>
            </div>
          </div>
        </center>
      </Fragment>
    );
  }
}

export default Login;
