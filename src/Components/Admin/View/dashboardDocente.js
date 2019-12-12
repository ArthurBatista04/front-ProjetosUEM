import React, {Fragment} from 'react';
import Axios from 'axios';
import PathConst from '../../pathConst';
import {Title} from 'react-admin';
import compose from 'recompose/compose';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import {Bar} from 'react-chartjs-2';
import {MDBContainer} from 'mdbreact';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import {withStyles} from '@material-ui/core/styles';
import {translate} from 'react-admin';
const styles = {
	media: {
		height: '25em'
	}
};

class DashboardDocente extends React.Component {
	state = {
		dadosUsuarios: {
			labels: [
				'Janeiro',
				'Fevereiro',
				'Março',
				'Abril',
				'Maio',
				'Junho',
				'Julho',
				'Agosto',
				'Setembro',
				'Outubro',
				'Novembro',
				'Dezembro'
			],
			datasets: [
				{
					label: 'Quantidade de usuarios cadastrados',
					data: [0, 4, 5, 9, 0, 0, 0, 0, 0, 0, 0, 0],
					backgroundColor: [
						'rgba(255, 134,159,0.4)',
						'rgba(98,  182, 239,0.4)',
						'rgba(255, 218, 128,0.4)',
						'rgba(113, 205, 205,0.4)',
						'rgba(170, 128, 252,0.4)',
						'rgba(255, 177, 101,0.4)'
					],
					borderWidth: 2,
					borderColor: [
						'rgba(255, 134, 159, 1)',
						'rgba(98,  182, 239, 1)',
						'rgba(255, 218, 128, 1)',
						'rgba(113, 205, 205, 1)',
						'rgba(170, 128, 252, 1)',
						'rgba(255, 177, 101, 1)'
					]
				}
			]
		},
		dadosProjetos: {
			labels: [
				'Janeiro',
				'Fevereiro',
				'Março',
				'Abril',
				'Maio',
				'Junho',
				'Julho',
				'Agosto',
				'Setembro',
				'Outubro',
				'Novembro',
				'Dezembro'
			],
			datasets: [
				{
					label: 'Quantidade de projetos cadastrados',
					data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					backgroundColor: [
						'rgba(0, 0,0,0.4)',
						'rgba(98,  182, 239,0.4)',
						'rgba(255, 218, 128,0.4)',
						'rgba(113, 205, 205,0.4)',
						'rgba(170, 128, 252,0.4)',
						'rgba(255, 177, 101,0.4)'
					],
					borderWidth: 2,
					borderColor: [
						'rgba(0, 0, 0, 1)',
						'rgba(98,  182, 239, 1)',
						'rgba(255, 218, 128, 1)',
						'rgba(113, 205, 205, 1)',
						'rgba(170, 128, 252, 1)',
						'rgba(255, 177, 101, 1)'
					]
				}
			]
		},
		dadosVisualizacoes: {
			labels: [
				'Janeiro',
				'Fevereiro',
				'Março',
				'Abril',
				'Maio',
				'Junho',
				'Julho',
				'Agosto',
				'Setembro',
				'Outubro',
				'Novembro',
				'Dezembro'
			],
			datasets: [
				{
					label: 'Quantidade de visualizações',
					data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					backgroundColor: [
						'rgba(0, 0,255,0.4)',
						'rgba(98,  182, 239,0.4)',
						'rgba(255, 218, 128,0.4)',
						'rgba(113, 205, 205,0.4)',
						'rgba(170, 128, 252,0.4)',
						'rgba(255, 177, 101,0.4)'
					],
					borderWidth: 2,
					borderColor: [
						'rgba(0,0 ,255, 1)',
						'rgba(98,  182, 239, 1)',
						'rgba(255, 218, 128, 1)',
						'rgba(113, 205, 205, 1)',
						'rgba(170, 128, 252, 1)',
						'rgba(255, 177, 101, 1)'
					]
				}
			]
		},
		barChartOptions: {
			responsive: true,
			maintainAspectRatio: true,
			scales: {
				xAxes: [
					{
						// barPercentage: 1,
						gridLines: {
							display: true,
							color: 'rgba(0, 0, 0, 0.1)'
						}
					}
				],
				yAxes: [
					{
						gridLines: {
							display: true,
							color: 'rgba(0, 0, 0, 0.1)'
						},
						ticks: {
							beginAtZero: true
						}
					}
				]
			}
		}
	};
	componentWillMount = () => {
		const token = localStorage.getItem('access_token');
		const Token = {
			headers: {
				Authorization: token
			}
		};
		Axios.get(`${PathConst}/api/relatorioAdmins/1`, Token).then(res => {
			let newData = [...this.state.dadosUsuarios.datasets[0].data];
			let newData2 = [...this.state.dadosProjetos.datasets[0].data];
			let newData3 = [...this.state.dadosVisualizacoes.datasets[0].data];
			newData[0] = res.data.qntdProjetosCriados;
			newData2[0] = res.data.qntdUsuariosCriados;
			newData3[0] = res.data.qntdVisualizacoesTotal;
			this.state.dadosUsuarios.datasets[0].data = newData;
			this.state.dadosProjetos.datasets[0].data = newData2;
			this.state.dadosVisualizacoes.datasets[0].data = newData3;

			this.forceUpdate();
			// this.setState(prevState => ({
			// 	...prevState,
			// 	dataLine: {
			// 		...prevState.dataLine,
			// 		datasets: [
			// 			...prevState.dataLine.datasets,
			// 			(prevState.dataLine.datasets.datasets[0].data: newData)
			// 		]
			// 	}
			// }));
		});
	};
	render() {
		return (
			<Fragment>
				<Card>
					<Title title='ProjetosUEM' />
					<h3 className='mt-5' style={{color: 'white', textAlign: 'center'}}>
						Informação
					</h3>
					<MDBContainer>
						<Bar
							data={this.state.dadosUsuarios}
							options={this.state.barChartOptions}
						/>
					</MDBContainer>
				</Card>
				<Card>
					<Title title='ProjetosUEM' />
					<h3 className='mt-5' style={{color: 'white', textAlign: 'center'}}>
						Informação
					</h3>
					<MDBContainer>
						<Bar
							data={this.state.dadosProjetos}
							options={this.state.barChartOptions}
						/>
					</MDBContainer>
				</Card>
				<Card>
					<Title title='ProjetosUEM' />
					<h3 className='mt-5' style={{color: 'white', textAlign: 'center'}}>
						Informação
					</h3>
					<MDBContainer>
						<Bar
							data={this.state.dadosVisualizacoes}
							options={this.state.barChartOptions}
						/>
					</MDBContainer>
					<CardActions style={{justifyContent: 'flex-end'}}>
						<Button href={`http://localhost:3000/`}>
							<HomeIcon style={{paddingRight: '0.5em'}} />
							{'Página Inicial'}
						</Button>
					</CardActions>
				</Card>
			</Fragment>
		);
	}
}

const enhance = compose(withStyles(styles), translate);

export default enhance(DashboardDocente);
