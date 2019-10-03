import React, { Component } from 'react';
import '../loginScreen.css';

export class loginScreen extends Component {
	state = {
		email: '',
		password: '',
		type: ''
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	handleRadioClick = (e) => {
		this.setState({ type: e.target.value });
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.handleSubmitLogin(this.state.type);
	};

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
						<div className="card card-signin my-5">
							<center>
								<h1>Projetos UEM</h1>
							</center>
							<div className="card-body">
								<h5 className="card-title text-center">Entrar</h5>
								<form className="form-signin" onSubmit={(e) => this.onSubmit(e)}>
									<div className="form-label-group">
										<input
											type="email"
											id="inputEmail"
											className="form-control "
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
										<div
											style={{ paddingBottom: '20px', paddingTop: '20px' }}
											onClick={(e) => this.handleRadioClick(e)}
										>
											<div class="form-check form-check-inline">
												<input
													class="form-check-input"
													type="radio"
													id="inlineCheckbox1"
													value="Docente"
													name="inlineRadioOptions"
												/>
												<label class="form-check-label" for="inlineCheckbox1">
													Docente
												</label>
											</div>
											<div class="form-check form-check-inline">
												<input
													class="form-check-input"
													type="radio"
													id="inlineCheckbox2"
													value="Discente"
													name="inlineRadioOptions"
												/>
												<label class="form-check-label" for="inlineCheckbox2">
													Discente
												</label>
											</div>
											<div class="form-check form-check-inline">
												<input
													class="form-check-input"
													type="radio"
													id="inlineCheckbox3"
													value="Admin"
													name="inlineRadioOptions"
												/>
												<label class="form-check-label" for="inlineCheckbox3">
													Admin
												</label>
											</div>
											<div class="form-check form-check-inline" />
										</div>
										<button
											className="btn btn-lg btn-primary btn-block text-uppercase"
											type="submit"
										>
											Entrar
										</button>
									</div>
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
