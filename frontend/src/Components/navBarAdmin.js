import React, { Component } from 'react';

export class navBarAdmin extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<Link className="navbar-brand" to="/">
						Projetos UEM
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item active">
								<Link className="nav-link" to="/admin/dashboard">
									Dashboard <span className="sr-only">(current)</span>
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/Projetos/add">
									Gerenciar
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}

export default navBarAdmin;
