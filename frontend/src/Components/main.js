import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import CadastroProjeto from './cadastroProjeto.js';
import AtualizarProjeto from './atualizarProjeto.js';
import Projetos from './projetos.js';
import ProjetoItem from './projetoItem.js';
import LoginScreen from './loginScreen.js';
import ProfileDocente from './profileDocente.js';
import ProfileDiscente from './profileDiscente.js';
import Axios from 'axios';
import EnviarMensagem from './enviarMensagem.js';
import CreateEdital from './createEdital.js';
import EditEdital from './editEdital.js';
import VisualizeEdital from './visualizeEdital.js';
import Relatorios from './relatorios.js';
import Swal from 'sweetalert2';
import VerificarInscritos from './verficarInscritos.js';
import PesquisarProjeto from './pesquisarProjeto.js';
import RelatorioAtivos from './relatorioAtivos.js';

export class main extends Component {
	state = {
		projetos: [
			{
				titulo: 'Game Theory',
				resumo:
					'Game theory is the study of mathematical models of strategic interaction between rational decision-makers.'
			},
			{
				titulo: 'Graph Theory',
				resumo:
					'In mathematics, graph theory is the study of graphs, which are mathematical structures used to model pairwise relations between objects.'
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
				resumo: '....'
			}
		]
	};

	componentWillMount() {
		// Axios.get('http://localhost:3001/api/Projetos/getProjetos').then((res) => {
		// 	this.setState((this.state.projetos = res.data.response));
		// });
	}

	handlePS = (id) => {
		const { value: fruit } = Swal.fire({
			title: 'Selecione uma operação',
			input: 'select',
			inputOptions: {
				C: 'Criar',
				D: 'Deletar',
				A: 'Atualizar',
				V: 'Visualizar',
				I: 'Verificar Inscrições'
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
					} else if (value === 'I') {
						let url = '/Docente/Projetos/1/Edital/1/signedUp';
						window.location.href = url;
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

	handleClickVisualize = (id) => {
		let url = "/Docente/Projetos" + '/1';
		this.setState({ idVisualizar: 1 });
		window.location.href = url;
	};

	// handleClickVisualize = (id) => {
	// 	let url = window.location.href + '/1';
	// 	this.setState({ idVisualizar: 1 });
	// 	window.location.href = url;
	// };

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
		//Axios.put('http://localhost:3001/api/Projetos/' + editedProject.id, editedProject);
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

	handleEnviarMensagem = (Mensagem) => {
		//Neste caso seria pego
		Swal.fire({
			type: 'success',
			title: 'Mensagem enviada com sucesso!'
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

	handleSubmitLogin = (login) => {
		//Axios.post("", login);
	};

	handleSubmitSearch = (listSearch) => {
		console.log(listSearch.titulo);
		// Axios.get('')
	};

	render() {
		return (
			<Switch>
				<Route exact path="/Admin/Relatorios/Ativos" component={RelatorioAtivos} />
				<Route
					exact
					path="/Docente/Projetos"
					render={(props) => (
						<Projetos
							projetos={this.state.projetos}
							handlePS={this.handlePS}
							handleGerenciarProjeto={this.handleGerenciarProjeto}
						
						/>
					)}
				/>
				<Route
					exact
					path="/"
					render={(props) => <LoginScreen handleSubmitLogin={this.handleSubmitLogin} />}
				/>
				<Route exact path="/Docente/profile" component={ProfileDocente} />
				<Route exact path="/Discente/profile" component={ProfileDiscente} />
				<Route
					exact
					path="/Docente/Projetos/add"
					render={(props) => <CadastroProjeto handleSubmit={this.handleSubmit} />}
				/>
				<Route
					exact
					path="/Docente/Projetos/relatorios"
					render={(props) => <Relatorios projetos={this.state.projetos} />}
				/>
				<Route
					exact
					path="/Projetos/search"
					render={(props) => (
						// FIXME Discente visualizar projeto bugado
						<PesquisarProjeto
							handleSubmitSearch={this.handleSubmitSearch}
							handleClickVisualize={this.handleClickVisualize}
						/>
					)}
				/>
				<Route
					exact
					path="/Docente/Projetos/edit/:id"
					render={(props) => <AtualizarProjeto handleEdit={this.handleEdit} />}
				/>
				<Route
					exact
					path="/Docente/Projetos/:id"
					render={(props) => <ProjetoItem handleClickEdit={this.handleClickEdit} />}
				/>
				<Route
					exact
					path="/Projetos/:id/enviarMensagem"
					render={(props) => <EnviarMensagem handleEnviarMensagem={this.handleEnviarMensagem} />}
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
					render={(props) => <VisualizeEdital handleVisualizeEdital={this.handleVisualizeEdita} />}
				/>
				<Route
					exact
					path="/Docente/Projetos/:id/Edital/:id/signedUp"
					render={(props) => <VerificarInscritos handleVerificarInscritos={this.handleVerificarInscritos} />}
				/>
			</Switch>
		);
	}
}

export default main;
