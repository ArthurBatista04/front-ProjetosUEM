import React, { Component, Fragment } from "react";
import { TextInput, DatePicker } from "react-materialize";
import Header from "../../Header/Header";
import Axios from "axios";
import Swal from "sweetalert2";
import PathName from "../../pathConst";
import UserProfile from "../userProfile";
import { Link } from "react-router-dom";
import "../userProfile.css";

class editProfile extends Component {
  state = {
    nome: this.props.nome,
    email: this.props.email,
    username: this.props.username,
    matricula: this.props.matricula,
    cargo: this.props.cargo,
    lotacao: this.props.lotacao,
    situacao: this.props.situacao,
    vencimentoContrato: this.props.vencimentoContrato,
    ra: this.props.ra,
    curso: this.props.curso,
    turno: this.props.turno,
    campus: this.props.campus,
    serie: this.props.serie,
    situacaoAcademica: this.props.situacaoAcademica,
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
    Axios.patch(`${PathName}/api//Usuarios/${userId}`, userUpdated, Token)
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

  getExtras = () => {
    return localStorage.getItem("Discente") ? (
      <Fragment>
        <TextInput
          s={12}
          label="RA"
          name="ra"
          value={this.state.ra}
          required
          onChange={e => {
            this.handleChange(e);
          }}
        />

        <TextInput
          s={12}
          label="Curso"
          name="curso"
          value={this.state.curso}
          required
          onChange={e => {
            this.handleChange(e);
          }}
        />

        <TextInput
          s={12}
          label="Série"
          name="serie"
          value={this.state.serie}
          onChange={e => {
            this.handleChange(e);
          }}
        />
        <TextInput
          s={12}
          label="Turno"
          name="turno"
          value={this.state.turno}
          required
          onChange={e => {
            this.handleChange(e);
          }}
        />

        <TextInput
          s={12}
          label="Campus"
          name="campus"
          value={this.state.campus}
          required
          onChange={e => {
            this.handleChange(e);
          }}
        />

        <TextInput
          s={12}
          label="Situação Acadêmica"
          name="situacaoAcademica"
          value={this.state.situacaoAcademica}
          onChange={e => {
            this.handleChange(e);
          }}
        />
      </Fragment>
    ) : (
      <Fragment>
        <TextInput
          s={12}
          label="Matrícula"
          name="matricula"
          value={this.state.matricula}
          required
          onChange={e => {
            this.handleChange(e);
          }}
        />

        <TextInput
          s={12}
          label="Cargo"
          name="cargo"
          value={this.state.cargo}
          required
          onChange={e => {
            this.handleChange(e);
          }}
        />

        <TextInput
          s={12}
          label="Lotação"
          name="lotacao"
          value={this.state.lotacao}
          required
          onChange={e => {
            this.handleChange(e);
          }}
        />

        <TextInput
          s={12}
          label="Situação"
          name="situacao"
          value={this.state.situacao}
          required
          onChange={e => {
            this.handleChange(e);
          }}
        />

        <DatePicker
          s={12}
          label="Vencimento do Contrato"
          name="vencimentoContrato"
          value={this.state.vencimentoContrato}
          onChange={e => {
            this.handleChange(e);
          }}
        />
      </Fragment>
    );
  };

  render() {
    const { nome, username } = this.state;

    if (this.state.redirect) {
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

                {this.getExtras()}

                <div className="row">
                  <div className="col s12">
                    <div className="basicInfo grey-text text-darken-2">
                      <p>
                        <b>E-mail:</b>
                        <Link
                          to="/perfil/trocarEmail"
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
                          to="/perfil/trocarSenha"
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
