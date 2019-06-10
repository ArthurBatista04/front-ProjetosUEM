import React, { Component } from 'react';
import PesquisarProjeto from './pesquisarProjeto.js';
import ProjetoItem from './projetoItem.js';

export class ctrl_Discente extends Component {
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

	handleSubmitSearch = (listSearch) => {
		console.log(listSearch.titulo);
		// Axios.get('')
	};
	handleEnviarMensagem = (Mensagem) => {
		//Neste caso seria pego
		if (Mensagem.mensagem != '') {
			Swal.fire({
				type: 'success',
				title: 'Mensagem enviada com sucesso!'
			});
		} else {
			Swal.fire({
				type: 'warning',
				title: 'O campo mensagem não pode estar vazio!'
			});
		}
	};

	handleInscricao = (edital) => {
		// Axios.get(`http://localhost:3001/api/Projetos/edital/+` idEdital)
		//   .then(res => {
		//    console.log(res)
		//   }).catch(error => {
		//     console.log(error)
		//   })
		Swal.fire({
			type: 'success',
			title: 'Inscrição feita com sucesso!'
		});
	};

	handleClickVisualize = (id) => {
		let url = '/Discente/Projetos' + '/1';
		this.setState({ idVisualizar: 1 });
		window.location.href = url;
	};
	render() {
		return (
			<Switch>
				<Route exact path="/Discente/profile" component={ProfileDiscente} />
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
				<Route exact path="/Discente/Projetos/:id" render={(props) => <ProjetoItem />} />
				<Route
					exact
					path="/Projetos/:id/enviarMensagem"
					render={(props) => <EnviarMensagem handleEnviarMensagem={this.handleEnviarMensagem} />}
				/>
				<Route
					exact
					path="/Projetos/:id/Edital/:id/signUp"
					render={(props) => <Signup handleInscricao={this.handleInscricao} />}
				/>
			</Switch>
		);
	}
}

export default ctrl_Discente;
