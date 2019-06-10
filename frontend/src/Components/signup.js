import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavBarDiscente from './navBarDiscente';

export class signup extends Component {

    state = {
        "nome": "Caio Kikuti",
        "historico": "",
        "curiculo": "",
        "resposta":""
    }

    handleChange = (e) =>  {
        this.setState({[e.target.name] : e.target.value});
      }

      onSubmit = (e) => {
        e.preventDefault();
        this.props.handleInscricao(this.state);
      }

      handleSelection = (nome, val) => {
        this.setState({[nome] : val})
      }


  render() {
    return (
        <div>
            <NavBarDiscente></NavBarDiscente>
            <div className="container">
                <h1 style={{textAlign: 'center'}}>Inscrição</h1>
                <form onSubmit={(e) => this.onSubmit(e)}>
                    <div className="form-group">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Nome</span>
                            </div>
                            <input name='Nome' value={this.state.nome} onChange={(e) => this.handleChange(e)} type="text" className="form-control" disabled="true" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Historico escolar</span>
                            </div>
                            <input name='historico' type="file" value={this.state.historico} onChange={(e) => this.handleChange(e)} type="text" className="form-control" placeholder="historico" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Curiculo</span>
                            </div>
                            <input name='curiculo' type="file" value={this.state.curiculo} onChange={(e) => this.handleChange(e)} type="text" className="form-control" placeholder="curiculo" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        
                        <div className="input-group" style={{paddingBottom:"20px"   }}>
                            <div className="input-group-prepend">
                                <span className="input-group-text">Pré-requisitos</span>
                            </div>
                            <textarea name='resposta' value={this.state.resposta} onChange={(e) => this.handleChange(e)} className="form-control" aria-label="With textarea"></textarea>
                        </div>
                          
                    </div>
                    <button type="submit" value='Submit'  className="btn btn-dark" style={{float: 'right'}}> Enviar inscrição </button>
                </form>
                <Link type="submit" className="btn btn-danger" to='/Projetos/search'>Cancelar</Link>
            </div>
        </div>
    )
  }
}

export default signup
