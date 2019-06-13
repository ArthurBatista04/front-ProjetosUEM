import React, { Component } from "react";
import { PieChart, Pie, Sector } from "recharts";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  { name: "LFA", value: 3 },
  { name: "PAA", value: 1 },
  { name: "Mat. Aplicada", value: 1 }
];

const data2 = [
  {
    name: "Projeto 1",
    Acessos: 45,
    amt: 2400
  },
  {
    name: "Projeto 2",
    Acessos: 30,
    amt: 2210
  },
  {
    name: "Projeto 3",
    Acessos: 20,
    amt: 2290
  },
  {
    name: "Projeto 4",
    Acessos: 27,
    amt: 2000
  },
  {
    name: "Projeto 5",
    Acessos: 18,
    amt: 2181
  },
  {
    name: "Projeto 6",
    Acessos: 23,
    amt: 2500
  },
  {
    name: "Projeto 7",
    Acessos: 34,
    amt: 2100
  }
];

const renderActiveShape = props => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path
        d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        fill="#333"
      >{`Nº Projetos: ${value}`}</text>
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        fill="#999"
      >
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export class relatorioGeral extends Component {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/hqnrgxpj/";
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/30763kr7/";

  componentWillMount() {
    // Axios.get('http://localhost:3001/api' + window.location.pathname)
    //   .then(res => {
    //     res.data.dataInicio = res.data.dataInicio.slice(0,10)
    //     res.data.dataTermino = res.data.dataTermino.slice(0,10);
    //     this.setState(this.state.projeto = res.data)}
    // )
  }

  state = {
    activeIndex: 0
  };

  onPieEnter = (data, index) => {
    this.setState({
      activeIndex: index
    });
  };

  render() {
    return (
      <div className="conatiner" align="center">
        <div className="card-text">
          <h1 align="center">Relatório Geral de Projetos</h1>
        </div>
        <div className="card-body">
          <h4>Porcentagem de projetos por área</h4>
          <PieChart width={450} height={400}>
            <Pie
              activeIndex={this.state.activeIndex}
              activeShape={renderActiveShape}
              data={data}
              cx={200}
              cy={200}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              onMouseEnter={this.onPieEnter}
            />
          </PieChart>
        </div>

        <div className="card-body">
          <h4>Número de acessos mensais por projeto</h4>
          <BarChart
            width={750}
            height={300}
            data={data2}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Acessos" fill="#82ca9d" />
          </BarChart>
        </div>

        <div className="card-body">
          <h4>Dados estatísticos</h4>
          <div className="card-text">
            <h5>Média de acessos nos últimos 6 meses: 185</h5>
          </div>
          <div className="card-text">
            <h5>Média de relevência nos últimos 6 meses: 12%</h5>
          </div>
          <div className="card-text">
            <h5>Número de busca pelos nomes dos projetos: 146</h5>
          </div>
          <div className="card-text">
            <h5>Número de busca pelo nome do orientador: 57</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default relatorioGeral;
