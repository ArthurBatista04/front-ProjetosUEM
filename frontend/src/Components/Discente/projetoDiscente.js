import React, { Component, Fragment } from 'react';
import MostrarProjeto from './mostrarProjetoDiscente';

export class projetosDiscente extends Component {
	render() {
		return (
			<Fragment>
				{this.props.projetos.map((projeto) => (
					<MostrarProjeto
						key={projeto.id}
						projeto={projeto}
						handleClickVisualize={this.props.handleClickVisualize}
					/>
				))}
			</Fragment>
		);
	}
}

export default projetosDiscente;
