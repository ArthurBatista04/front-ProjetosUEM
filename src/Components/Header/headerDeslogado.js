import React, { Component } from "react";
import { Link } from "react-router-dom";
import banner from "../../images/logo_transparent.png";
import M from "materialize-css";

class headerDeslogado extends Component {
  componentDidMount() {
    var elem = document.querySelector(".sidenav");
    M.Sidenav.init(elem, {
      edge: "left",
      inDuration: 250
    });
    const pagina = window.location.pathname;
    if (pagina !== "/" && pagina !== "/" && pagina !== "/") {
      this.setState({ homePage: false });
    } else {
      this.setState({ homePage: true });
    }
  }
  state = {
    homePage: false
  };

  getStyle = () => {
    const { homePage } = this.state;
    const style = {
      backgroundColor: "black",
      marginBottom: `${4}em`
    };
    const styleHeader = {
      backgroundColor: "black"
    };
    return homePage ? styleHeader : style;
  };

  render() {
    return (
      <nav style={this.getStyle()}>
        <div className="nav-wrapper">
          <Link to="/" id="logo-container" className="brand-logo">
            <img
              src={banner}
              alt="Logo"
              style={{ height: 55 + "px", marginLeft: 10 + "px" }}
            />
          </Link>

          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/">
                <i className="material-icons left">home</i>Início
              </Link>
            </li>

            <li>
              <Link to="/pesquisar">
                <i className="material-icons left">search</i>Pesquisar Projetos
              </Link>
            </li>

            <li>
              <Link to="/cadastro">
                {" "}
                <i className="material-icons left">create</i>Cadastro
              </Link>
            </li>
            <li>
              <Link to="/login">
                <i className="material-icons left">open_in_new</i>Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default headerDeslogado;
