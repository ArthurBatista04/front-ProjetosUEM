import React, { Component, Fragment } from "react";
import { TextInput, DatePicker } from "react-materialize";
import Header from "../../Header/Header";
import UserProfile from "../userProfile";
import { Link } from "react-router-dom";
import "../userProfile.css";

import {
  capitalizeString,
  handleChange,
  handleClickVoltar,
  handleSubmit,
  handleDatePickerChange,
  getRealm
} from "./controller/CtrlEditProfile";

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
    this.setState({ nome: capitalizeString(this.state.nome) });
  }

  getExtras = () => {
    return getRealm() === "Discente" ? (
      <Fragment>
        <TextInput
          s={12}
          label="RA"
          name="ra"
          value={this.state.ra}
          required
          onChange={e => {
            handleChange(this, e);
          }}
        />

        <TextInput
          s={12}
          label="Curso"
          name="curso"
          value={this.state.curso}
          required
          onChange={e => {
            handleChange(this, e);
          }}
        />

        <TextInput
          s={12}
          label="Série"
          name="serie"
          value={this.state.serie}
          onChange={e => {
            handleChange(this, e);
          }}
        />
        <TextInput
          s={12}
          label="Turno"
          name="turno"
          value={this.state.turno}
          required
          onChange={e => {
            handleChange(this, e);
          }}
        />

        <TextInput
          s={12}
          label="Campus"
          name="campus"
          value={this.state.campus}
          required
          onChange={e => {
            handleChange(this, e);
          }}
        />

        <TextInput
          s={12}
          label="Situação Acadêmica"
          name="situacaoAcademica"
          value={this.state.situacaoAcademica}
          onChange={e => {
            handleChange(this, e);
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
            handleChange(this, e);
          }}
        />

        <TextInput
          s={12}
          label="Cargo"
          name="cargo"
          value={this.state.cargo}
          required
          onChange={e => {
            handleChange(this, e);
          }}
        />

        <TextInput
          s={12}
          label="Lotação"
          name="lotacao"
          value={this.state.lotacao}
          required
          onChange={e => {
            handleChange(this, e);
          }}
        />

        <TextInput
          s={12}
          label="Situação"
          name="situacao"
          value={this.state.situacao}
          required
          onChange={e => {
            handleChange(this, e);
          }}
        />

        <DatePicker
          s={12}
          label="Vencimento do Contrato"
          name="vencimentoContrato"
          value={this.state.vencimentoContrato}
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
