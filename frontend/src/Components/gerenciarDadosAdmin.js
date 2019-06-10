import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class gerenciarDadosAdmin extends Component {
	render() {
		return (
			<div className="container" style={{ paddingTop: 3 + 'rem' }}>
				<ul className="list-group">
					<li className="list-group-item">
						Areas dos projetos{' '}
						<button
							className="btn btn-primary"
							style={{ float: 'right' }}
							onClick={this.props.handleClickAreas}
						>
							Gerenciar áreas
						</button>
					</li>
					<li className="list-group-item">
						Sub-áreas dos projetos{' '}
						<button
							className="btn btn-primary"
							style={{ float: 'right' }}
							onClick={this.props.handleClickSubAreas}
						>
							Gerenciar sub-áreas
						</button>
					</li>
					<li className="list-group-item">
						Tipos projetos{' '}
						<button
							className="btn btn-primary"
							style={{ float: 'right' }}
							onClick={this.props.handleClickTipos}
						>
							Gerenciar Tipos
						</button>
					</li>
				</ul>
			</div>
		);
	}
}

export default gerenciarDadosAdmin;
