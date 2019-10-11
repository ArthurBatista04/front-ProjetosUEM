import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Header from "../../Header/Header";
import { TextInput } from "react-materialize";

import {
  handleChange,
  handlePassForget
} from "../controller/CtrlEsqueceuSenha";

class EsqueceuSenha extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
  }

  render() {
    return (
      <Fragment>
        <Header userType={this.state.userType} />
        <div className="section" />
        <center>
          <div className="container">
            <div className="section" />
            <h5 className="indigo-text">
              Insira seu e-mail para redefinir a senha
            </h5>
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
                  onSubmit={e => handlePassForget(this, e)}
                >
                  <div className="container">
                    <div className="row">
                      <div>
                        <TextInput
                          s={12}
                          email
                          validate
                          icon="email"
                          label="Email"
                          name="email"
                          error="E-mail incorreto"
                          success=""
                          required
                          value={this.state.email}
                          onChange={e => {
                            handleChange(this, e);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <center>
                    <div className="row">
                      <button
                        type="submit"
                        name="btn_email"
                        className="col s6 btn btn-large waves-effect indigo"
                        style={{ float: "none" }}
                      >
                        Enviar requisição
                      </button>
                    </div>
                  </center>
                </form>
              </div>
            </div>
            <div style={{ marginBottom: 1 + "rem" }}>
              <Link to="/pet/cadastro" className="blue-text">
                <b>Criar uma conta</b>
              </Link>
            </div>
          </div>
        </center>
      </Fragment>
    );
  }
}

export default EsqueceuSenha;
