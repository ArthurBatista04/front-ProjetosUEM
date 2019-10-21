import React from "react";
import { Create, SimpleForm, required, TextInput } from "react-admin";

const validateSubarea = values => {
  const errors = {};
  if (!values.nome) {
    errors.nome = ["É necessário preencher com uma subárea!"];
  }
  return errors;
};

export default props => (
  <Create {...props}>
    <SimpleForm validate={validateSubarea}>
      <TextInput validate={required()} source="nome" />
    </SimpleForm>
  </Create>
);
