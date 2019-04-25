import React, { Component } from 'react'

export class projetoItem extends Component {

    state = {
      "nomeOrientador": "",
      "nomeCoorientador": "",
      "titulo": "",
      "dataInicio": "",
      "dataTermino": "",
      "qntdPartAtual": 'none',
      "qntdPartMax": 'none',
      "requerimentos": "",
      "status": "",
      "resumo": "",
      "tipo": "",
      "area": "",
      "subarea": ''
    }

  componentWillMount(){
    

  }

  

  render() {
    return (
      <div className="container">
      {console.log(window.location.href)}
        <div className="card">
            <div className="card-body">
                <h5>Título do projeto: {this.props.titulo}</h5>
                <br/>
                <hr className="style14" />
                <br/>
                <h5>Orientador: {this.props.nomeOrientador}</h5>
                <br/>
                <hr className="style14" />
                <br/>
                <h5>Coorientador: {this.props.nomeCoorientador}</h5>
                <br/>
                <hr className="style14" />
                <br/>
                <h5>Área: {this.props.area}</h5>
                <br/>
                <hr className="style14" />
                <br/>
                <h5>Sub-área: {this.props.subarea}</h5>
                <br/>
                <hr className="style14" />
                <br/>
                <h5>Tipo projeto: {this.props.tipo}</h5>
                <br/>
                <hr className="style14" />
                <br/>
                <h5>Quantidade de participantes atual: {this.props.qntdPartAtual}</h5>
                <br/>
                <hr className="style14" />
                <br/>
                <h5>Quantidade de participantes máxima: {this.props.qntdPartMax}</h5>
                <br/>
                <hr className="style14" />
                <br/>
                <h5>Resumo:</h5> 
            </div> 
        </div>
        <div style={{paddingTop: '2rem'}}>
          <button className="btn btn-info" style={{float: 'right'}}> Editar </button>
        </div>
      </div>
    )
  }
}

export default projetoItem

