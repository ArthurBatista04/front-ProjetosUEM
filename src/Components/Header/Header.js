import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import headerAutorizado from './headerAutorizado';
import HeaderUsuario from './headerUsuario.js';
import HeaderDeslogado from './headerDeslogado.js';

class Header extends Component {
  state = {
    logged: null,
    redirect: false
  };

  componentDidMount() {
    localStorage.getItem('access_token')
      ? this.setState({ logged: true })
      : this.setState({ logged: false });
  }

  handleLogOut = () => {
    localStorage.clear();
    this.setState({ redirect: true });
    window.location.reload();
  };

  verifyAuthorization = () => {
    if (localStorage.getItem('Petiano')) {
      return true;
    } else if (localStorage.getItem('Ajudante')) {
      return true;
    } else if (localStorage.getItem('admin')) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    const { logged, redirect } = this.state;
    if (redirect) {
      this.setState({ redirect: false });
      return <Redirect to="/" />;
    }
    if (logged) {
      if (this.verifyAuthorization()) {
        return <headerAutorizado handleLogOut={this.handleLogOut} />;
      } else {
        return <HeaderUsuario handleLogOut={this.handleLogOut} />;
      }
    } else {
      return <HeaderDeslogado handleLogOut={this.handleLogOut} />;
    }
  }
}

export default Header;
