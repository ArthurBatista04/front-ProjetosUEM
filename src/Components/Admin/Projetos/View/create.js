import React from "react";
import {
  number,
  required,
  minLength,
  Create,
  SimpleForm,
  TextInput,
  ReferenceArrayInput,
  NumberInput,
  SelectInput,
  DateInput,
  LongTextInput,
  ReferenceInput,
  SelectArrayInput
} from "react-admin";

const validateTitulo = [required(), minLength(3)];
const validateLimites = [required(), number()];

export default props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="titulo" validate={validateTitulo} />
      <ReferenceInput
        source="docenteId"
        reference="Docentes"
        validate={required()}
      >
        <SelectInput
          label="Docente"
          optionText="cargo"
          filter={{ user_id: localStorage.getItem("user_id") }}
        />
      </ReferenceInput>
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
        <SelectArrayInput label="Área" optionText="nome" />
      </ReferenceInput>
      <ReferenceInput
        source="subareaId"
        reference="Subareas"
        validate={required()}
      >
        <SelectArrayInput label="Subárea" optionText="nome" />
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
  </Create>
);
