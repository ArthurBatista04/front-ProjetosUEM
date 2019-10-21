import React from "react";
import { Create, SimpleForm, required, TextInput } from "react-admin";

const validateArea = values => {
  const errors = {};
  if (!values.nome) {
    errors.nome = ["É necessário preencher com uma área!"];
  }
  return errors;
};

export default props => (
  <Create title="Area/add" {...props}>
    <SimpleForm validate={validateArea}>
      <TextInput validate={required()} source="nome" />
    </SimpleForm>
  </Create>
);
