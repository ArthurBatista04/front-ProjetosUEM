import React, { Component } from 'react'
import MostrarProjeto from './mostrarProjeto.js'

export class projetos extends Component {
  
  render() {
    return (
      <div className='container'>
        {this.props.projetos.map((projeto) => (
            <div className="container">
                <MostrarProjeto 
                  projeto={projeto} 
                  handleClickVisualize={this.props.handleClickVisualize}
                  handleClickDelete={this.props.handleClickDelete}  
                  handleClickEdit={this.props.handleClickEdit}
                />
            </div>
        ))}
        <button style={{float: 'right'}} type="button" class="btn btn-dark btn-lg rounded-circle">+</button>
      </div>  
    )
  }
}

export default projetos
