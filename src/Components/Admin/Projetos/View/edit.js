import React from 'react';
import {
  number,
  required,
  minLength,
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  DateInput,
  LongTextInput,
  ReferenceInput,
  SelectInput,
  DisabledInput
} from 'react-admin';

const validateTitulo = [required(), minLength(3)];
const validateOrientadores = [required(), minLength(3)];
const validateLimites = [required(), number()];

export default props => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="titulo" validate={validateTitulo} />
      <TextInput source="orientador" validate={validateOrientadores} />
      <TextInput source="coorientador" validate={validateOrientadores} />
      <ReferenceInput source="areaId" reference="areas">
        <SelectInput label="Área" optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="subareaId" reference="subareas">
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
  </Edit>
);
