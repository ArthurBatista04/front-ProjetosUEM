import React from "react";
import { List, Datagrid, TextField, EmailField } from "react-admin";

export const AdminList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="nome" />
      <EmailField source="email" />
      <TextField source="username" />
    </Datagrid>
  </List>
);
