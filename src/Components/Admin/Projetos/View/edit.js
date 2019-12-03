import React from "react";
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
  SelectArrayInput,
  DisabledInput
} from "react-admin";

const validateTitulo = [required(), minLength(3)];
const validateLimites = [required(), number()];

export default props => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="titulo" validate={validateTitulo} />
      {/* <ReferenceInput
        source="docenteId"
        reference="Docentes"
        validate={required()}
      >
        <SelectArrayInput label="Orientador" optionText="nome" />
      </ReferenceInput> */}
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
      <TextInput source="status" validate={required()} />
      <NumberInput
        label="Número de participantes"
        source="nroParticipantes"
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
