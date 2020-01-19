import React from "react";
import {
  Edit,
  SimpleForm,
  required,
  LongTextInput,
  BooleanInput,
  DateInput
} from "react-admin";

import Br from "date-fns/locale/pt-BR";
import DateFnsUtils from "@date-io/date-fns";
// import { DateTimeInput } from "react-admin-date-inputs";
DateFnsUtils.prototype.getStartOfMonth = DateFnsUtils.prototype.startOfMonth;
const validarDados = values => {
  const errors = {};
  const dataAtual = new Date().setHours(0, 0, 0, 0).valueOf();
  if (!values.prerequisitos) {
    errors.prerequisitos = ["Pre requisitos são necessários"];
  } else if (!values.descricao) {
    errors.descricao = ["Uma descrição é necessária"];
  } else if (values.descricao.length > 200) {
    errors.descricao = ["Max de 200 caracteres"];
  } else if (values.dataInicio.valueOf() < dataAtual.valueOf()) {
    errors.dataInicio = ["A data não pode ser anterior ao dia atual!"];
  } else if (typeof values.encerrado !== "boolean") {
    errors.encerrado = ["Encerrado deve ser um valor booleano"];
  }
  return errors;
};
// const dateFormatter = v => {
//   // v is a `Date` object
//   if (!(v instanceof Date) || isNaN(v)) return;
//   const pad = "00";
//   const yy = v.getFullYear().toString();
//   const mm = (v.getMonth() + 1).toString();
//   const dd = v.getDate().toString();
//   return `${yy}-${(pad + mm).slice(-2)}-${(pad + dd).slice(-2)}`;
// };
const dateParser = v => {
  // v is a string of "YYYY-MM-DD" format
  const match = /(\d{4})-(\d{2})-(\d{2})/.exec(v);
  if (match === null) return;
  const d = new Date(match[1], parseInt(match[2], 10) - 1, match[3]);
  if (isNaN(d)) return;
  return d;
};
export default props => (
  <Edit actions={false} {...props}>
    <SimpleForm validate={validarDados} redirect={false}>
      <LongTextInput source="prerequisitos" />
      <LongTextInput source="descricao" />
      <DateInput
        label="Início do processo seletivo"
        source="dataInicio"
        parse={dateParser}
      />
      <BooleanInput
        label="Deseja encerrar o processo seletivo?"
        source="encerrado"
      ></BooleanInput>
    </SimpleForm>
  </Edit>
);
