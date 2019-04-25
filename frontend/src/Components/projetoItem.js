import React, { Component } from 'react'
import Axios from 'axios'

export class projetoItem extends Component {

  state = {
      projeto: []
  }

  componentWillMount(){
    Axios.get('http://localhost:3001/api/Projetos/'+ this.props.idProjeto)
      .then(res => {
        this.setState(this.state.projeto = res.data)}
    )
  }

  render() {
    return (
      <div className="container">
        <div className="card">
            <div className="card-body">
                <h5>Título do projeto: {this.state.projeto.titulo}</h5>
                <br/>
                <hr className="style14" />
                <br/>
                <h5>Orientador: {this.state.projeto.nomeOrientador}</h5>
                <br/>
                <hr className="style14" />
                <br/>
                <h5>Coorientador: {this.state.projeto.nomeCoorientador}</h5>
                <br/>
                <hr className="style14" />
                <br/>
                <h5>Área: {this.state.projeto.area}</h5>
                <br/>
                <hr className="style14" />
                <br/>
                <h5>Sub-área: {this.state.projeto.subarea}</h5>
                <br/>
                <hr className="style14" />
                <br/>
                <h5>Tipo projeto: {this.state.projeto.tipo}</h5>
                <br/>
                <hr className="style14" />
                <br/>
                <h5>Quantidade de participantes atual: {this.state.projeto.qntdPartAtual}</h5>
                <br/>
                <hr className="style14" />
                <br/>
                <h5>Quantidade de participantes máxima: {this.state.projeto.qntdPartMax}</h5>
                <br/>
                <hr className="style14" />
                <br/>
                <h5>Resumo: {this.state.projeto.resumo}</h5> 
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

