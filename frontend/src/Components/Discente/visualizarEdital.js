import React, { Component } from 'react';
import ReactTable from 'react-table';
import { NavLink } from 'react-router-dom';
import 'react-table/react-table.css';

export class visualizarEdital extends Component {
	state = {
		data: [
			{
				name: 'Tanner Linsley',
                age: 26,
                anoGraduacao: '3º',
				curso: 'Ciência da computação',
				requisitos: 'Tenho todos os pré-requisitos',
				curiculo: 'link',
                email: 'ra105422@uem.br',
                situacao: 'Aprovado'
			},
			{
				name: 'Sandro Henrique',
                age: 20,
                anoGraduacao: '4º',
				curso: 'Ciência da computação',
				requisitos: 'Tenho todos os pré-requisitos',
				curiculo: 'link',
                email: 'ra98133@uem.br',
                situacao: 'Aprovado'
			}
		],
		columns: [
			{
				Header: 'Nome',
				accessor: 'name'
			},
			{
				Header: 'Ano da grauduação',
				accessor: 'anoGraduacao'
			},
			{
				Header: 'Curso',
				accessor: 'curso'
            },
            {
				Header: 'Situação',
				accessor: 'situacao'
			}
		]
	};

	render() {
		return (
            <div>
			    <div>
			    	<ReactTable data={this.state.data} columns={this.state.columns} defaultSortDesc={true} minRows={12}  showPaginationBottom={false}/>
			    </div>
                <div>
                    <NavLink type="submit" className="btn btn-danger" to="/Projetos/search">
			    		Voltar
			    	</NavLink>
                </div>
            </div>
		);
	}
}

export default visualizarEdital;
