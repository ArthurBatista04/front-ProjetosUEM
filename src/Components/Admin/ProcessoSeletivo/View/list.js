import React from 'react';
import { List, Datagrid, DateField, BooleanField } from 'react-admin';

export default props => (
  <List {...props}>
    <Datagrid>
      <DateField locales="pt-BR" label="Início" source="dataInicio" />
      <BooleanField source="encerrado"></BooleanField>
    </Datagrid>
  </List>
);
