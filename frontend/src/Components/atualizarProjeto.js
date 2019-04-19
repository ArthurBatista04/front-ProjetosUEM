import React, { Component } from 'react'

export class atualizarProjeto extends Component {
  render() {
    return (
      <div className="container">
            <h1 style={{textAlign: 'center'}}>Atualizar projeto</h1>
            <form action="">
                <div className="form-group">
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Nome do projeto</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Nome do projeto" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Nome do orientador</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Nome do orientador" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Nome do coorientador</span>
                        </div>
                        <input type="text" className="form-control" placeholder="Nome do coorientador" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    
                    <div className="input-group mb-3" style={{justifyContent: 'space-between'}}>
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Tipo do projeto</button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                                <div role="separator" className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Separated link</a>
                            </div>
                        </div>
                        
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Status do projeto</button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                                <div role="separator" className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Separated link</a>
                            </div>
                        </div>

                        <div className="input-group-prepend">
                            <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Área do projeto</button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                                <div role="separator" className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Separated link</a>
                            </div>
                        </div>

                        <div className="input-group-prepend">
                            <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sub-área do projeto</button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                                <div role="separator" className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Separated link</a>
                            </div>
                        </div>

                    </div>
                    
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Data de início</span>
                        </div>
                        <input type="text" className="form-control" placeholder="ex: dd/mm/aaaa" aria-label="Username" aria-describedby="basic-addon1" />

                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Data de término</span>
                        </div>
                        <input type="text" className="form-control" placeholder="ex: dd/mm/aaaa" aria-label="Username" aria-describedby="basic-addon1" />

                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="inputGroupSelect01">Quantidade máxima de participantes</label>
                        </div>
                        <select className="custom-select" id="inputGroupSelect01">
                            <option selected>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>

                        <div className="input-group-prepend">
                            <label className="input-group-text" htmlFor="inputGroupSelect01">Quantidade atual de participantes</label>
                        </div>
                        <select className="custom-select" id="inputGroupSelect01">
                            <option selected>Choose...</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>

                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Resumo do projeto</span>
                        </div>
                        <textarea className="form-control" aria-label="With textarea"></textarea>
                    </div>
                </div>
            </form>
            <button type="submit" className="btn btn-dark">Voltar</button>
            <button type="submit" className="btn btn-dark" style={{float: 'right'}}>Cadastrar</button>
      </div>
    )
  }
}

export default atualizarProjeto
