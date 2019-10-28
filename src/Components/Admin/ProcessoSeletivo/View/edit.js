import React from 'react';
import {
  Edit,
  SimpleForm,
  required,
  LongTextInput,
  BooleanInput
} from 'react-admin';

import Br from 'date-fns/locale/pt-BR';
import DateFnsUtils from '@date-io/date-fns';
import { DateTimeInput } from 'react-admin-date-inputs';
DateFnsUtils.prototype.getStartOfMonth = DateFnsUtils.prototype.startOfMonth;
export default props => (
  <Edit {...props}>
    <SimpleForm>
      <LongTextInput validate={required()} source="prerequisitos" />
      <LongTextInput validate={required()} source="descricao" />
      <DateTimeInput
        label="Início do processo seletivo"
        source="dataInicio"
        providerOptions={{ utils: DateFnsUtils, locale: Br }}
      />
      <BooleanInput
        label="Processo seletivo ativo"
        source="encerrado"
      ></BooleanInput>
    </SimpleForm>
  </Edit>
);
