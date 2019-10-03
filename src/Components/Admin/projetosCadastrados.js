import React, { Component, Fragment } from 'react'
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    BarChart,
    Bar
  } from "recharts";

const data2 = [
    {
      name: "Janeiro",
      "2018": 50,
      "2019": 120,
      amt: 2400
    },
    {
      name: "Fevereiro",
      "2018": 60,
      "2019": 210,
      amt: 2210
    },
    {
      name: "Março",
      "2018": 100,
      "2019": 500,
      amt: 2290
    },
    {
      name: "Abril",
      "2018": 80,
      "2019": 80,
      amt: 2000
    },
    {
      name: "Maio",
      "2018": 120,
      "2019": 300,
      amt: 2181
    },
    {
      name: "Junho",
      "2018": 90,
      "2019": 134,
      amt: 2500
    },
    {
      name: "Julho",
      "2018": 40,
      "2019": 50,
      amt: 2100
    }
  ];

export class projetosCadastrados extends Component {
    render() {
        return (
            <Fragment>
                <h3>Número de projetos cadastrados mensalmente</h3>
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
          </Fragment>
        )
    }
}

export default projetosCadastrados
