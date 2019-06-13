import React, { Component, Fragment } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

const data = [
  { name: "Janeiro", uv: 100, pv: 2400, amt: 2400 },
  { name: "Fevereiro", uv: 150, pv: 2400, amt: 2400 },
  { name: "Março", uv: 135, pv: 2400, amt: 2400 },
  { name: "Abril", uv: 270, pv: 2400, amt: 2400 },
  { name: "Maio", uv: 200, pv: 2400, amt: 2400 }
];

export class UsuariosAtivos extends Component {
  render() {
    return (
      <Fragment>
        <h3>Número de usuários ativos por mês</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <LineChart
            width={600}
            height={400}
            data={data}
            margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
          >
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        />
      </Fragment>
    );
  }
}

export default UsuariosAtivos;
