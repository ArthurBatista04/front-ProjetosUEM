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
    idVisualizar : []
  }

  componentWillMount(){
    Axios.get('http://localhost:3001/api/Projetos')
      .then(res => {
        this.setState(this.state.projetos = res.data);
      });
  }

  handleClickVisualize = (id) => {
    let url = '/projeto/' + id
    this.setState({idVisualizar: id})
    window.location.href = url
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
              idProjeto={'1'}
              />
            }/>
        </Switch>
    )
  }
}


export default main;