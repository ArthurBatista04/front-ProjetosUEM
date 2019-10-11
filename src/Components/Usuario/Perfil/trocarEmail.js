import React, { Component, Fragment } from "react";
import Header from "../../Header/Header";
import { TextInput } from "react-materialize";
import { Redirect, Link } from "react-router-dom";
import { handleChange, handlePassChange } from "./controller/CtrlTrocarEmail";

class TrocarEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newEmail: "",
      confirmNewEmail: "",
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

        <div className="container">
          <div className="card-panel">
            <div className="row">
              <form onSubmit={e => handlePassChange(this, e)}>
                <h5 className="indigo-text center">Alterar E-mail</h5>
                <div className="conatiner">
                  <TextInput
                    s={12}
                    email
                    validate
                    label="Novo e-mail"
                    name="newEmail"
                    error="Insira o novo e-mail"
                    success=""
                    required
                    onChange={e => {
                      handleChange(this, e);
                    }}
                  />

                  <TextInput
                    s={12}
                    email
                    validate
                    label="Confirmar novo e-mail"
                    name="confirmNewEmail"
                    error="Insira o novo e-mail novamente"
                    success=""
                    required
                    onChange={e => {
                      handleChange(this, e);
                    }}
                  />
                </div>

                <button
                  type="submit"
                  name="btn_senha"
                  className="btn blue waves-effect waves-light lighten-1 right"
                >
                  Alterar E-mail
                </button>
                <Link
                  to="/perfil"
                  className="btn waves-effect waves-light blue lighten-1 left"
                >
                  Voltar
                </Link>
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default TrocarEmail;
