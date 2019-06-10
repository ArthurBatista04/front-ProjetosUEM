import React, { Component } from 'react'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


const grafico1 = [
  {
    name: 'Fevereiro', Acessos: 40, amt: 2400,
  },
  {
    name: 'Março', Acessos: 30, amt: 2210,
  },
  {
    name: 'Abril', Acessos: 20, amt: 2290,
  },
  {
    name: 'Maio', Acessos: 27, amt: 2000,
  },
  {
    name: 'Junho', Acessos: 18, amt: 2181,
  },
  {
    name: 'Julho', Acessos: 60, amt: 2500,
  }
];

const grafico2 = [
  {
    name: 'Fevereiro', Relevancia: 3, amt: 2400,
  },
  {
    name: 'Março', Relevancia: 5, amt: 2210,
  },
  {
    name: 'Abril', Relevancia: 12, amt: 2290,
  },
  {
    name: 'Maio', Relevancia: 11, amt: 2000,
  },
  {
    name: 'Junho', Relevancia: 10, amt: 2181,
  },
  {
    name: 'Julho', Relevancia: 2, amt: 2500,
  }
];

export class relatorios extends Component {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  componentWillMount(){
    // Axios.get('http://localhost:3001/api' + window.location.pathname)
    //   .then(res => {
    //     res.data.dataInicio = res.data.dataInicio.slice(0,10)
    //     res.data.dataTermino = res.data.dataTermino.slice(0,10);
    //     this.setState(this.state.projeto = res.data)}
    // )
  }

  render() {
    return (
      <div className="conatiner" align="center">
        <div className="card">
            <div className="card-text">
              <h1 align="center">Relatório Geral de Projetos</h1>
            </div>
            <div className="card-body">
                <div>
                  <h4>Porcentagem de relevência do projeto</h4>
                    <LineChart
                      width={700}
                      height={300}
                      data={grafico2}
                      margin={{
                        top: 5, right: 30, left: 20, bottom: 10,
                      }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="Relevancia" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                </div>
                <div>
                 <h4>Número de acessos mensais do projeto</h4>
                    <LineChart
                      width={700}
                      height={300}
                      data={grafico1}
                      margin={{
                        top: 5, right: 30, left: 20, bottom: 10,
                      }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="Acessos" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                </div><div className="card-body">
                 <h4>Dados estatísticos</h4>
                  <div className="card-text">
                    <h5>Média de acessos nos últimos 6 meses: 75</h5>
                  </div>
                  <div className="card-text">
                    <h5>Média de relevência nos últimos 6 meses: 8%</h5>
                  </div>
                  <div className="card-text">
                    <h5>Número de busca pelo nome do projeto: 84</h5>
                  </div>
                  <div className="card-text">
                    <h5>Número de busca pelo nome do orientador: 33</h5>
                  </div>
            </div>
            </div>
            <div className="card-body">
                 <h4>Dados estatísticos</h4>
                  <div className="card-text">
                    <h5>Média de acessos nos últimos 6 meses: 75</h5>
                  </div>
                  <div className="card-text">
                    <h5>Média de relevência nos últimos 6 meses: 8%</h5>
                  </div>
                  <div className="card-text">
                    <h5>Número de busca pelo nome do projeto: 84</h5>
                  </div>
                  <div className="card-text">
                    <h5>Número de busca pelo nome do orientador: 33</h5>
                  </div>
            </div>
        </div>
      </div>
      
    );
  }
}

export default relatorios
