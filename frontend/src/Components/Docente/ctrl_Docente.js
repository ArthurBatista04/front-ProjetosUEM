import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import CadastroProjeto from './cadastroProjeto.js';
import AtualizarProjeto from './atualizarProjeto.js';
import Projetos from './projetos.js';
import ProjetoItemDocente from './projetoItemDocente.js';
import RelatorioProjetos from './relatorioProjeto.js';
import CreateEdital from './createEdital.js';
import EditEdital from './editEdital.js';
import VisualizeEdital from './visualizeEdital.js';
import VerificarInscritos from './verficarInscritos.js';
import ProfileDocente from './profileDocente.js';
import RelatorioGeral from './relatorioGeral.js';
import Swal from 'sweetalert2';
import NavBarDocente from './navBarDocente.js';

export class ctrl_Docente extends Component {
	state = {
		projetos: [
			{
				titulo: 'Game Theory',
				resumo:
					'Game theory is the study of mathematical models of strategic interaction between rational decision-makers.',
				id: '1'
			},
			{
				titulo: 'Graph Theory',
				resumo:
					'In mathematics, graph theory is the study of graphs, which are mathematical structures used to model pairwise relations between objects.',
				id: '2'
			},
			{
				titulo: 'Técnicas de algoritmos aproximados',
				nomeOrientador: 'Donald Knuth',
				nomeCoorientador: 'Thomas H. Cormen',
				area: 'Ciência Exatas',
				subarea: 'Ciência da computação',
				tipo: 'PIBIC',
				dataInicio: '17/04/2019',
				dataTermino: '17/04/2020',
				qntdPartAtual: '0',
				qntdPartMax: '3',
				resumo: '....',
				id: '3'
			}
		]
	};

	handlePS = (id) => {
		const { value: fruit } = Swal.fire({
			title: 'Selecione uma operação',
			input: 'select',
			inputOptions: {
				C: 'Criar',
				D: 'Deletar',
				A: 'Atualizar',
				V: 'Visualizar'
			},
			inputPlaceholder: 'Opção',
			showCancelButton: true,
			inputValidator: (value) => {
				return new Promise((resolve) => {
					if (value === 'C') {
						let url = '/Docente/Projetos/1/Edital/1/create';
						window.location.href = url;
					} else if (value === 'D') {
						Swal.fire({
							title: 'Seleciona um edital para excluir',
							input: 'select',
							inputOptions: {
								C: '17/10/2019',
								D: '30/04/2020',
								A: '10/06/2020'
							},
							inputPlaceholder: 'Data de início',
							showCancelButton: true,
							inputValidator: (value) => {
								return new Promise((resolve) => {
									Swal.fire({
										type: 'success',
										title: 'Edital deletado com sucesso!'
									});
								});
							}
						});
					} else if (value === 'A') {
						Swal.fire({
							title: 'Seleciona um edital para atualizar',
							input: 'select',
							inputOptions: {
								C: '17/10/2019',
								D: '30/04/2020',
								A: '10/06/2020'
							},
							inputPlaceholder: 'Data de início',
							showCancelButton: true,
							inputValidator: (value) => {
								return new Promise((resolve) => {
									let url = '/Docente/Projetos/1/Edital/1/edit';
									window.location.href = url;
								});
							}
						});
					} else if (value === 'V') {
						Swal.fire({
							title: 'Seleciona um edital para visualizar',
							input: 'select',
							inputOptions: {
								C: '17/10/2019',
								D: '30/04/2020',
								A: '10/06/2020'
							},
							inputPlaceholder: 'Data de início',
							showCancelButton: true,
							inputValidator: (value) => {
								return new Promise((resolve) => {
									let url = '/Docente/Projetos/1/Edital/1/visualize';
									window.location.href = url;
								});
							}
						});
					}
				});
			}
		});
	};

	handleGerenciarProjeto = (id) => {
		Swal.fire({
			title: 'Selecione uma operação',
			input: 'select',
			inputOptions: {
				D: 'Deletar',
				A: 'Atualizar',
				V: 'Visualizar'
			},
			inputPlaceholder: 'Opção',
			showCancelButton: true,
			inputValidator: (value) => {
				return new Promise((resolve) => {
					if (value === 'D') {
						Swal.fire({
							type: 'success',
							title: 'Projeto deletado com sucesso!'
						});
					} else if (value === 'A') {
						let url = '/Docente/Projetos/edit/1';
						window.location.href = url;
					} else if (value === 'V') {
						let url = '/Docente/Projetos/1';
						window.location.href = url;
					}
				});
			}
		});
	};

	handleRelatorioProjeto = (id) => {
		let url = '/Docente/Projetos/relatorios/' + id;
		window.location.href = url;
	};

	handleSubmit = (newProject) => {
		// if (newProject.dataInicio) newProject.dataInicio = Date(newProject.dataInicio);
		// if (newProject.dataTermino) newProject.dataTermino = Date(newProject.dataTermino); else delete newProject["dataTermino"]

		// Axios.post('http://localhost:3001/api/Projetos', newProject)
		// .then(function (response) {
		//   console.log(response);
		// })
		// .catch(function (error) {
		//   console.log(error.response);
		// });
		// window.location.href = '/'
		Swal.fire({
			type: 'success',
			title: 'Projeto novo criado com sucesso!'
		});
	};

	handleEdit = (editedProject) => {
		// Axios.put('http://localhost:3001/api/Projetos/'+editedProject.id, editedProject)
		Swal.fire({
			type: 'success',
			title: 'Atualização feita com sucesso!'
		});
	};

