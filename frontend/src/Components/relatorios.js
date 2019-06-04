import React, { Component } from 'react'

export class relatorios extends Component {
  
  render() {
    return (
      <div className='container'>
        {this.props.projetos.map( projeto => (
            <div className="container">
                <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{projeto.titulo}</h5>
                      <p className="card-text">{projeto.resumo}</p>
                      <div className='btn-toolbar mr-2'>
                      <a download href='../../public/Arq.pdf' target='_blank' type="button">Download Relatório</a>
                      </div>
                    </div>
                </div>
            </div>
        ))}
        <div className='container'>
            <a download href='../../public/Arq.pdf' target='_blank' type="button" className="btn btn-danger btn-md">Download Relatório Geral</a>
        </div>
      </div>  
    )
  }
}

export default relatorios
