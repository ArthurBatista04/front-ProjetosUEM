import React from "react";
import { List, Datagrid, TextField, EmailField, DateField } from "react-admin";

export const DocenteList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField label="Matrícula" source="matricula" />
      <TextField source="nome" />
      <TextField source="cargo" />
      <TextField source="lotacao" />
      <TextField source="situacao" />
      <DateField label="Vencimento do Contrato" source="vencimentoContrato" />
      <EmailField source="email" />
    </Datagrid>
  </List>
);
