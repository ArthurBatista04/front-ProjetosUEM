import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  NumberField
} from "react-admin";

export const DiscenteList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField label="RA" source="ra" />
      <TextField source="nome" />
      <TextField source="curso" />
      <TextField source="turno" />
      <TextField source="campus" />
      <NumberField source="serie" />
      <TextField label="Situação Acadêmica" source="situacaoAcademica" />
      <EmailField source="email" />
    </Datagrid>
  </List>
);
