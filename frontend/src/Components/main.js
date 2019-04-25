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
    Axios.get('http://localhost:3001/api/Projetos/getProjetos')
      .then(res => {
        this.setState(this.state.projetos = res.data.response);
      });
  }

  handleClickVisualize = (id) => {
    let url = '/Projetos/' + id
    this.setState({idVisualizar: id})
    window.location.href = url
  }

  handleClickDelete = (id) => {
    Axios.delete(`http://localhost:3001/api/Projetos/${id}/delete`)
      .then(res => {
       console.log(res)
      }).catch(error => {
        console.log(error)
      })
  }


  handleSubmit = (newProject) => { 
    if (newProject.dataInicio) newProject.dataInicio = Date(newProject.dataInicio);
    if (newProject.dataTermino) newProject.dataTermino = Date(newProject.dataTermino); else delete newProject["dataTermino"]
    
    Axios.post('http://localhost:3001/api/Projetos', newProject)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error.response);
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
          <Route exact path='/Projetos/:id' render={
            (props) => <ProjetoItem
              idProjeto={this.state.idVisualizar}
              />
            }/>
        </Switch>
    )
  }
}


export default main;