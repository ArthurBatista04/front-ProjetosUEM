import React from 'react';
import { Edit, SimpleForm, required, TextInput } from 'react-admin';

export default props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput validate={required()} source="nome" />
    </SimpleForm>
  </Edit>
);
