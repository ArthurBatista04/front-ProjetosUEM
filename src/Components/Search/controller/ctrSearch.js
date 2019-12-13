import Axios from 'axios';
import PathName from '../../pathConst';
import M from 'materialize-css';

export const getAreas = self => {
	Axios.get(`${PathName}/api/Areas`).then(res => {
		self.setState({areas: res.data});
		let elem = document.getElementById('area');
		M.FormSelect.init(elem);
	});
};

export const getSubareas = self => {
	Axios.get(`http://localhost:3001/api/Subareas`).then(res => {
		self.setState({subareas: res.data});
		let elem = document.getElementById('subarea');
		M.FormSelect.init(elem);
	});
};

export const handleChange = (self, e) => {
	const name = e.target.name;
	const value = e.target.value;
	self.setState({[name]: value});
};

export const handleDatePickerChange = (self, e) => {
	console.log(e);
	self.setState({dataInicio: e.toString()});
};

export const handleDatePickerChangeTermino = (self, e) => {
	self.setState({dataTermino: e.toString()});
};

export const handleClick = (self, e) => {
	e.preventDefault();
	const newSearch = {
		nomeProjeto: self.state.nomeProjeto,
		nomeOrientador: self.state.nomeOrientador,
		optionArea: self.state.optionArea,
		optionSubarea: self.state.optionSubarea,
		optionTipo: self.state.tipos,
		dataInicio: self.state.dataInicio,
		dataTermino: self.state.dataTermino
	};

	const filterSearch = {
		where: {},
		include: []
	};
	if (self.state.nomeProjeto && self.state.nomeProjeto !== '') {
		filterSearch['where']['titulo'] = self.state.nomeProjeto;
	}
	if (self.state.nomeOrientador && self.state.nomeOrientador !== '') {
		const include = {
			relation: 'docente',
			scope: {
				include: {
					relation: 'usuario',
					scope: {
						where: {
							nome: self.state.nomeOrientador
						}
					}
				}
			}
		};
		filterSearch.include.push(include);
	}
	if (self.state.optionArea && self.state.optionArea !== '') {
		console.log(self.state.optionArea);
		if (typeof filterSearch.include !== 'undefined') {
			filterSearch.include.push(self.state.optionArea);
		}
	}
	if (self.state.optionSubarea && self.state.optionSubarea !== '') {
		const include = {
			relation: 'subarea'
		};
		filterSearch.include.push(include);
	}

	console.log(filterSearch);
	Axios.get(`${PathName}/api/Projetos?filter=${JSON.stringify(filterSearch)}`)
		.then(res => {
			self.setState({resultadoBusca: res.data});
			self.setState({showCards: true});
		})
		.catch(err => {
			console.log(err);
		});
};
