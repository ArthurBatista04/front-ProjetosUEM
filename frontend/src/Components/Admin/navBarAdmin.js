import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class navBarAdmin extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
					<Link className="navbar-brand" to="/admin/dashboard">
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
							<li className="nav-item ">
								<Link className="nav-link" to="/admin/dashboard">
									Dashboard
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to="/admin/gerenciarDados">
									Gerenciar
								</Link>
							</li>
						</ul>
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav ml-auto">
								<li className="nav-item">
									<div class="dropdown">
										<button
											class="btn btn-secondary dropdown-toggle"
											type="button"
											id="dropdownMenuButton"
											data-toggle="dropdown"
											aria-haspopup="true"
											aria-expanded="false"
										>
											Confirgurações
										</button>
										<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
											<Link className="dropdown-item" to="/">
												Sair
											</Link>
										</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}

export default navBarAdmin;
