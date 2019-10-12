import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";
import Header from "../../Header/Header";
import { TextInput } from "react-materialize";

import {
  handleChange,
  handlePassChange
} from "../controller/CtrlRedefineSenha";

class RedefineSenha extends Component {
  componentWillMount() {
    let token = window.location.pathname;
    token = token.substring(token.indexOf("=") + 1, token.length);
    this.setState({ token });
  }

  constructor(props) {
    super(props);
    this.state = {
      password: "",
      confirmPassword: "",
      token: "",
      redirect: false
    };
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/login" />;
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
                  display: "inlineBlock",
                  padding: 32 + "px" + 48 + "px" + 0 + "px" + 48 + "px",
                  border: 1 + "px solid  #EEE"
                }}
              >
                <form
                  className="col s12"
                  method="post"
                  onSubmit={e => handlePassChange(this, e)}
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
                            handleChange(this, e);
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
                            handleChange(this, e);
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
                        style={{ float: "none" }}
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
