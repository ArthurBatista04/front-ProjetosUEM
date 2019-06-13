import React, { Component, Fragment } from 'react';
import NavBarAdmin from './navBarAdmin.js';

export class gerenciarDadosAdmin extends Component {
	render() {
		return (
			<Fragment>
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
			</Fragment>
		);
	}
}

export default gerenciarDadosAdmin;
