import Axios from 'axios';
import PathName from '../../pathConst';

export const getAreas = self => {
	Axios.get(`${PathName}/api/Areas`).then(res => {
		self.setState({ areas: res.data });
	});
};

export const getSubareas = self => {
	Axios.get(`http://localhost:3001/api/Subareas`).then(res => {
		self.setState({ subareas: res.data });
	});
};

export const handleChange = (self, e) => {
	const name = e.target.name;
	const value = e.target.value;
	self.setState({ [name]: value });
};

export const handleDatePickerChange = (self, e) => {
	self.setState({ dataInicio: e.toString() });
};

export const handleClick = (self, e) => {
	e.preventDefault();
	const newSearch = {
		nomeProjeto: self.state.nomeProjeto,
		nomeOrientador: self.state.nomeOrientador,
		areas: self.state.areas,
		subareas: self.state.subareas,
		tipos: self.state.tipos,
		optionArea: self.state.optionArea,
		optionSubarea: self.state.optionSubarea,
		optionTipo: self.state.tipos
	};
	const filterSearch = {
		where: {
			titulo: self.state.nomeProjeto
		}
	};
	let resultados = [];
	Axios.get(`${PathName}/api/Projetos?filter=${JSON.stringify(filterSearch)}`)
		.then(res => {
			res.data.forEach(projeto => {
				const docenteFilter = {
					where: {
						id: projeto.usuarioId
					}
				};
				Axios.get(
					`${PathName}/api/Usuarios?filter=${JSON.stringify(docenteFilter)}`
				).then(response => {
					projeto.nomeOrientador = response.data[0].nome;
					resultados.push(projeto);
				});
			});
			// console.log(resultados);
			self.setState({ resultadoBusca: resultados });
			self.setState({ showCards: true });
		})
		.catch(err => {
			console.log(err);
		});
};
