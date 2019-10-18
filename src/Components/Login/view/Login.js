import React, { Component, Fragment } from "react";
import { Link, Redirect } from "react-router-dom";
import Header from "../../Header/Header";
import { TextInput } from "react-materialize";

import { handleChange, handleSignIn } from "../controller/CtrlLogin";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      redirect: false
    };
  }

  componentWillMount() {
    const userId = localStorage.getItem("user_id");
    const token = localStorage.getItem("access_token");

    if (userId && token) this.setState({ redirect: true });
  }

  render() {
    const styleLinks = {
      margin: "2em"
    };

    if (this.state.redirect) {
      return <Redirect to="/" />;
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
                  display: "inlineBlock",
                  padding: 32 + "px" + 48 + "px" + 0 + "px" + 48 + "px",
                  border: 1 + "px solid  #EEE"
                }}
              >
                <h5 className="black-text">Login</h5>
                <form
                  className="col s12"
                  method="post"
                  onSubmit={e => handleSignIn(this, e)}
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
                            handleChange(this, e);
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
                          handleChange(this, e);
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
                        style={{ float: "none", marginBottom: "1em" }}
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
