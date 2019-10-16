import React from 'react';
import { Create, SimpleForm, required, LongTextInput } from 'react-admin';
export default props => (
  <Create {...props}>
    <SimpleForm>
      <LongTextInput validate={required()} source="prerequisitos" />
      <LongTextInput validate={required()} source="descricao" />
    </SimpleForm>
  </Create>
);
