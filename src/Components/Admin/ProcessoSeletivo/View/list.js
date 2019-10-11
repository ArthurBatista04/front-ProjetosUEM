import React from 'react';
import { List, Datagrid, DateField, BooleanField } from 'react-admin';

export default props => (
  <List {...props}>
    <Datagrid>
      <DateField locales="pt-BR" label="Início" source="dataInicio" />
      <DateField locales="pt-BR" label="Término" source="dataFim" />
      <BooleanField source="encerrado"></BooleanField>
    </Datagrid>
  </List>
);
