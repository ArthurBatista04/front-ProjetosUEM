import React, { Component, Fragment } from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";

const data = [
    {
      name: "Janeiro",
      "2018": 4000,
      "2019": 2400,
      amt: 2400
    },
    {
      name: "Fevereiro",
      "2018": 3000,
      "2019": 1398,
      amt: 2210
    },
    {
      name: "Março",
      "2018": 2000,
      "2019": 9800,
      amt: 2290
    },
    {
      name: "Abril",
      "2018": 2780,
      "2019": 3908,
      amt: 2000
    },
    {
      name: "Maio",
      "2018": 1890,
      "2019": 4800,
      amt: 2181
    },
    {
      name: "Junho",
      "2018": 2390,
      "2019": 3800,
      amt: 2500
    },
    {
      name: "Julho",
      "2018": 3490,
      "2019": 4300,
      amt: 2100
    }
  ];

export class acessosMensais extends Component {
    render() {
        return (
            <Fragment>
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
                <Line
                    type="monotone"
                    dataKey="2018"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="2019" stroke="#82ca9d" />
                </LineChart>
            </Fragment>
        )
    }
}

export default acessosMensais
