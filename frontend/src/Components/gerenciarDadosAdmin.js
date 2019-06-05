import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class gerenciarDadosAdmin extends Component {
	render() {
		return (
			<div className="container">
				<ul class="list-group">
					<li class="list-group-item">
						Cras justo odio <button>teste</button>
					</li>
					<li class="list-group-item">Dapibus ac facilisis in</li>
					<li class="list-group-item">Morbi leo risus</li>
					<li class="list-group-item">Porta ac consectetur ac</li>
					<li class="list-group-item">Vestibulum at eros</li>
				</ul>
			</div>
		);
	}
}

export default gerenciarDadosAdmin;
