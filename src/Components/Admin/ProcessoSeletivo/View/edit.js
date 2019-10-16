import React from 'react';
import { Edit, SimpleForm, required, LongTextInput } from 'react-admin';

export default props => (
  <Edit {...props}>
    <SimpleForm>
      <LongTextInput validate={required()} source="prerequisitos" />
      <LongTextInput validate={required()} source="descricao" />
    </SimpleForm>
  </Edit>
);
