import React, { Component, Fragment } from 'react';
import { Legend, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const data3 = [
	{
		subject: 'Ciências Exatas e da Terra',
		A: 120,
		B: 110,
		fullMark: 150
	},
	{
		subject: 'Ciências Biológicas',
		A: 98,
		B: 130,
		fullMark: 150
	},
	{
		subject: 'Ciências Sociais Aplicadas',
		A: 86,
		B: 130,
		fullMark: 150
	},
	{
		subject: 'Ciências da Saúde',
		A: 99,
		B: 100,
		fullMark: 150
	},
	{
		subject: 'Ciências Agrárias',
		A: 85,
		B: 90,
		fullMark: 150
	},
	{
		subject: 'Engenharias',
		A: 65,
		B: 85,
		fullMark: 150
	},
	{
		subject: 'Ciências Humanas',
		A: 65,
		B: 85,
		fullMark: 150
	}
];

export class areasProjetos extends Component {
	render() {
		return (
			<Fragment>
				<h3>Representatividade das áreas dos projetos </h3>
				<RadarChart cx={300} cy={250} outerRadius={150} width={700} height={500} data={data3}>
					<PolarGrid />
					<PolarAngleAxis dataKey="subject" />
					<PolarRadiusAxis angle={30} domain={[ 0, 150 ]} />
					<Radar name="2018" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
					<Radar name="2019" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
					<Legend />
				</RadarChart>
			</Fragment>
		);
	}
}

export default areasProjetos;
