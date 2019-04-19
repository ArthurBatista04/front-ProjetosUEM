import React, { Component } from 'react'

export class mostrarProjeto extends Component {
  render() {
    return (
        <div className="card">
            <div className="card-body">
            <h5 className="card-title">{this.props.projeto.nomeProjeto}</h5>
            <p className="card-text">{this.props.projeto.resumoProjeto}</p>
            <a href="#" className="btn btn-primary">Visualizar</a>
            </div>
      </div>
    )
  }
}

export default mostrarProjeto
