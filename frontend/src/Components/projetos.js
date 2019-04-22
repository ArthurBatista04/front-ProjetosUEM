import React, { Component } from 'react'
import MostrarProjeto from './mostrarProjeto.js'
import { Route } from 'react-router-dom'

export class projetos extends Component {
  state = {
    projetos: [
      {
        id: '1',
        nomeProjeto: 'teste1',
        nomeOrientador: 'joão',
        resumoProjeto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut ultrices magna. In ut tincidunt lacus, eget dignissim quam'
      },
      {
        id: '2',
        nomeProjeto: 'teste2',
        nomeOrientador: 'carlos',
        resumoProjeto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut ultrices magna. In ut tincidunt lacus, eget dignissim quam'
      },
      {
        id: '3',
        nomeProjeto: 'teste3',
        nomeOrientador: 'maria',
        resumoProjeto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut ultrices magna. In ut tincidunt lacus, eget dignissim quam'
      }
    ]
  }

  handleClickVisualize = (id) => {
    let url = '/projeto/' + id;
    window.location.href = url;
  }

  handleClickDelete = (id) => {
    console.log('vai deletar o id' + id);
  }

  render() {
    return (
            this.state.projetos.map((projeto) => (
                <div className="container">
                    <MostrarProjeto 
                      projeto={projeto} 
                      handleClickVisualize={this.handleClickVisualize}
                      handleClickDelete={this.handleClickDelete}  
                      handleClickEdit={this.handleClickEdit}
                    />
                </div>
            ))
    )
  }
}

export default projetos
