import Axios from "axios";
import PathName from "../../pathConst";
import M from "materialize-css";
import Swal from "sweetalert2";

export const getAreas = self => {
	Axios.get(`${PathName}/api/Areas`).then(res => {
		self.setState({areas: res.data});
		let elem = document.getElementById("area");
		M.FormSelect.init(elem);
	});
};

export const getSubareas = self => {
	Axios.get(`http://localhost:3001/api/Subareas`).then(res => {
		self.setState({subareas: res.data});
		let elem = document.getElementById("subarea");
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

	const filterSearch = {
		where: {}
	};
	if (self.state.nomeProjeto && self.state.nomeProjeto !== "") {
		if (self.state.nomeProjeto.length > 100) {
			return Swal.fire({
				type: "error",
				title: "Nome do projeto é muito grande",
				text: "O nome do projeto deve conter no máximo 100 caracteres"
			});
		}
		filterSearch["where"]["titulo"] = self.state.nomeProjeto;
	}
	if (self.state.nomeOrientador && self.state.nomeOrientador !== "") {
		if (self.state.nomeOrientador.length > 100) {
			return Swal.fire({
				type: "error",
				title: "Nome do orientador é muito grande",
				text: "O nome do orientador deve conter no máximo 100 caracteres"
			});
		}
		const filterUsuario = {
			where: {
				nome: self.state.nomeOrientador
			},
			include: "docente"
		};
		Axios.get(
			`${PathName}/api/Usuarios/?filter=${JSON.stringify(filterUsuario)}`
		).then(res => {
			console.log(res.data[0].docente.id);
			filterSearch["where"]["docenteId"] = res.data[0].docente.id;
		});
	}

	if (self.state.nomeCoorientador && self.state.nomeCoorientador !== "") {
		if (self.state.nomeCoorientador.length > 100) {
			return Swal.fire({
				type: "error",
				title: "Nome do coorientador é muito grande",
				text: "O nome do coorientador deve conter no máximo 100 caracteres"
			});
		}
		const filterUsuario = {
			where: {
				nome: self.state.nomeCoorientador
			},
			include: "docente"
		};
		Axios.get(
			`${PathName}/api/Usuarios/?filter=${JSON.stringify(filterUsuario)}`
		).then(res => {
			console.log(res.data[0].docente.id);
			filterSearch["where"]["docenteId"] = res.data[0].docente.id;
		});
	}

	if (self.state.optionArea && self.state.optionArea !== "") {
		filterSearch["where"]["areaId"] = self.state.optionArea;
	}
	if (self.state.optionSubarea && self.state.optionSubarea !== "") {
		filterSearch["where"]["subareaId"] = self.state.optionSubarea;
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
