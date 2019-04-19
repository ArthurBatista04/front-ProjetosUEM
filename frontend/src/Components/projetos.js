import React, { Component } from 'react'
import MostrarProjeto from './mostrarProjeto.js'

export class projetos extends Component {
  state = {
    projetos: [
      {
        nomeProjeto: 'teste1',
        nomeOrientador: 'joão',
        resumoProjeto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut ultrices magna. In ut tincidunt lacus, eget dignissim quam'
      },
      {
        nomeProjeto: 'teste2',
        nomeOrientador: 'carlos',
        resumoProjeto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut ultrices magna. In ut tincidunt lacus, eget dignissim quam'
      },
      {
        nomeProjeto: 'teste3',
        nomeOrientador: 'maria',
        resumoProjeto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut ultrices magna. In ut tincidunt lacus, eget dignissim quam'
      }
    ]
  }

  render() {
    return (
            this.state.projetos.map(projeto => (
                <div className="container">
                    <MostrarProjeto projeto={projeto}/>
                </div>
            ))
    )
  }
}

export default projetos
