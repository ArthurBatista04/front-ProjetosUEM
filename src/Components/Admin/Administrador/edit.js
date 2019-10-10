import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  NumberField
} from "react-admin";

export const AdminEdit = props => (
  <Edit {...props}>
    <Datagrid rowClick="edit">
      <TextField source="nome" />
      <EmailField source="email" />
      <TextField source="username" />
    </Datagrid>
  </Edit>
);
