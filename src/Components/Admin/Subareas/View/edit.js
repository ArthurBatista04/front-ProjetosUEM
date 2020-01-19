import React from "react";
import {Edit, SimpleForm, required, TextInput, choices} from "react-admin";

const areas = choices(
	[
		"Matemática",
		"Ciência da computação",
		"Física",
		"Química",
		"Biologia",
		"Zoologia",
		"Medicina",
		"Agronomia",
		"Direito",
		"Economia"
	],
	"Subárea inválida!"
);

const validateSubarea = values => {
	const errors = {};
	if (!values.nome) {
		errors.nome = ["É necessário preencher com uma subárea!"];
	}
	return errors;
};

export default props => (
	<Edit {...props}>
		<SimpleForm validate={validateSubarea}>
			<TextInput validate={[required(), areas]} source='nome' />
		</SimpleForm>
	</Edit>
);
