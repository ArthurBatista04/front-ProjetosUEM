import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import banner from '../../images/logo_transparent.png';
import M from 'materialize-css';
import Axios from 'axios';
import PathName from '../pathConst';

export class headerPetiano extends Component {
  componentWillMount() {
    const userId = localStorage.getItem('user_id');
    const token = localStorage.getItem('access_token');
    const Token = {
      headers: {
        Authorization: token
      }
    };
  }

  componentDidMount() {
    var elem = document.querySelector('.sidenav');
    M.Sidenav.init(elem, {
      edge: 'left',
      inDuration: 250
    });
    var elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems, {
      alignment: 'left',
      autoTrigger: true,
      coverTrigger: false,
      closeOnClick: true
    });
    const pagina = window.location.pathname;
    if (pagina !== '/' && pagina !== '/' && pagina !== '/') {
      this.setState({ homePage: false });
    } else {
      this.setState({ homePage: true });
    }
  }
  state = {
    homePage: false,
    nome: ''
  };

  getStyle = () => {
    const { homePage } = this.state;
    const style = {
      backgroundColor: 'black',
      marginBottom: `${4}em`
    };
    const styleHeader = {
      backgroundColor: 'black'
    };
    return homePage ? styleHeader : style;
  };
  render() {
    const { nome } = this.state;
    return (
      <nav style={this.getStyle()}>
        <div className="nav-wrapper">
          <Link to="/" id="logo-container" className="brand-logo">
            <img
              src={banner}
              alt="Logo"
              style={{ height: 55 + 'px', marginLeft: 10 + 'px' }}
            />
          </Link>

          <ul className="right hide-on-med-and-down">
            <li>
              <Link to="/">
                <i className="material-icons left">home</i>Início
              </Link>
            </li>

            <li>
              <Link to="/pet/admin#/">
                <i className="material-icons left">verified_user</i>Painel
                Administrativo
              </Link>
            </li>

            <li>
              <Link className="dropdown-trigger" to="#" data-target="dropdown1">
                <i className="material-icons left">person_pin</i>
                {nome}
                <i className="material-icons right">arrow_drop_down</i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default headerPetiano;
