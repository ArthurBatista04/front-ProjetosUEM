import React, { Component } from 'react';
import '../loginScreen.css';

export class loginScreen extends Component {
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

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.handleSubmitLogin(this.state);
		window.location.href = '/';
	};

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
						<div className="card card-signin my-5">
							<div className="card-body">
								<h5 className="card-title text-center">Entrar</h5>
								<form className="form-signin" onSubmit={(e) => this.onSubmit(e)}>
									<div className="form-label-group">
										<input
											type="email"
											id="inputEmail"
											className="form-control"
											placeholder="Email address"
											name="email"
											required
											autoFocus
											onChange={(e) => this.handleChange(e)}
										/>
										<label htmlFor="inputEmail">Email</label>
									</div>

									<div className="form-label-group">
										<input
											type="password"
											id="inputPassword"
											className="form-control"
											placeholder="Password"
											name="password"
											required
											onChange={(e) => this.handleChange(e)}
										/>
										<label htmlFor="inputPassword">Senha</label>
									</div>

									<div className="custom-control custom-checkbox mb-3">
										<input type="checkbox" className="custom-control-input" id="customCheck1" />
										<label className="custom-control-label" htmlFor="customCheck1">
											Lembrar minha senha
										</label>
									</div>
									<button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">
										Entrar
									</button>
									<hr className="my-4" />
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default loginScreen;
