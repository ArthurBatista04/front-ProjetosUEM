import React, {Component, Fragment} from 'react';
import Axios from 'axios';
import Header from '../../Header/Header';
import PathName from '../../pathConst';
import moment from 'moment';
import formatDate from '../../formatDate';
import {Link} from 'react-router-dom';
class ShowProject extends Component {
	componentWillMount() {
		const token = localStorage.getItem('access_token');
		const Token = {
			headers: {
				Authorization: token
			}
		};
		const filterProjeto = {
			include: ['area', 'subarea', 'docente']
		};
		Axios.get(
			`${PathName}/api/Projetos/${this.props.idEvento}/?filter=${JSON.stringify(
				filterProjeto
			)}`,
			Token
		).then(res => {
			this.setState({projeto: res.data});
			this.setState({area: res.data.area.nome});
			this.setState({subarea: res.data.subarea.nome});
			Axios.get(`${PathName}/api/Usuarios/${res.data.docente.usuarioId}`).then(
				response => {
					console.log(response.data);
					this.setState({nomeOrientador: response.data.nome});
				}
			);
		});
	}

	buildRow = (key, value) => (
		<div className='row'>
			<div className='col s12 m6'>
				<b className='left hide-on-small-and-down'>{key}</b>
				<b className='really-center-span hide-on-med-and-up'>{key}</b>
			</div>

			<div>
				<span className='right hide-on-small-and-down'>{value}</span>
				<span className='really-center-span hide-on-med-and-up'>{value}</span>
			</div>
		</div>
	);

	state = {
		projeto: [],
		area: '',
		subarea: '',
		nomeOrientador: ''
	};

	render() {
		const {nomeOrientador, projeto, area, subarea} = this.state;
		// console.log(projeto);
		return (
			<Fragment>
				<Header />
				<div className='container'>
					<div className='card-panel z-depth-2'>
						<div className='row'>
							<div id='sobre' className='col s12'>
								<h3 style={titleStyle} className='center'>
									{projeto.titulo}
								</h3>

								<p className='basicInfo grey-text text-darken-2'>
									{projeto.resumo}
								</p>
								<br />
								<h5>
									<i className='material-icons left'>info</i>Informações
									importantes
								</h5>
								<div className='basicInfo grey-text text-darken-2'>
									<hr className='style-six' />
									{this.buildRow('Nome do orientador:', nomeOrientador)}
									{projeto.requisitos
										? this.buildRow('Tipo do projeto:', projeto.tipo)
										: null}
									{this.buildRow(
										'Inicio do projeto:',
										formatDate(
											moment
												.tz(projeto.dataInicio, 'America/Sao_Paulo')
												.format()
										)
									)}
									<hr className='style-six' />

									{this.buildRow(
										'Término do projeto:',
										formatDate(
											moment.tz(projeto.dataFim, 'America/Sao_Paulo').format()
										)
									)}
									{this.buildRow(
										'Quantidade máxima de participantes:',
										projeto.limiteParticipantes
									)}
									{this.buildRow(
										'Quantidade atual de participantes:',
										projeto.atualParticipantes
									)}
									{this.buildRow('Tipo do projeto:', projeto.tipo)}
									{this.buildRow('Área do projeto:', area)}
									{this.buildRow('Subárea do projeto:', subarea)}
								</div>
								<br />
								<Link to='/pesquisar' className='btn blue lighten-1 left'>
									Voltar
								</Link>
								<Link
									to={`/projeto/${projeto.id}/processoSeletivo`}
									className='btn blue lighten-1 right'
									style={{
										textOverflow: 'ellipsis',
										whiteSpace: 'nowrap',
										overflow: 'hidden'
									}}
								>
									Inscrever-se
								</Link>
								<Link
									to={`/projeto/email/${projeto.id}`}
									className='btn blue lighten-1 right'
									style={{
										textOverflow: 'ellipsis',
										whiteSpace: 'nowrap',
										overflow: 'hidden',
										marginRight: '5px'
									}}
								>
									Enviar email
								</Link>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

const titleStyle = {
	fontWeight: 'bold',
	fontSize: `${2}rem`,
	fontFamily: 'Nunito'
};

export default ShowProject;
