import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginScreen from './loginScreen.js';
import CtrlDiscente from './Discente/ctrl_Discente.js';
import CtrlDocente from './Docente/ctrl_Docente.js';
import CtrlAdmin from './Admin/ctrl_Admin.js';

export class main extends Component {
	state = {
		userType: null
	};

	componentWillMount() {
		if (localStorage.getItem('Login') === 'Docente') {
			this.setState({ userType: 'Docente' });
		} else if (localStorage.getItem('Login') === 'Discente') {
			this.setState({ userType: 'Discente' });
		} else if (localStorage.getItem('Login') === 'Admin') {
			this.setState({ userType: 'Admin' });
		}
		// Axios.get('http://localhost:3001/api/Projetos/getProjetos').then((res) => {
		// 	this.setState((this.state.projetos = res.data.response));
		// });
	}

	handleSubmitLogin = (type) => {
		//Axios.post("", login);
		console.log(type);
		if (type === 'Docente') {
			localStorage.setItem('Login', 'Docente');
			this.setState({ userType: 'Docente' });
		} else if (type === 'Discente') {
			localStorage.setItem('Login', 'Discente');
			this.setState({ userType: 'Discente' });
		} else if (type === 'Admin') {
			localStorage.setItem('Login', 'Admin');
			this.setState({ userType: 'Admin' });
		}
	};

	logout = () => {
		localStorage.removeItem('Login');
		this.setState({ userType: null });
	};

	render() {
		if (this.state.userType === 'Docente') {
			return <CtrlDocente logout={this.logout} />;
		} else if (this.state.userType === 'Discente') {
			return <CtrlDiscente logout={this.logout} />;
		} else if (this.state.userType === 'Admin') {
			return <CtrlAdmin logout={this.logout} />;
		} else {
			return (
				<Switch>
					<Route
						exact
						path="/login"
						render={() => <LoginScreen handleSubmitLogin={this.handleSubmitLogin} />}
					/>
					<Redirect to="/login" />
				</Switch>
			);
		}
	}
}

export default main;
