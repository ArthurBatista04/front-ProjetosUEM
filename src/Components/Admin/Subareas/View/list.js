import React from 'react';
import { List, Datagrid, TextField, NumberField } from 'react-admin';

export default props => (
  <List {...props}>
    <Datagrid>
      <TextField source="nome"></TextField>
      <NumberField
        label="Quantidade de projetos vinculados"
        source="quantidade"
      ></NumberField>
    </Datagrid>
  </List>
);
