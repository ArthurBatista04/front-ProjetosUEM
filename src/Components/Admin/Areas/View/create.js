import React from "react";
import {Create, SimpleForm, required, TextInput, choices} from "react-admin";
const areas = choices(
	[
		"Ciências Exatas e da Terra",
		"Ciências Biológicas",
		"Engenharias",
		"Ciências da Saúde",
		"Ciências Agrárias",
		"Ciências Sociais Aplicadas",
		"Ciências Humanas",
		"Linguística",
		"Letras e Artes"
	],
	"Área inválida!"
);

const validateArea = values => {
	const errors = {};
	if (!values.nome) {
		errors.nome = ["É necessário preencher com uma área!"];
	}
	return errors;
};

export default props => (
	<Create title='Area/add' {...props}>
		<SimpleForm validate={validateArea}>
			<TextInput validate={[required(), areas]} source='nome' />
		</SimpleForm>
	</Create>
);
