import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginScreen from './loginScreen.js';
import CtrlDiscente from './Discente/ctrl_Discente.js';
import CtrlDocente from './Docente/ctrl_Docente.js';
import CrtlAdmin from './Admin/ctrl_Admin.js';

export class main extends Component {
	state = {
		userType: ''
	};

	componentWillMount() {
		// Axios.get('http://localhost:3001/api/Projetos/getProjetos').then((res) => {
		// 	this.setState((this.state.projetos = res.data.response));
		// });
	}

	handleSubmitLogin = (type) => {
		//Axios.post("", login);
		if (type === 'Docente') {
			this.setState({ userType: type });
		} else if (type === 'Discente') {
			this.setState({ userType: type });
		} else {
			this.setState({ userType: type });
		}
	};

	render() {
		return (
			<Switch>
				{/* Rotas discente */}
				<Route exact path="/Projetos/search" render={() => <CtrlDiscente />} />
				<Route exact path="/Discente/Projetos/:id" render={() => <CtrlDiscente />} />
				<Route exact path="/Projetos/:id/enviarMensagem" render={() => <CtrlDiscente />} />
				<Route exact path="/Projetos/:id/Edital/:id/signUp" render={() => <CtrlDiscente />} />
				{/* Rotas docente */}
				<Route exact path="/Docente/Projetos" render={() => <CtrlDocente />} />
				<Route exact path="/Docente/Projetos/add" render={() => <CtrlDocente />} />
				<Route exact path="/Docente/Projetos/edit/:id" render={() => <CtrlDocente />} />
				<Route exact path="/Docente/Projetos/:id" render={() => <CtrlDocente />} />
				<Route exact path="/Docente/Projetos/:id/Edital/:id/create" render={() => <CtrlDocente />} />
				<Route exact path="/Docente/Projetos/:id/Edital/:id/edit" render={() => <CtrlDocente />} />
				<Route exact path="/Docente/Projetos/:id/Edital/:id/visualize" render={() => <CtrlDocente />} />
				<Route exact path="/Docente/Projetos/:id/Edital/:id/signedUp" render={() => <CtrlDocente />} />
				<Route exact path="/Docente/profile" render={() => <CtrlDocente />} />
				<Route exact path="/Docente/Projetos/relatorioGeral" render={() => <CtrlDocente />} />
				<Route exact path="/Docente/Projetos/relatorios/:id" render={() => <CtrlDocente />} />
				{/* Rotas admin */}
				<Route exact path="/admin/dashboard" render={() => <CrtlAdmin />} />
				<Route exact path="/admin/gerenciarDados" render={() => <CrtlAdmin />} />

				<Route
					exact
					path="/"
					render={(props) => {
						if (this.state.userType === '') {
							return <LoginScreen handleSubmitLogin={this.handleSubmitLogin} />;
						} else if (this.state.userType === 'Docente') {
							return <Redirect to="/Docente/Projetos" />;
						} else if (this.state.userType === 'Discente') {
							return <Redirect to="/Projetos/search" />;
						} else if (this.state.userType === 'Admin') {
							return <Redirect to="/admin/dashboard" />;
						}
					}}
				/>
			</Switch>
		);
	}
}

export default main;
