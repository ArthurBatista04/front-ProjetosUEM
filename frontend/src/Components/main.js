import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import CadastroProjeto from './cadastroProjeto.js'
import AtualizarProjeto from './atualizarProjeto.js'
import Projetos from './projetos.js'
import ProjetoItem from './projetoItem.js'
import Axios from 'axios'


export class main extends Component {

  state = {
    projetos: [],
    visualizarProjeto: []
  }

  componentWillMount(){
    Axios.get('http://localhost:3001/api/Projetos')
      .then(res => {
        this.setState(this.state.projetos = res.data);
      });
  }

  handleClickVisualize = (id) => {
    let url = '/projeto/' + id
    window.location.href = url
    Axios.get('http://localhost:3001/api/Projetos/'+id)
      .then(res => {
        this.setState(this.state.visualizarProjeto = res.data);
    });
  }

  handleClickDelete = (id) => {
    console.log('vai deletar o id' + id);
  }


  handleSubmit = (newProject) => { 
    newProject.dataInicio = Date(newProject.dataInicio);
    newProject.dataTermino = Date(newProject.dataTermino);
    console.log(newProject);
    Axios.post('http://localhost:3001/api/Projetos', newProject)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  render() {
    return (
        <Switch>
          <Route exact path='/' render={ 
            (props) => <Projetos 
              projetos={this.state.projetos}
              handleClickVisualize={this.handleClickVisualize}
              handleClickDelete={this.handleClickDelete}  
              handleClickEdit={this.handleClickEdit} />
            }/>
          <Route exact path='/projeto/add' render = {
            (props) => <CadastroProjeto handleSubmit={this.handleSubmit} />
          } />
          <Route exact path='/projeto/edit/:id' component={AtualizarProjeto} />
          <Route exact path='/projeto/:id' render={
            (props) => <ProjetoItem
              projeto={this.state.visualizarProjeto}
              />
            }/>
        </Switch>
    )
  }
}


export default main;