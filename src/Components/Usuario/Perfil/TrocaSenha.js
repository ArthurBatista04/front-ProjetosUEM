import React, { Component, Fragment } from "react";
import Header from "../../Header/Header";
import Swal from "sweetalert2";
import { TextInput } from "react-materialize";
import { Redirect, Link } from "react-router-dom";
import PathName from "../../pathConst.js";
import Axios from "axios";

class TrocaSenha extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
      redirect: false
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlePassChange = async e => {
    e.preventDefault();
    const { newPassword, confirmNewPassword } = this.state;
    const userId = localStorage.getItem("user_id");

    if (newPassword !== confirmNewPassword) {
      return Swal.fire({
        type: "error",
        title: "As senhas estão diferentes",
        text: "É necessário que a nova senha e a confirmação sejam iguais"
      });
    } else if (newPassword.length < 4) {
      this.setState({ confirmPassword: "" });
      return Swal.fire({
        type: "error",
        title: "Senha deve ter pelo menos 4 caracteres",
        text: "Tente novamente"
      });
    } else {
      Axios.put(
        `${PathName}/api//Usuarios/change-password/${userId}`,
        {
          currentPassword: this.state.currentPassword,
          newPassword: this.state.newPassword
        },
        {
          headers: {
            Authorization: localStorage.getItem("access_token")
          }
        }
      )
        .then(async res => {
          localStorage.clear();
          this.setState({ redirect: true });
          return Swal.fire({
            type: "success",
            title: "Senha alterada com sucesso!",
            text: "Por favor, logue-se de novo para completar a troca da senha"
          });
        })
        .catch(err => {
          return Swal.fire({
            type: "error",
            title: "Ops! algo deu errado",
            text: err.response.data.error.message
          });
        });
    }
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
                <h5 className="indigo-text center">Alterar senha</h5>

                <div>
                  <TextInput
                    s={12}
                    password
                    validate
                    label="Senha atual"
                    name="currentPassword"
                    error="Insira a senha atual"
                    success=""
                    required
                    onChange={e => {
                      this.handleChange(e);
                    }}
                  />
                  <TextInput
                    s={12}
                    password
                    validate
                    label="Senha nova"
                    name="newPassword"
                    error="Insira a nova senha"
                    success=""
                    required
                    onChange={e => {
                      this.handleChange(e);
                    }}
                  />
                  <TextInput
                    s={12}
                    password
                    validate
                    label="Confirme nova senha"
                    name="confirmNewPassword"
                    error="Confirme a nova senha"
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
                  Alterar senha
                </button>
                <Link
                  to="/pet/perfil"
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

export default TrocaSenha;
