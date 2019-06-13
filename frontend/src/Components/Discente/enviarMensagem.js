import React, { Component, Fragment } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import NavBarDiscente from './navBarDiscente.js';
export class enviarMensagem extends Component {
	state = {
		mensagem: '',
		emailDocente: '',
		emailDiscente: '' // seria recuperado por meio do SISAV
	};
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmitMensagem = (e) => {
		e.preventDefault();
		this.props.handleEnviarMensagem(this.state);
	};

	render() {
		return (
			<Fragment>
				<div className="container">
					<form className="text-center border border-light p-5" onSubmit={this.onSubmitMensagem}>
						<span className="h4 mb-4">Enviar mensagem</span>

						<input
							type="email"
							id="defaultContactFormEmail"
							className="form-control mb-4"
							name="emailDocente"
							disabled
							value="malbarbo@gmail.com"
						/>

						<div className="form-group">
							<textarea
								className="form-control rounded-0"
								id="exampleFormControlTextarea2"
								rows="3"
								placeholder="Mensagem"
								name="mensagem"
								onChange={(e) => this.handleChange(e)}
							/>
						</div>

						<div className="custom-control custom-checkbox mb-4">
							<input type="checkbox" className="custom-control-input" id="defaultContactFormCopy" />
							<label className="custom-control-label" for="defaultContactFormCopy">
								Me envie uma cópia desse e-mail
							</label>
						</div>
						<button className="btn btn-info" type="submit">
							Enviar mensagem
						</button>
					</form>
					<Link className="btn btn-secondary" to="/Discente/Projetos/1">
						Voltar
					</Link>
				</div>
			</Fragment>
		);
	}
}

export default enviarMensagem;