	handleGetInscritos = (idEdital) => {
		// Axios.get(`http://localhost:3001/api/Projetos/edital/+` idEdital)
		//   .then(res => {
		//    console.log(res)
		//   }).catch(error => {
		//     console.log(error)
		//   })
		window.location.href = 'signedUp';
	};

	handleRelatorioProjeto = (id) => {
		let url = '/Docente/Projetos/relatorios/' + id;
		window.location.href = url;
	};

	handleClickEdit = (id) => {
		let url = 'edit/' + '1';
		window.location.href = url;
	};

	handleClickDelete = (id) => {
		// Axios.delete(`http://localhost:3001/api/Projetos/${id}/delete`)
		//   .then(res => {
		//    console.log(res)
		//   }).catch(error => {
		//     console.log(error)
		//   })
		//   window.location.href = '/'
		Swal.fire({
			type: 'success',
			title: 'Projeto deletado com sucesso!'
		});
	};

	handleEdit = (editedProject) => {
		// Axios.put('http://localhost:3001/api/Projetos/'+editedProject.id, editedProject)
		Swal.fire({
			type: 'success',
			title: 'Atualização feita com sucesso!'
		});
	};

	handleSubmit = (newProject) => {
		// if (newProject.dataInicio) newProject.dataInicio = Date(newProject.dataInicio);
		// if (newProject.dataTermino) newProject.dataTermino = Date(newProject.dataTermino); else delete newProject["dataTermino"]

		// Axios.post('http://localhost:3001/api/Projetos', newProject)
		// .then(function (response) {
		//   console.log(response);
		// })
		// .catch(function (error) {
		//   console.log(error.response);
		// });
		// window.location.href = '/'
		Swal.fire({
			type: 'success',
			title: 'Projeto novo criado com sucesso!'
		});
	};

	handleCreateEdital = (newPS) => {
		// Axios.post(`http://localhost:3001/api/Projetos`, newPS)
		//   .then(res => {
		//    console.log(res)
		//   }).catch(error => {
		//     console.log(error)
		//   })
		//   window.location.href = '/'

		Swal.fire({
			type: 'success',
			title: 'Edital deletado com sucesso!'
		});
	};

	handleEditEdital = (edital) => {
		// Axios.post(`http://localhost:3001/api/Projetos`, newPS)
		//   .then(res => {
		//    console.log(res)
		//   }).catch(error => {
		//     console.log(error)
		//   })
		//   window.location.href = '/'

		Swal.fire({
			type: 'success',
			title: 'Edital atualizado com sucesso!'
		});
	};

	handleGetInscritos = (idEdital) => {
		// Axios.get(`http://localhost:3001/api/Projetos/edital/+` idEdital)
		//   .then(res => {
		//    console.log(res)
		//   }).catch(error => {
		//     console.log(error)
		//   })
		window.location.href = 'signedUp';
	};

	handleLancarEdital = (edital) => {
		// Axios.get(`http://localhost:3001/api/Projetos/edital/+` idEdital)
		//   .then(res => {
		//    console.log(res)
		//   }).catch(error => {
		//     console.log(error)
		//   })
		Swal.fire({
			type: 'success',
			title: 'Edital lançado com sucesso!'
		});
	};

	navbar = (component) => () => {
		return (
			<React.Fragment>
				<NavBarDocente logout={this.props.logout} />
				{component}
			</React.Fragment>
		);
	};

	render() {
		return (
			<Switch>
				<Route
					exact
					path="/Docente/Projetos"
					render={this.navbar(
						<Projetos
							projetos={this.state.projetos}
							handlePS={this.handlePS}
							handleGerenciarProjeto={this.handleGerenciarProjeto}
							handleRelatorio={this.handleRelatorioProjeto}
						/>
					)}
				/>
				<Route
					exact
					path="/Docente/Projetos/add"
					render={this.navbar(<CadastroProjeto handleSubmit={this.handleSubmit} />)}
				/>
				<Route
					path="/Docente/Projetos/relatorios/:id"
					render={this.navbar(<RelatorioProjetos projetos={this.state.projetos} />)}
				/>
				<Route
					path="/Docente/Projetos/edit/:id"
					render={this.navbar(<AtualizarProjeto handleEdit={this.handleEdit} />)}
				/>
				<Route exact path="/Docente/Projetos/relatorioGeral" render={this.navbar(<RelatorioGeral />)} />
				<Route
					exact
					path="/Docente/Projetos/:id"
					render={this.navbar(<ProjetoItemDocente handleClickEdit={this.handleClickEdit} />)}
				/>
				<Route
					exact
					path="/Docente/Projetos/:Pid/Edital/:Eid/create"
					render={this.navbar(<CreateEdital handleCreateEdital={this.handleCreateEdital} />)}
				/>
				<Route
					exact
					path="/Docente/Projetos/:id/Edital/:id/edit"
					render={this.navbar(<EditEdital handleEditEdital={this.handleEditEdital} />)}
				/>
				<Route
					exact
					path="/Docente/Projetos/:id/Edital/:id/visualize"
					render={this.navbar(
						<VisualizeEdital
							handleVisualizeEdital={this.handleVisualizeEdita}
							handleGetInscritos={this.handleGetInscritos}
						/>
					)}
				/>
				<Route
					exact
					path="/Docente/Projetos/:id/Edital/:id/signedUp"
					render={this.navbar(<VerificarInscritos handleLancarEdital={this.handleLancarEdital} />)}
				/>
				<Route exact path="/Docente/profile" render={this.navbar(<ProfileDocente />)} />

				<Redirect to="/Docente/Projetos" />
			</Switch>
		);
	}
}

export default ctrl_Docente;
