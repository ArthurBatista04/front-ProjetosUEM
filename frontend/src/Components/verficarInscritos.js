import React, { Component } from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'  
import NavBarDocente from './navBarDocente.js';
export class verificarInscritos extends Component {
    state = {'data' : [{
        name: 'Tanner Linsley',
        age: 26,
        curso:'Ciência da computação',
        requisitos: "Tenho todos os pré-requisitos",
        curiculo:"link",
        email: "ra105422@uem.br"
      },{
        name: 'Sandro Henrique',
        age: 20,
        curso:'Ciência da computação',
        requisitos: "Tenho todos os pré-requisitos",
        curiculo:"link",
        email: "ra98133@uem.br"
      }],
      'columns': [
        {
        Header: 'Nome',
        accessor: 'name',
      }, {
        Header: 'Ano da grauduação',
        accessor: 'age',
      }, {
        Header: 'Curso',
        accessor: 'curso'
      }, {
        Header: 'Pré-requisitos' , 
        accessor: 'requisitos'
      },{
        Header: 'Curículo',
        accessor: 'curiculo'
      },
      {
        Header: 'Email',
        accessor: 'email'
      }

    ]
  }
  render() {
    return (
        <div>
          <NavBarDocente></NavBarDocente>
          <div>
            <div style={{paddingTop: '30px'}}>
              <button type="submit" value='Submit' className="btn btn-dark" style={{float: 'right'}}> Ranquear Inscritos </button>
            </div>
            
            <ReactTable
          data={this.state.data}
          columns={this.state.columns}
          defaultSortDesc={true}
      />
          </div>
          
      
      </div>
    )
  }
}

export default verificarInscritos

