import React from 'react';
import { Create, SimpleForm, required, TextInput } from 'react-admin';

export default props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput validate={required()} source="nome" />
    </SimpleForm>
  </Create>
);
