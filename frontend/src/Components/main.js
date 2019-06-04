import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';
import CadastroProjeto from './cadastroProjeto.js'
import AtualizarProjeto from './atualizarProjeto.js'
import Projetos from './projetos.js'
import ProjetoItem from './projetoItem.js'
import Relatorios from './relatorios.js'
import Axios from 'axios'


export class main extends Component {

  state = {
    projetos: [
      {
        "titulo": "Game Theory",
        "resumo": "Game theory is the study of mathematical models of strategic interaction between rational decision-makers."
      },
      {
        "titulo": "Graph Theory",
        "resumo": "In mathematics, graph theory is the study of graphs, which are mathematical structures used to model pairwise relations between objects."
      }
    ]
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

  handleClickEdit = (id) => {
    let url = '/Projetos/edit/' + id
    window.location.href = url
  }


  handleClickDelete = (id) => {
    Axios.delete(`http://localhost:3001/api/Projetos/${id}/delete`)
      .then(res => {
       console.log(res)
      }).catch(error => {
        console.log(error)
      })
      window.location.href = '/'  
  }


  handleEdit = (editedProject) => {Axios.put('http://localhost:3001/api/Projetos/'+editedProject.id, editedProject)}

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
    window.location.href = '/'
  };

  render() {
    return (
        <Switch>
          <Route exact path='/' render={ 
            (props) => <Projetos 
              projetos={this.state.projetos}
              handleClickVisualize={this.handleClickVisualize}
              handleClickDelete={this.handleClickDelete}/>
            }/>
          <Route exact path='/Projetos/add' render = {
            (props) => <CadastroProjeto handleSubmit={this.handleSubmit} />
          } />
          <Route exact path='/Projetos/relatorios' render={
            (props) => <Relatorios
            projetos={this.state.projetos}
              />
            }/>
          <Route exact path='/Projetos/edit/:id' render={
            (props) => <AtualizarProjeto
              handleEdit={this.handleEdit}/>
          }/>
          <Route exact path='/Projetos/:id' render={
            (props) => <ProjetoItem
              handleClickEdit={this.handleClickEdit}
              />
            }/>
        </Switch>
    )
  }
}


export default main;