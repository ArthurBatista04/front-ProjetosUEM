import React, { Component } from 'react'

export class cadastroProjeto extends Component {
    onSubmit(e){
        e.preventDefault();
      }
    
  
    render() {
    return (
        <div class="container">
        <div className="container-fluid">
            <div className="container">
                <div className="formBox">
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <div className="row">
                            <div className="col-sm-12">
                                <h1>Cadastrar Projeto</h1>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-6">
                                <div className="inputBox ">
                                    <input type="text" name="" className="input" placeholder="Nome do projeto"/>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="inputBox">
                                    <input type="text" name="" className="input" placeholder="Nome do orientador"/>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-6">
                                <div className="inputBox">
                                    <input type="text" name="" className="input" placeholder="Nome do coorientador"/>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="inputBox">
                                    <input type="text" name="" className="input" placeholder=""/>
                                </div>
                            </div>
                        </div>
{/* ---------------------------------------------dropdowns---------------------------------------------------------------------------------- */}
                        <div className="row">
                            <div className="col-md-3 col-sm-12">
                                <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Tipos de projeto
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <button class="dropdown-item" type="button">Action</button>
                                        <button class="dropdown-item" type="button">Another action</button>
                                        <button class="dropdown-item" type="button">Something else here</button>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-3 col-sm-12">
                                <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Status do projeto
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <button class="dropdown-item" type="button">Action</button>
                                        <button class="dropdown-item" type="button">Another action</button>
                                        <button class="dropdown-item" type="button">Something else here</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-12">
                                <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Área do projeto
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <button class="dropdown-item" type="button">Action</button>
                                        <button class="dropdown-item" type="button">Another action</button>
                                        <button class="dropdown-item" type="button">Something else here</button>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-12">
                                <div class="dropdown">
                                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Sub-área do projeto
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                        <button class="dropdown-item" type="button">Action</button>
                                        <button class="dropdown-item" type="button">Another action</button>
                                        <button class="dropdown-item" type="button">Something else here</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div class="row">
                                <div class="input-group date" data-provide="datepicker">
                                    <input type="text" class="form-control" />
                                    <div class="input-group-addon">
                                        <span class="glyphicon glyphicon-th"></span>
                                    </div>
                                </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12">
                                <div className="inputBox">
                                    <textarea className="input" placeholder="Resumo do projeto"></textarea>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-12">
                                <input type="submit" name="" className="button" value="Send Message" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
  }
}

export default cadastroProjeto
