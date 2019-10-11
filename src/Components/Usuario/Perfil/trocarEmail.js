import React, { Component, Fragment } from "react";
import Header from "../../Header/Header";
import axios from "axios";
import Swal from "sweetalert2";
import { TextInput } from "react-materialize";
import { Redirect, Link } from "react-router-dom";
import PathName from "../../pathConst.js";

class TrocarEmail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newEmail: "",
      confirmNewEmail: "",
      redirect: false
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlePassChange = async e => {
    e.preventDefault();
    const { newEmail, confirmNewEmail } = this.state;
    const userId = localStorage.getItem("user_id");
    if (newEmail !== confirmNewEmail) {
      return Swal.fire({
        type: "error",
        title: "Confirmação de e-mail inválida",
        text: "Por favor, verifique os e-mails digitados"
      });
    }
    axios
      .patch(
        `${PathName}/api//Usuarios/${userId}`,
        {
          email: this.state.newEmail
        },
        {
          headers: {
            Authorization: localStorage.getItem("access_token")
          }
        }
      )
      .then(async res => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("user_id");
        localStorage.removeItem("petiano");
        this.setState({ redirect: true });
        return Swal.fire({
          type: "success",
          title: "E-mail alterada com sucesso!",
          text: "Por favor, confirme seu e-mail antes de realizar um novo login"
        });
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
      return <Redirect to="/login" />;
    }
    return (
      <Fragment>
        <Header />

        <div className="container">
          <div className="card-panel">
            <div className="row">
              <form onSubmit={this.handlePassChange}>
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
                      this.handleChange(e);
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
                      this.handleChange(e);
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
