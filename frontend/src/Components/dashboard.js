import React, { Component } from 'react';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	BarChart,
	Bar,
	Cell,
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis
} from 'recharts';

const data = [
	{
		name: 'Janeiro',
		'2018': 4000,
		'2019': 2400,
		amt: 2400
	},
	{
		name: 'Fevereiro',
		'2018': 3000,
		'2019': 1398,
		amt: 2210
	},
	{
		name: 'Março',
		'2018': 2000,
		'2019': 9800,
		amt: 2290
	},
	{
		name: 'Abril',
		'2018': 2780,
		'2019': 3908,
		amt: 2000
	},
	{
		name: 'Maio',
		'2018': 1890,
		'2019': 4800,
		amt: 2181
	},
	{
		name: 'Junho',
		'2018': 2390,
		'2019': 3800,
		amt: 2500
	},
	{
		name: 'Julho',
		'2018': 3490,
		'2019': 4300,
		amt: 2100
	}
];

const data2 = [
	{
		name: 'Janeiro',
		'2018': 50,
		'2019': 120,
		amt: 2400
	},
	{
		name: 'Fevereiro',
		'2018': 60,
		'2019': 210,
		amt: 2210
	},
	{
		name: 'Março',
		'2018': 100,
		'2019': 500,
		amt: 2290
	},
	{
		name: 'Abril',
		'2018': 80,
		'2019': 80,
		amt: 2000
	},
	{
		name: 'Maio',
		'2018': 120,
		'2019': 300,
		amt: 2181
	},
	{
		name: 'Junho',
		'2018': 90,
		'2019': 134,
		amt: 2500
	},
	{
		name: 'Julho',
		'2018': 40,
		'2019': 50,
		amt: 2100
	}
];
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

export class relatorioAdmin extends Component {
	render() {
		return (
			<div className="container">
				<center>
					<h3>Número de acessos mensais</h3>
					<LineChart
						width={600}
						height={400}
						data={data}
						margin={{
							top: 20,
							right: 30,
							left: 20,
							bottom: 20
						}}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Line type="monotone" dataKey="2018" stroke="#8884d8" activeDot={{ r: 8 }} />
						<Line type="monotone" dataKey="2019" stroke="#82ca9d" />
					</LineChart>

					<h3>Número de projetos cadastrados mensalemnte</h3>
					<BarChart
						width={600}
						height={400}
						data={data2}
						margin={{
							top: 5,
							right: 30,
							left: 20,
							bottom: 20
						}}
					>
						<CartesianGrid strokeDasharray="3 3" />
						<XAxis dataKey="name" />
						<YAxis />
						<Tooltip />
						<Legend />
						<Bar dataKey="2018" fill="#8884d8" />
						<Bar dataKey="2019" fill="#82ca9d" />
					</BarChart>
					<h3>Representatividade das áreas dos projetos </h3>
					<RadarChart cx={300} cy={250} outerRadius={150} width={700} height={500} data={data3}>
						<PolarGrid />
						<PolarAngleAxis dataKey="subject" />
						<PolarRadiusAxis angle={30} domain={[ 0, 150 ]} />
						<Radar name="2018" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
						<Radar name="2019" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
						<Legend />
					</RadarChart>
				</center>
			</div>
		);
	}
}

export default relatorioAdmin;
