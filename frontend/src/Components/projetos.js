import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MostrarProjeto from './mostrarProjeto.js'
import NavBarDocente from './navBarDocente.js'
export class projetos extends Component {
  
  render() {
    return (
      <div>
        <NavBarDocente/>
        <div className='container'>
          {this.props.projetos.map( projeto => (
              <div className="container">
                  <MostrarProjeto 
                    projeto={projeto} 
                    handleGerenciarProjeto={this.props.handleGerenciarProjeto}
                    handlePS={this.props.handlePS}
                  />
              </div>
          ))}
          <div style={{paddingBottom:"20px"}} ></div>
          <div className='btn-toolbar mr-2' >
                <div style={{paddingLeft:"20px"}}>
                  <Link type="button" class="btn btn-dark" to= "/Docente/Projetos/add" > Novo Projeto </Link> 
                </div>
                <div style={{paddingLeft:"20px"}}>
                  <Link type="button" class="btn btn-dark" > Relatório geral </Link>   
                </div>

                
                
            </div>
          
          
        </div>  
      </div>
      
    )
  }
}

export default projetos
