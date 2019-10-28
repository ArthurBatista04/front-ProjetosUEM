import React from "react";
import {
  number,
  required,
  minLength,
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  DateInput,
  LongTextInput,
  ReferenceInput,
  SelectInput
} from "react-admin";

const validateTitulo = [required(), minLength(3)];
const validateLimites = [required(), number()];

export default props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="titulo" validate={validateTitulo} />
      <ReferenceInput source="docenteId" reference="Docentes">
        <SelectInput label="Orientador" optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="docenteId" reference="Docentes">
        <SelectInput label="Coorientador" optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="areaId" reference="Areas">
        <SelectInput label="Área" optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="subareaId" reference="Subareas">
        <SelectInput label="Subárea" optionText="name" />
      </ReferenceInput>
      <TextInput source="tipo" validate={required()} />
      <DateInput source="dataInicio" validate={required()} />
      <DateInput source="dataTermino" validate={required()} />
      <TextInput source="status" validate={required()} />
      <NumberInput
        label="Número de participantes"
        source="nroParticipantes"
        validate={validateLimites}
      />
      <NumberInput
        label="Limite de participantes"
        source="limiteParticipantes"
        validate={validateLimites}
      />
      <LongTextInput source="requisitos" />
      <LongTextInput source="resumo" validate={required()} />
    </SimpleForm>
  </Create>
);
