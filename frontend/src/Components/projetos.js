import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MostrarProjeto from './mostrarProjeto.js'

export class projetos extends Component {
  
  render() {
    return (
      <div className='container'>
        {this.props.projetos.map( projeto => (
            <div className="container">
                <MostrarProjeto 
                  projeto={projeto} 
                  handleClickVisualize={this.props.handleClickVisualize}
                  handleClickDelete={this.props.handleClickDelete}  
                  handleClickEdit={this.props.handleClickEdit}
                />
            </div>
        ))}
        <Link style={{float: 'right'}} type="button" className="btn btn-dark btn-lg rounded-circle" to='/Projetos/add'>+</Link>
      </div>  
    )
  }
}

export default projetos
