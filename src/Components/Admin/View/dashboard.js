import React from 'react';
import Axios from 'axios';
import PathConst from '../../pathConst';
import { Title } from 'react-admin';
import compose from 'recompose/compose';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import { Line } from 'react-chartjs-2';
import { MDBContainer } from 'mdbreact';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';
import { withStyles } from '@material-ui/core/styles';
import { translate } from 'react-admin';
const styles = {
	media: {
		height: '25em'
	}
};
const state = {
	dataLine: {
		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
		datasets: [
			{
				label: 'My First dataset',
				fill: true,
				lineTension: 0.3,
				backgroundColor: 'rgba(225, 204,230, .3)',
				borderColor: 'rgb(205, 130, 158)',
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: 'rgb(205, 130,1 58)',
				pointBackgroundColor: 'rgb(255, 255, 255)',
				pointBorderWidth: 10,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: 'rgb(0, 0, 0)',
				pointHoverBorderColor: 'rgba(220, 220, 220,1)',
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: [65, 59, 80, 81, 56, 55, 40]
			},
			{
				label: 'My Second dataset',
				fill: true,
				lineTension: 0.3,
				backgroundColor: 'rgba(184, 185, 210, .3)',
				borderColor: 'rgb(35, 26, 136)',
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: 'rgb(35, 26, 136)',
				pointBackgroundColor: 'rgb(255, 255, 255)',
				pointBorderWidth: 10,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: 'rgb(0, 0, 0)',
				pointHoverBorderColor: 'rgba(220, 220, 220, 1)',
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: [28, 48, 40, 19, 86, 27, 90]
			}
		]
	}
};

const componentWillMount = () => {
	const token = localStorage.getItem('access_token');
	const Token = {
		headers: {
			Authorization: token
		}
	};
	Axios.get(`${PathConst}/api/relatorioAdmin`, Token).then(res => {
		return res.data;
	});
};

const Welcome = ({ classes, translate }) => (
	<Card>
		<Title title='ProjetosUEM' />
		<h3 className='mt-5' style={{ color: 'white', textAlign: 'center' }}>
			Informação
		</h3>
		<MDBContainer>
			<Line data={state.dataLine} options={{ responsive: true }} />
		</MDBContainer>
		<CardActions style={{ justifyContent: 'flex-end' }}>
			<Button href={`http://localhost:3000/`}>
				<HomeIcon style={{ paddingRight: '0.5em' }} />
				{translate('Página inicial')}
			</Button>
		</CardActions>
	</Card>
);

const enhance = compose(withStyles(styles), translate);

export default enhance(Welcome);
