import React, { Component } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

export class projetoItem extends Component {
  state = {
    projeto: {
      titulo: "Técnicas de algoritmos aproximados",
      nomeOrientador: "Donald Knuth",
      nomeCoorientador: "Thomas H. Cormen",
      area: "Ciência Exatas",
      subarea: "Ciência da computação",
      tipo: "PIBIC",
      dataInicio: "17/04/2019",
      dataTermino: "17/04/2020",
      qntdPartAtual: "0",
      qntdPartMax: "3",
      resumo: "Este projeto visa estudar técnica de algoritmos.",
      id: "1"
    }
  };

  componentWillMount() {
    // Axios.get('http://localhost:3001/api' + window.location.pathname)
    //   .then(res => {
    //     res.data.dataInicio = res.data.dataInicio.slice(0,10)
    //     res.data.dataTermino = res.data.dataTermino.slice(0,10);
    //     this.setState(this.state.projeto = res.data)}
    // )
  }

  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h5>Título do projeto: {this.state.projeto.titulo}</h5>
            <br />
            <hr className="style14" />
            <br />
            <h5>Orientador: {this.state.projeto.nomeOrientador}</h5>
            <br />
            <hr className="style14" />
            <br />
            <h5>Coorientador: {this.state.projeto.nomeCoorientador}</h5>
            <br />
            <hr className="style14" />
            <br />
            <h5>Área: {this.state.projeto.area}</h5>
            <br />
            <hr className="style14" />
            <br />
            <h5>Sub-área: {this.state.projeto.subarea}</h5>
            <br />
            <hr className="style14" />
            <br />
            <h5>Tipo projeto: {this.state.projeto.tipo}</h5>
            <br />
            <hr className="style14" />
            <br />
            <h5>Data de início: {this.state.projeto.dataInicio}</h5>
            <br />
            <hr className="style14" />
            <br />
            <h5>Data de término: {this.state.projeto.dataTermino}</h5>
            <br />
            <hr className="style14" />
            <br />
            <h5>
              Quantidade de participantes atual:{" "}
              {this.state.projeto.qntdPartAtual}
            </h5>
            <br />
            <hr className="style14" />
            <br />
            <h5>
              Quantidade de participantes máxima:{" "}
              {this.state.projeto.qntdPartMax}
            </h5>
            <br />
            <hr className="style14" />
            <br />
            <h5>Resumo: {this.state.projeto.resumo}</h5>
          </div>
        </div>
        <div style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
          <Link className="btn btn-secondary" to="/Projetos/search">
            Voltar
          </Link>
          <Link
            style={{ float: "right" }}
            className="btn btn-info"
            to="/Projetos/1/Edital/1/signup"
          >
            Increver-se
          </Link>
          <Link
            className="btn btn-secondary"
            style={{ marginRight: 2 + "rem", float: "right" }}
            to="/Projetos/1/enviarMensagem"
          >
            Enviar mensagem
          </Link>
        </div>
      </div>
    );
  }
}

export default projetoItem;
