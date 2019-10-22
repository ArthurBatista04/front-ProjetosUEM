import React from "react";
import { Edit, SimpleForm, required, TextInput } from "react-admin";

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
      <TextInput validate={required()} source="nome" />
    </SimpleForm>
  </Edit>
);
