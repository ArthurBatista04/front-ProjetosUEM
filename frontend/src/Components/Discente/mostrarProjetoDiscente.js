import React, { Component } from 'react';

export class mostrarProjetoDiscente extends Component {
	render() {
		return (
			<div>
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">{this.props.projeto.titulo}</h5>
						<p className="card-text">{this.props.projeto.resumo}</p>
						<div className="btn-toolbar mr-2">
							<button
								type="button"
								className="btn btn-info"
								onClick={this.props.handleClickVisualize.bind(this, this.props.projeto.id)}
							>
								Visualizar
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default mostrarProjetoDiscente;
