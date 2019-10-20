import React, { Component, Fragment } from "react";
import { TextInput, DatePicker } from "react-materialize";
import Header from "../../../Header/Header";
import UserProfile from "../../userProfile";
import { Link } from "react-router-dom";
import "../../userProfile.css";

import {
  capitalizeString,
  handleChange,
  handleDiscenteChange,
  handleDocenteChange,
  handleClickVoltar,
  handleSubmit,
  handleDatePickerChange,
  getRealm
} from "../controller/CtrlEditProfile";

class editProfile extends Component {
  state = {
    nome: this.props.usuario.nome,
    email: this.props.usuario.email,
    username: this.props.usuario.username,
    docente: this.props.usuario.docente,
    discente: this.props.usuario.discente,
    redirect: false
  };

  componentDidMount() {
    this.setState({ nome: capitalizeString(this.state.nome) });
  }

  getExtras = () => {
    return getRealm() === "Discente" ? (
      <Fragment>
        <TextInput
          s={12}
          label="RA"
          name="ra"
          value={this.state.discente.ra}
          required
          onChange={e => {
            handleDiscenteChange(this, e);
          }}
        />

        <TextInput
          s={12}
          label="Curso"
          name="curso"
          value={this.state.discente.curso}
          required
          onChange={e => {
            handleDiscenteChange(this, e);
          }}
        />

        <TextInput
          s={12}
          label="Série"
          name="serie"
          value={this.state.discente.serie}
          onChange={e => {
            handleDiscenteChange(this, e);
          }}
        />
        <TextInput
          s={12}
          label="Turno"
          name="turno"
          value={this.state.discente.turno}
          required
          onChange={e => {
            handleDiscenteChange(this, e);
          }}
        />

        <TextInput
          s={12}
          label="Campus"
          name="campus"
          value={this.state.discente.campus}
          required
          onChange={e => {
            handleDiscenteChange(this, e);
          }}
        />

        <TextInput
          s={12}
          label="Situação Acadêmica"
          name="situacaoAcademica"
          value={this.state.discente.situacaoAcademica}
          onChange={e => {
            handleDiscenteChange(this, e);
          }}
        />
      </Fragment>
    ) : (
      <Fragment>
        <TextInput
          s={12}
          label="Matrícula"
          name="matricula"
          value={this.state.docente.matricula}
          required
          onChange={e => {
            handleDocenteChange(this, e);
          }}
        />

        <TextInput
          s={12}
          label="Cargo"
          name="cargo"
          value={this.state.docente.cargo}
          required
          onChange={e => {
            handleDocenteChange(this, e);
          }}
        />

        <TextInput
          s={12}
          label="Lotação"
          name="lotacao"
          value={this.state.docente.lotacao}
          required
          onChange={e => {
            handleDocenteChange(this, e);
          }}
        />

        <TextInput
          s={12}
          label="Situação"
          name="situacao"
          value={this.state.docente.situacao}
          required
          onChange={e => {
            handleDocenteChange(this, e);
          }}
        />

        <DatePicker
          s={12}
          label="Vencimento do Contrato"
          name="vencimentoContrato"
          value={new Date(
            this.state.docente.vencimentoContrato
          ).toLocaleDateString()}
          onChange={e => {
            handleDatePickerChange(this, e);
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
              <form onSubmit={e => handleSubmit(this, e)}>
                <h3 className="center">Editar perfil</h3>
                <TextInput
                  s={12}
                  label="Nome"
                  type="text"
                  name="nome"
                  value={nome}
                  required
                  onChange={e => {
                    handleChange(this, e);
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
                    handleChange(this, e);
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
                onClick={() => handleClickVoltar(this)}
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
