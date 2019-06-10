import React, { Component } from 'react';
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
						const { value: fruit } = Swal.fire({
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
						const { value: fruit } = Swal.fire({
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
						const { value: fruit } = Swal.fire({
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
		const { value: fruit } = Swal.fire({
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
					if (value === 'C') {
						let url = '/Docente/Projetos/1/Edital/1/create';
						window.location.href = url;
					} else if (value === 'D') {
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
	render() {
		return (
			<Switch>
				<Route
					exact
					path="/Docente/Projetos"
					render={(props) => (
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
					render={(props) => <CadastroProjeto handleSubmit={this.handleSubmit} />}
				/>
				<Route
					exact
					path="/Docente/Projetos/relatorios/:id"
					render={(props) => <RelatorioProjetos projetos={this.state.projetos} />}
				/>
				<Route
					exact
					path="/Docente/Projetos/edit/:id"
					render={(props) => <AtualizarProjeto handleEdit={this.handleEdit} />}
				/>
				<Route exact path="/Docente/Projetos/relatorioGeral" render={(props) => <RelatorioGeral />} />
				<Route
					exact
					path="/Docente/Projetos/:id"
					render={(props) => <ProjetoItemDocente handleClickEdit={this.handleClickEdit} />}
				/>
				<Route
					exact
					path="/Docente/Projetos/:id/Edital/:id/create"
					render={(props) => <CreateEdital handleCreateEdital={this.handleCreateEdital} />}
				/>
				<Route
					exact
					path="/Docente/Projetos/:id/Edital/:id/edit"
					render={(props) => <EditEdital handleEditEdital={this.handleEditEdital} />}
				/>
				<Route
					exact
					path="/Docente/Projetos/:id/Edital/:id/visualize"
					render={(props) => (
						<VisualizeEdital
							handleVisualizeEdital={this.handleVisualizeEdita}
							handleGetInscritos={this.handleGetInscritos}
						/>
					)}
				/>
				<Route
					exact
					path="/Docente/Projetos/:id/Edital/:id/signedUp"
					render={(props) => <VerificarInscritos handleLancarEdital={this.handleLancarEdital} />}
				/>
				<Route exact path="/Docente/profile" component={ProfileDocente} />
			</Switch>
		);
	}
}

export default ctrl_Docente;
