import React from 'react';
import { Edit, SimpleForm, required, LongTextInput } from 'react-admin';
import { DateTimeInput } from 'react-admin-date-inputs';
import DateFnsUtils from '@date-io/date-fns';
import Br from 'date-fns/locale/pt-BR';
DateFnsUtils.prototype.getStartOfMonth = DateFnsUtils.prototype.startOfMonth;

export default props => (
  <Edit {...props}>
    <SimpleForm>
      <DateTimeInput
        label="Data início "
        validate={required()}
        source="dataInicio"
        providerOptions={{ utils: DateFnsUtils, locale: Br }}
      />
      <DateTimeInput
        label="Data início "
        validate={required()}
        source="dataFim"
        providerOptions={{ utils: DateFnsUtils, locale: Br }}
      />
      <LongTextInput source="prerequisitos" />
      <LongTextInput source="descricao" />
    </SimpleForm>
  </Edit>
);
