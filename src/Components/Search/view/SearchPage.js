import React, { Component, Fragment } from 'react';
import Axios from 'axios';
import PathName from '../../pathConst';
import ShowBuscaProjeto from './showBuscaProjetos';
import M from 'materialize-css';
import Header from '../../Header/Header';
import '../controller/ctrSearch';
import {
	handleChange,
	handleDatePicker,
	handleClick,
	getAreas,
	getSubareas
} from '../controller/ctrSearch';

class SearchPage extends Component {
	state = {
		nomeProjeto: [],
		nomeOrientador: [],
		areas: [],
		subareas: [],
		tipos: ['teste4', 'teste5'],
		optionArea: '',
		optionSubarea: '',
		optionTipo: '',
		dataInicio: '',
		showCards: false,
		resultadoBusca: []
	};

	componentWillMount() {
		getAreas(this);
		getSubareas(this);
	}

	componentDidMount() {
		document.addEventListener('DOMContentLoaded', function() {
			let elems = document.querySelectorAll('select');
			M.FormSelect.init(elems);
		});
		document.addEventListener('DOMContentLoaded', function() {
			let elems = document.querySelectorAll('.datepicker');
			const options = {
				autoClose: true,
				showClearBtn: true
			};
			M.Datepicker.init(elems, options);
		});
	}

	render() {
		const { showCards } = this.state;
		// console.log(this.state.resultadoBusca);
		return (
			<Fragment>
				<Header />
				<div className="container">
					<div className="card-panel">
						<div className="row">
							<div className="col s12">
								<div className="row">
									<div className="input-field col s12">
										<input
											type="text"
											className="validate"
											value={this.state.nomeProjeto}
											name="nomeProjeto"
											onChange={e => {
												handleChange(this, e);
											}}
										/>
										<label htmlFor="last_name">Nome do projeto</label>
									</div>
									<div className="input-field col s6">
										<input
											type="text"
											className="validate"
											value={this.state.nomeOrientador}
											name="nomeOrientador"
											onChange={e => {
												handleChange(this, e);
											}}
										/>
										<label htmlFor="last_name">Nome do orientador</label>
									</div>
									<div className="input-field col s6">
										<input
											type="text"
											className="validate"
											value={this.state.nomeCoorientador}
											name="nomeCoorientador"
											onChange={e => {
												handleChange(this, e);
											}}
										/>
										<label htmlFor="last_name">Nome do corientador</label>
									</div>
									<div className="input-field col s6">
										<select
											value={this.state.optionArea}
											name="optionAreaa"
											onChange={e => {
												handleChange(this, e);
											}}
										>
											<option value="" disabled>
												Selecione a área
											</option>
											{this.state.areas.map(area => (
												<option key={area.id} value={area.nome}>
													teste
												</option>
											))}
										</select>
										<label>Área do projeto</label>
									</div>
									<div className="input-field col s6">
										<select
											value={this.state.optionSubarea}
											name="optionSubarea"
											onChange={e => {
												handleChange(this, e);
											}}
										>
											<option value="" disabled>
												Selecione a subárea
											</option>
											{this.state.subareas.map(subarea => (
												<option key={subarea.id} value={subarea.nome}>
													{subarea.nome}
												</option>
											))}
										</select>
										<label>Sub-área do projeto</label>
									</div>
									<div className="input-field col s4">
										<select
											value={this.state.optionTipo}
											name="optionTipo"
											onChange={e => {
												handleChange(this, e);
											}}
										>
											<option value="" disabled>
												Selecione o tipo
											</option>
											{this.state.tipos.map((tipo, i) => (
												<option key={i} value={tipo}>
													{tipo}
												</option>
											))}
										</select>
										<label>Tipo do projeto</label>
									</div>

									<div className="input-field col s4">
										<input
											type="text"
											className="datepicker"
											value={this.state.dataInicio}
											name="dataInicio"
											onChange={e => {
												handleChange(this, e);
											}}
										/>
										<label>Data início do projeto</label>
									</div>
									<div className="input-field col s4">
										<input type="text" className="datepicker" />
										<label>Data fim do projeto</label>
									</div>
									<button
										className="btn waves-effect waves-light blue-grey darken-4 right"
										type="button"
										onClick={e => {
											handleClick(this, e);
										}}
									>
										Pesquisar
										<i className="material-icons right">search</i>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				{showCards ? (
					<ShowBuscaProjeto resultados={this.state.resultadoBusca} />
				) : null}
			</Fragment>
		);
	}
}

export default SearchPage;
