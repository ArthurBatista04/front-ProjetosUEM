import React, { Component, Fragment } from "react";
import { TextInput } from "react-materialize";
import Header from "../../Header/Header";
import Axios from "axios";
import Swal from "sweetalert2";
import PathName from "../../pathConst";
import UserProfile from "../userProfile";
import { Link } from "react-router-dom";
import "../userProfile.css";

class editProfile extends Component {
  state = {
    nome: this.props.usuario.nome,
    email: this.props.usuario.email,
    username: this.props.usuario.username,
    github: this.props.usuario.github,
    linkedin: this.props.usuario.linkedin,
    lattes: this.props.usuario.lattes,
    redirect: false
  };

  componentDidMount() {
    this.setState({ nome: this.capitalizeString(this.state.nome) });
  }

  capitalizeString = str => {
    return str.toLowerCase().replace(/\b\w/g, l => l.toUpperCase());
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleClickVoltar = () => {
    this.setState({ redirect: true });
  };

  handleSubmit = e => {
    e.preventDefault();
    const userId = this.props.usuario.id;
    const token = localStorage.getItem("access_token");
    const Token = {
      headers: {
        Authorization: token
      }
    };
    const userUpdated = {
      nome: this.state.nome.toUpperCase(),
      username: this.state.username.toLowerCase(),
      github: this.state.github,
      linkedin: this.state.linkedin,
      lattes: this.state.lattes
    };
    Axios.patch(
      `${PathName}/api//Usuarios/${userId}`,
      userUpdated,
      Token
    )
      .then(res => {
        Swal.fire({
          type: "success",
          title: "Alteração realizada com sucesso",
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          this.setState({ redirect: true });
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
    const { redirect, nome, username, github, linkedin, lattes } = this.state;
    if (redirect) {
      return <UserProfile />;
    }
    return (
      <Fragment>
        <Header />
        <div className="container">
          <div className="card-panel">
            <div className="row">
              <form onSubmit={this.handleSubmit}>
                <h3 className="center">Editar perfil</h3>
                <TextInput
                  s={12}
                  label="Nome"
                  type="text"
                  name="nome"
                  value={nome}
                  required
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
                  value={username}
                  onChange={e => {
                    this.handleChange(e);
                  }}
                />

                <TextInput
                  s={12}
                  label="Link do GitHub"
                  type="text"
                  name="github"
                  value={github}
                  onChange={e => {
                    this.handleChange(e);
                  }}
                />

                <TextInput
                  s={12}
                  label="Link do LinkedIn"
                  type="text"
                  name="linkedin"
                  value={linkedin}
                  onChange={e => {
                    this.handleChange(e);
                  }}
                />

                <TextInput
                  s={12}
                  label="Link do Lattes"
                  type="text"
                  name="lattes"
                  value={lattes}
                  onChange={e => {
                    this.handleChange(e);
                  }}
                />

                <div className="row">
                  <div className="col s12">
                    <div className="basicInfo grey-text text-darken-2">
                      <p>
                        <b>E-mail:</b>
                        <Link
                          to="/pet/perfil/trocarEmail"
                          className="right"
                          style={{ marginRight: "5px" }}
                        >
                          Editar e-mail
                        </Link>
                      </p>
                      <hr className="style-six" />
                      <p>
                        <b>Senha:</b>
                        <Link
                          to="/pet/perfil/trocarSenha"
                          className="right"
                          style={{ marginRight: "5px" }}
                        >
                          Trocar a senha
                        </Link>
                      </p>
                      <hr className="style-six" />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  name="btn_edit"
                  className=" btn blue waves-effect waves-light lighten-1 right"
                >
                  Salvar
                </button>
              </form>
              <button
                type="button"
                className=" btn waves-effect waves-light blue lighten-1 left"
                onClick={this.handleClickVoltar}
              >
                Voltar
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default editProfile;
