import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavBarDocente from './navBarDocente';

export class cadastroProjeto extends Component {

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

    handleChange = (e) =>  {
        this.setState({[e.target.name] : e.target.value});
      }

      onSubmit = (e) => {
        e.preventDefault();
        this.props.handleSubmit(this.state);
      }

      handleSelection = (nome, val) => {
        this.setState({[nome] : val})
      }


  render() {
    return (
        <div>
            <NavBarDocente></NavBarDocente>
            <div className="container">
                <h1 style={{textAlign: 'center'}}>Cadastro de projeto</h1>
                <form onSubmit={(e) => this.onSubmit(e)}>
                    <div className="form-group">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Nome do projeto</span>
                            </div>
                            <input name='titulo' value={this.state.titulo} onChange={(e) => this.handleChange(e)} type="text" className="form-control" placeholder="Nome do projeto" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Nome do orientador</span>
                            </div>
                            <input name='nomeOrientador' value={this.state.nomeOrientador} onChange={(e) => this.handleChange(e)} type="text" className="form-control" placeholder="Nome do orientador" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Nome do coorientador</span>
                            </div>
                            <input name='nomeCoorientador' value={this.state.nomeCoorientador} onChange={(e) => this.handleChange(e)} type="text" className="form-control" placeholder="Nome do coorientador" aria-label="Username" aria-describedby="basic-addon1" />
                        </div>
                        
                        <div className="input-group mb-3" style={{justifyContent: 'space-between'}}>
                            <div className="input-group-prepend">
                                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{this.state.tipo || 'Tipo do projeto'}</button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" onClick={() => this.handleSelection('tipo', 'PIC')}>PIC</a>
                                    <a className="dropdown-item" onClick={() => this.handleSelection('tipo', 'PIBIC')}>PIBIC</a>
                                    <a className="dropdown-item" onClick={() => this.handleSelection('tipo', 'PIBITI')}>PIBITI</a>
                                </div>
                            </div>
                            
                            <div className="input-group-prepend">
                                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{this.state.status || "Status do projeto"}</button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" onClick={() => this.handleSelection('status', 'Em recrutamento')}>Em recrutamento</a>
                                    <a className="dropdown-item" onClick={() => this.handleSelection('status', 'Em andamento')}>Em andamento</a>
                                    <a className="dropdown-item" onClick={() => this.handleSelection('status', 'Encerrado')}>Encerrado</a>
                                </div>
                            </div>

                            <div className="input-group-prepend">
                                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{this.state.area || "Área do projeto"}</button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" onClick={() => this.handleSelection('area', 'Exatas')}>Ciencias Exatas</a>
                                    <a className="dropdown-item" onClick={() => this.handleSelection('area', 'Humanas')}>Ciencias Humanas</a>
                                    <a className="dropdown-item" onClick={() => this.handleSelection('area', 'Biologicas')}>Ciencias Biologicas</a>
                                </div>
                            </div>

                            <div className="input-group-prepend">
                                <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{this.state.subarea || "Subarea do projeto"}</button>
                                <div className="dropdown-menu">

                                    <a className="dropdown-item" onClick={() => this.handleSelection('subarea', 'Cienca da computacao')}>Cienca da computacao</a>
                                    <a className="dropdown-item" onClick={() => this.handleSelection('subarea', 'Matematica')}>Matematica</a>
                                    <a className="dropdown-item" onClick={() => this.handleSelection('subarea', 'Filosofia')}>Filosofia</a>
                                </div>
                            </div>

                        </div>
                        
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Data de início</span>
                            </div>
                            <input name='dataInicio' value={this.state.dataInicio} onChange={(e) => this.handleChange(e)} type="text" className="form-control" placeholder="ex: dd/mm/aaaa"/>

                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Data de término</span>
                            </div>
                            <input name='dataTermino' value={this.state.dataTermino} onChange={(e) => this.handleChange(e)} type="text" className="form-control" placeholder="ex: dd/mm/aaaa"/>

                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="inputGroupSelect01">Quantidade máxima de participantes</label>
                            </div>
                            <select value={this.state.qntdPartMax} onChange={this.handleChange} name="qntdPartMax" className="custom-select" id="inputGroupSelect01" defaultValue="none">
                                <option value="none" disabled>Choose...</option>
                                <option value="1">Um</option>
                                <option value="2">Dois</option>
                                <option value="3">Três</option>
                            </select>

                            <div className="input-group-prepend">
                                <label className="input-group-text" htmlFor="inputGroupSelect01">Quantidade atual de participantes</label>
                            </div>
                            <select value={this.state.qntdPartAtual} onChange={this.handleChange} name="qntdPartAtual" className="custom-select" id="inputGroupSelect01" defaultValue="none">
                                <option value="none" disabled>Choose...</option>
                                <option value="1">Um</option>
                                <option value="2">Dois</option>
                                <option value="3">Três</option>
                            </select>
                        </div>

                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Resumo do projeto</span>
                            </div>
                            <textarea name='resumo' value={this.state.resumo} onChange={(e) => this.handleChange(e)} className="form-control" aria-label="With textarea"></textarea>
                        </div>
                    </div>
                    <button type="submit" value='Submit' className="btn btn-dark" style={{float: 'right'}}> Cadastrar </button>
                </form>
                <Link type="submit" className="btn btn-danger" to='/Docente/Projetos'>Cancelar</Link>
            </div>
        </div>
    )
  }
}

export default cadastroProjeto
