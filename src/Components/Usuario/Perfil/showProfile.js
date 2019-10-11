import React, { Component, Fragment } from "react";
import "../userProfile.css";
import { Row, Col } from "react-materialize";

class showProfile extends Component {
  componentWillMount() {
    localStorage.getItem("access_token")
      ? this.setState({ logged: true })
      : this.setState({ redirect: true });
  }

  state = {
    redirect: false,
    logged: false
  };

  getExtras = () => {
    const { usuario } = this.props;
    return localStorage.getItem("Docente") ? (
      <Fragment>
        <hr className="style-six" />
        {this.buildRow("Matrícula:", usuario.matricula)}
        <hr className="style-six" />
        {this.buildRow("Cargo:", usuario.cargo)}
        <hr className="style-six" />
        {this.buildRow("Lotação:", usuario.lotacao)}
        <hr className="style-six" />
        {this.buildRow("Situação:", usuario.situacao)}
        <hr className="style-six" />
        {this.buildRow("Vencimento do Contrato:", usuario.vencimentoContrato)}
        <hr className="style-six" />
        {this.buildRow("E-mail:", usuario.email)}
        <hr className="style-six" />
        {this.buildRow("Nome de Usuário:", usuario.username)}
        <hr className="style-six" />
      </Fragment>
    ) : (
      <Fragment>
        <hr className="style-six" />
        {this.buildRow("RA:", usuario.ra)}
        <hr className="style-six" />
        {this.buildRow("Curso:", usuario.curso)}
        <hr className="style-six" />
        {this.buildRow("Turno:", usuario.turno)}
        <hr className="style-six" />
        {this.buildRow("Campus:", usuario.campus)}
        <hr className="style-six" />
        {this.buildRow("Situação Acadêmica:", usuario.situacaoAcademica)}
        <hr className="style-six" />
      </Fragment>
    );
  };

  buildRow = (key, value) => (
    <Row>
      <Col s={12} m={6}>
        <b className="left hide-on-small-and-down">{key}</b>
        <b className="really-center-span hide-on-med-and-up">{key}</b>
      </Col>

      <Col s={12} m={6}>
        <span className="right hide-on-small-and-down">{value}</span>
        <span className="really-center-span hide-on-med-and-up">{value}</span>
      </Col>
    </Row>
  );
  render() {
    const { usuario } = this.props;
    return (
      <div id="perfil" className="container">
        <div className="card-panel">
          <div className="row">
            <div className="col s12">
              <h5>
                <i className="material-icons left">person</i>Perfil
              </h5>
              <br />
              <div className="basicInfo grey-text text-darken-2">
                <span style={{ textTransform: "capitalize" }}>
                  {this.buildRow("Nome:", usuario.nome)}
                </span>
                <hr className="style-six" />
                {this.buildRow("E-mail:", usuario.email)}
                <hr className="style-six" />
                {this.buildRow("Username:", usuario.username)}
                <hr className="style-six" />
                {this.getExtras()}
              </div>
              <div style={{ paddingTop: "2rem" }}>
                <button
                  type="button"
                  className="btn blue lighten-1 right"
                  onClick={this.props.handleClickEditar}
                >
                  Editar perfil
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default showProfile;
