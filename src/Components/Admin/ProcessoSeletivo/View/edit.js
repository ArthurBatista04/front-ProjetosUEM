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
const validarDados = values => {
  const errors = {};
  const dataAtual = new Date().setHours(0, 0, 0, 0).valueOf();
  if (!values.prerequisitos) {
    errors.prerequisitos = ['Pre requisitos são necessários'];
  } else if (!values.descricao) {
    errors.descricao = ['Uma descrição é necessária'];
  } else if (values.descricao.length > 200) {
    errors.descricao = ['Max de 200 caracteres'];
  } else if (values.dataInicio.valueOf() < dataAtual.valueOf()) {
    errors.dataInicio = ['A data não pode ser anterior ao dia atual!'];
  } else if (typeof values.encerrado !== 'boolean') {
    errors.encerrado = ['Encerrado deve ser um valor booleano'];
  }
  return errors;
};
export default props => (
  <Edit actions={false} {...props}>
    <SimpleForm validate={validarDados} redirect={false}>
      <LongTextInput source="prerequisitos" />
      <LongTextInput source="descricao" />
      <DateTimeInput
        label="Início do processo seletivo"
        source="dataInicio"
        providerOptions={{ utils: DateFnsUtils, locale: Br }}
      />
      <BooleanInput
        label="Deseja encerrar o processo seletivo?"
        source="encerrado"
      ></BooleanInput>
    </SimpleForm>
  </Edit>
);
