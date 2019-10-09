import React, { Component, Fragment } from "react";
import "../userProfile.css";
import { Row, Col } from "react-materialize";
import "../../Eventos/centerIfSmall.css";

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

  getExtrasPetiano = () => {
    const { usuario } = this.props;
    return localStorage.getItem("Petiano") ? (
      <Fragment>
        {usuario.github
          ? this.buildRow("GitHub:", usuario.github)
          : this.buildRow("GitHub:", "Não cadastrado")}
        <hr className="style-six" />
        {usuario.linkedin
          ? this.buildRow("LinkedIn:", usuario.linkedin)
          : this.buildRow("LinkedIn:", "Não cadastrado")}
        <hr className="style-six" />
        {usuario.lattes
          ? this.buildRow("Lattes:", usuario.lattes)
          : this.buildRow("Lattes:", "Não cadastrado")}
        <hr className="style-six" />
      </Fragment>
    ) : null;
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
                  {this.buildRow("Nome:", usuario.nome.toLowerCase())}
                </span>
                <hr className="style-six" />
                {this.buildRow("CPF:", usuario.cpf)}
                <hr className="style-six" />
                {this.buildRow("E-mail:", usuario.email)}
                <hr className="style-six" />
                {this.buildRow("Username:", usuario.username)}
                <hr className="style-six" />
                {this.getExtrasPetiano()}
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
