import React from 'react';
import {
  number,
  required,
  minLength,
  Edit,
  SimpleForm,
  BooleanInput,
  TextInput,
  NumberInput,
  DateInput,
  LongTextInput,
  ReferenceInput,
  SelectInput
} from 'react-admin';

const validateTitulo = [required(), minLength(3)];
const validateLimites = [required(), number()];
const postDefaultValue = { docenteId: localStorage.getItem('docenteId') };
export default props => (
  <Edit {...props}>
    <SimpleForm defaultValue={postDefaultValue}>
      <TextInput source="titulo" validate={validateTitulo} />
      <ReferenceInput source="coorientadorId" reference="Docentes">
        <SelectInput label="Coorientador" optionText="cargo" />
      </ReferenceInput>
      <ReferenceInput source="areaId" reference="Areas" validate={required()}>
        <SelectInput label="Área" optionText="nome" />
      </ReferenceInput>
      <ReferenceInput
        source="subareaId"
        reference="Subareas"
        validate={required()}
      >
        <SelectInput label="Subárea" optionText="nome" />
      </ReferenceInput>
      <TextInput source="tipo" validate={required()} />
      <DateInput source="dataInicio" validate={required()} />
      <DateInput source="dataTermino" validate={required()} />
      <BooleanInput
        defaultValue={false}
        label="Projeto em andamento?"
        source="ativo"
        validate={required()}
      />
      <NumberInput
        label="Número de participantes"
        source="atualParticipantes"
        validate={validateLimites}
      />
      <NumberInput
        label="Limite de participantes"
        source="limiteParticipantes"
        validate={number()}
      />
      <LongTextInput source="requisitos" />
      <LongTextInput source="resumo" validate={required()} />
    </SimpleForm>
  </Edit>
);
