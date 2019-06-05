import React, { Component } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import NavBarDocente from './navBarDocente.js'

const data = [{name: 'Janeiro', uv: 100, pv: 2400, amt: 2400}, {name: 'Fevereiro', uv: 150, pv: 2400, amt: 2400},
{name: 'Março', uv: 135, pv: 2400, amt: 2400}, {name: 'Abril', uv: 270, pv: 2400, amt: 2400}, {name: 'Maio', uv: 200, pv: 2400, amt: 2400}];

export class RelatorioAtivos extends Component {
  render() {
    return (
      <div>
        <NavBarDocente ></NavBarDocente>
        <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
          <LineChart width={900} height={600} data={data} margin={{ top: 20, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>
        <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
          {/* FIXME File is not downloading */}
          <a type="button" className="btn btn-info" download href='../../relatorio-ativos.pdf'> Download PDF </a>   
        </div>
      </div>
    )
  }
}

export default RelatorioAtivos;
