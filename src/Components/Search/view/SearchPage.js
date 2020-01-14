import React, {Component, Fragment} from "react";
import {DatePicker} from "react-materialize";
import ShowBuscaProjeto from "./showBuscaProjetos";
import M from "materialize-css";
import Header from "../../Header/Header";
import "../controller/ctrSearch";

import {
	handleChange,
	handleDatePickerChange,
	handleDatePickerChangeTermino,
	handleClick,
	getAreas,
	getSubareas
} from "../controller/ctrSearch";

class SearchPage extends Component {
	state = {
		nomeProjeto: "",
		nomeOrientador: "",
		nomeCoorientador: "",
		areas: [],
		subareas: [],
		tipos: ["teste4", "teste5"],
		optionArea: "",
		optionSubarea: "",
		optionTipo: "",
		dataInicio: "",
		dataTermino: "",
		showCards: false,
		resultadoBusca: []
	};

	componentWillMount() {
		getAreas(this);
		getSubareas(this);
	}

	setStateAndInitSelect = (name, data) => {
		this.setState({[name]: data});
		let elem = document.getElementById(name);
		M.FormSelect.init(elem);
	};

	componentDidMount() {
		document.addEventListener("DOMContentLoaded", function() {
			const elems = document.querySelectorAll("select");
			M.FormSelect.init(elems);
		});
		document.addEventListener("DOMContentLoaded", function() {
			const elems = document.querySelectorAll(".modal");
			M.Modal.init(elems);
		});

		document.addEventListener("DOMContentLoaded", function() {
			let elems = document.querySelectorAll(".datepicker");
			const options = {
				autoClose: true,
				showClearBtn: true
			};
			M.Datepicker.init(elems, options);
		});
	}

	render() {
		const {showCards} = this.state;
		return (
			<Fragment>
				<Header />
				<div className='container'>
					<div id='modal1' class='modal'>
						<div class='modal-content'>
							<h4>Ajuda online de contexto</h4>
							<p>
								Nessa tela, é possível buscar todos os projetos cadastrados na
								plataforma
							</p>
							<p>Você consegue filtrar os projetos pelos seguintes campos:</p>
							<p> * Nome do projeto</p>
							<p> * Nome do orientador</p>
							<p> * Nome do coorientador</p>
							<p> * Área do projeto</p>
							<p> * Subárea do projeto</p>
							<p> * Início do projeto</p>
							<p> * Término do projeto</p>
							<p>
								Se não preenchar nenhum campo, a busca irá retornar todos os
								projetos.
							</p>
						</div>
						<div class='modal-footer'>
							<a
								href='#!'
								class='modal-close waves-effect waves-green btn-flat'
							>
								Ok
							</a>
						</div>
					</div>
					<div className='card-panel'>
						<div className='row'>
							<div className='col s12'>
								<div className='row'>
									<div className='input-field col s10'>
										<input
											type='text'
											className='validate'
											value={this.state.nomeProjeto}
											name='nomeProjeto'
											onChange={e => {
												handleChange(this, e);
											}}
										/>
										<label htmlFor='last_name'>Nome do projeto</label>
									</div>
									<div className='input-field col s2'>
										{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
										<a
											className='btn-floating btn-large black pulse right modal-trigger'
											href='#modal1'
										>
											<i className='material-icons'>error_outline</i>
										</a>
									</div>
									<div className='input-field col s6'>
										<input
											type='text'
											className='validate'
											value={this.state.nomeOrientador}
											name='nomeOrientador'
											onChange={e => {
												handleChange(this, e);
											}}
										/>
										<label htmlFor='last_name'>Nome do orientador</label>
									</div>
									<div className='input-field col s6'>
										<input
											type='text'
											className='validate'
											value={this.state.nomeCoorientador}
											name='nomeCoorientador'
											onChange={e => {
												handleChange(this, e);
											}}
										/>
										<label htmlFor='last_name'>Nome do corientador</label>
									</div>
									<div className='input-field col s6'>
										<select
											id='area'
											value={this.state.optionArea}
											name='optionArea'
											onChange={e => {
												handleChange(this, e);
											}}
										>
											<option value='' disabled>
												Selecione a área
											</option>
											{this.state.areas.map(area => (
												<option id={area.id} key={area.id} value={area.id}>
													{area.nome}
												</option>
											))}
										</select>
										<label>Área do projeto</label>
									</div>
									<div className='input-field col s6'>
										<select
											id='subarea'
											value={this.state.optionSubarea}
											name='optionSubarea'
											onChange={e => {
												handleChange(this, e);
											}}
										>
											<option value='' disabled>
												Selecione a subárea
											</option>
											{this.state.subareas.map(subarea => (
												<option key={subarea.id} value={subarea.id}>
													{subarea.nome}
												</option>
											))}
										</select>
										<label>Sub-área do projeto</label>
									</div>

									<div className='input-field col s6'>
										<DatePicker
											s={12}
											label='Data início projeto'
											name='dataInicio'
											value={this.state.dataInicio}
											onChange={e => {
												handleDatePickerChange(this, e);
											}}
										/>
									</div>
									<div className='input-field col s6'>
										<DatePicker
											s={12}
											label='Data fim do projeto'
											name='dataTermino'
											value={this.state.dataTermino}
											onChange={e => {
												handleDatePickerChangeTermino(this, e);
											}}
										/>
									</div>
									<button
										className='btn blue-grey darken-4 right'
										type='button'
										onClick={e => {
											handleClick(this, e);
										}}
									>
										Pesquisar
										<i className='material-icons right'>search</i>
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
