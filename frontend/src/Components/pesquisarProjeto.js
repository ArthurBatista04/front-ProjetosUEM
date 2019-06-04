import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProjetosDiscentes from './projetoDiscente.js';

export class pesquisarProjeto extends Component {
	state = {
		titulo: '',
		nomeOrientador: '',
		tipo: '',
		area: '',
		subarea: '',
		projetosPesquisa: []
	};

	handleSelection = (nome, val) => {
		this.setState({ [nome]: val });
	};

	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.handleSubmitSearch(this.state);
		this.setState(
			(this.state.projetosPesquisa = [
				{ id: 1, titulo: 'titulo1', resumo: 'resumo1' },
				{ id: 2, titulo: 'titulo2', resumo: 'resumo2' }
			])
		);
		console.log(this.state.projetosPesquisa);
	};

	render() {
		return (
			<div className="container">
				<div style={{ paddingTop: 2 + 'rem' }}>
					<div className="row">
						<div className="col-12">
							<form onSubmit={(e) => this.onSubmit(e)}>
								<div className="form-row">
									<div className="col form-group">
										<input
											type="text"
											className="form-control"
											name="titulo"
											placeholder="Nome do projeto"
											onChange={(e) => this.handleChange(e)}
										/>
									</div>
									<div className="col form-group">
										<input
											type="text"
											className="form-control"
											name="nomeOrientador"
											placeholder="Nome do orientador"
											onChange={(e) => this.handleChange(e)}
										/>
									</div>
								</div>
								<div className="input-group mb-3" style={{ justifyContent: 'space-between' }}>
									<div className="input-group-prepend">
										<button
											className="btn btn-outline-secondary dropdown-toggle"
											type="button"
											data-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false"
										>
											{this.state.tipo || 'Tipo do projeto'}
										</button>
										<div className="dropdown-menu">
											<a
												className="dropdown-item"
												onClick={() => this.handleSelection('tipo', 'PIC')}
											>
												PIC
											</a>
											<a
												className="dropdown-item"
												onClick={() => this.handleSelection('tipo', 'PIBIC')}
											>
												PIBIC
											</a>
											<a
												className="dropdown-item"
												onClick={() => this.handleSelection('tipo', 'PIBITI')}
											>
												PIBITI
											</a>
										</div>
									</div>

									<div className="input-group-prepend">
										<button
											className="btn btn-outline-secondary dropdown-toggle"
											type="button"
											data-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false"
										>
											{this.state.area || 'Área do projeto'}
										</button>
										<div className="dropdown-menu">
											<a
												className="dropdown-item"
												onClick={() => this.handleSelection('area', 'Exatas')}
											>
												Ciencias Exatas
											</a>
											<a
												className="dropdown-item"
												onClick={() => this.handleSelection('area', 'Humanas')}
											>
												Ciencias Humanas
											</a>
											<a
												className="dropdown-item"
												onClick={() => this.handleSelection('area', 'Biologicas')}
											>
												Ciencias Biologicas
											</a>
										</div>
									</div>

									<div className="input-group-prepend">
										<button
											className="btn btn-outline-secondary dropdown-toggle"
											type="button"
											data-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false"
										>
											{this.state.subarea || 'Subarea do projeto'}
										</button>
										<div className="dropdown-menu">
											<a
												className="dropdown-item"
												onClick={() => this.handleSelection('subarea', 'Cienca da computacao')}
											>
												Cienca da computacao
											</a>
											<a
												className="dropdown-item"
												onClick={() => this.handleSelection('subarea', 'Matematica')}
											>
												Matematica
											</a>
											<a
												className="dropdown-item"
												onClick={() => this.handleSelection('subarea', 'Filosofia')}
											>
												Filosofia
											</a>
										</div>
									</div>
								</div>
								<button
									type="submit"
									value="Submit"
									className="btn btn-dark"
									style={{ float: 'right' }}
								>
									Pesquisar
								</button>
							</form>
							<Link type="submit" className="btn btn-danger" to="/">
								Voltar
							</Link>
						</div>
					</div>
				</div>
				<div style={{ paddingTop: 2 + 'rem' }}>
					<ProjetosDiscentes
						handleClickVisualize={this.props.handleClickVisualize}
						projetos={this.state.projetosPesquisa}
					/>
				</div>
			</div>
		);
	}
}

export default pesquisarProjeto;
