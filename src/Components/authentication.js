import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from './dashboard.js';

export default class Main extends React.Component {
	constructor(props) {
		super(props);
		const token = localStorage.getItem('token') || null;
		const userType = localStorage.getItem('userType') || null;
		this.state = {
			token,
			userType
		};
	}

	randomUser = () => {
		const rand = Math.random();
		if (rand > 0.66) return 'Professor';
		if (rand > 0.33) return 'Aluno';
		return 'Admin';
	};

	setToken = (token) => {
		const userType = this.randomUser();
		localStorage.setItem('token', token);
		localStorage.setItem('userType', userType);
		this.setState({ token, userType });
	};

	logout = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('userType');
		this.setState({ token: null, userType: null });
	};

	renderRouteAuth = (Comp) => {
		const token = this.state.token;
		return () => {
			if (token !== null) return <Comp />;
			return <Redirect to="/login" />;
		};
	};

	renderAuth = (child) => {
		if (this.state.token !== null) return child;
		return null;
	};

	renderUnauth = (child) => {
		if (this.state.token === null) return child;
		return null;
	};

	render() {
		const { setToken } = this;
		const { token } = this.state;
		return (
			<React.Fragment>
				<Header
					userType={this.state.userType}
					logout={this.logout}
					renderAuth={this.renderAuth}
					renderUnauth={this.renderUnauth}
				/>
				<Switch>
					<Route exact path="/admin/dashboard" render={this.renderRouteAuth(Dashboard)} />
					<Route
						exact
						path="/login"
						render={() => {
							if (token === null) return <LoginPage setToken={setToken} />;
							else return <Redirect to="/admin/dashboard" />;
						}}
					/>
				</Switch>
			</React.Fragment>
		);
	}
}

class Header extends React.Component {
	render() {
		return (
			<ul>
				<li>{'Início'}</li>
				<li>{'Sobre'}</li>
				{this.props.renderUnauth(<li>{'Login'}</li>)}
				{this.props.renderAuth(
					<React.Fragment>
						<li> {`Olá, ${this.props.userType}!`}</li>
						<li onClick={this.props.logout}>{'Logout'}</li>
					</React.Fragment>
				)}
			</ul>
		);
	}
}

class HomePage extends React.Component {
	render() {
		switch (this.props.userType) {
			case 'Professor':
				return (
					<div>
						<h1>{'Página do Professor'}</h1>
						<button onClick={this.props.logout}>{'Logout'}</button>
					</div>
				);
			case 'Aluno':
				return (
					<div>
						<h1>{'Página do Aluno'}</h1>
						<button onClick={this.props.logout}>{'Logout'}</button>
					</div>
				);
			case 'Admin':
				return (
					<div>
						<h1>{'Página do Admin'}</h1>
						<button onClick={this.props.logout}>{'Logout'}</button>
					</div>
				);
		}
	}
}

class LoginPage extends React.Component {
	constructor(props) {
		super(props);
		const rememberMe = localStorage.getItem('rememberMe') === 'true';
		const email = rememberMe ? localStorage.getItem('email') : '';
		this.state = {
			error: null,
			email,
			password: '',
			rememberMe
		};
	}

	handleChange = (event) => {
		const target = event.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	};

	submit = (event) => {
		event.preventDefault();

		localStorage.setItem('rememberMe', this.state.rememberMe);
		if (this.state.rememberMe) localStorage.setItem('email', this.state.email);

		const rand = Math.random();

		if (rand > 0.5) {
			this.props.setToken('banana');
		} else {
			const err = Math.random();
			if (err > 0.5) {
				this.setState({ error: 'Usuário inexistente!' });
			} else {
				this.setState({ error: 'Senha inválida!' });
			}
		}
	};

	render() {
		console.log(this.state);
		return (
			<form onSubmit={this.submit}>
				<label>
					{'Email:'}
					<input id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
				</label>
				<br />

				<label>
					{'Senha:'}
					<input
						id="password"
						name="password"
						type="password"
						value={this.state.password}
						onChange={this.handleChange}
					/>
				</label>
				<br />

				<label>
					<input
						id="rememberMe"
						name="rememberMe"
						type="checkbox"
						checked={this.state.rememberMe}
						onChange={this.handleChange}
					/>
					{'Lembrar Email'}
				</label>
				<br />

				{this.state.error !== null ? <span style={{ color: 'red' }}>{this.state.error}</span> : null}

				<button type="submit">{'Login'}</button>
			</form>
		);
	}
}
