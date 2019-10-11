import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  DateInput,
  LongTextInput,
  ReferenceInput,
  SelectInput
} from "react-admin";

export const ProjetosCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="titulo" />
      <TextInput source="orientador" />
      <TextInput source="coorientador" />
      <ReferenceInput source="areaId" reference="areas">
        <SelectInput label="Área" optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="subareaId" reference="subareas">
        <SelectInput label="Subárea" optionText="name" />
      </ReferenceInput>
      <TextInput source="tipo" />
      <DateInput source="dataInicio" />
      <DateInput source="dataTermino" />
      <TextInput source="status" />
      <NumberInput label="Número de participantes" source="nroParticipantes" />
      <NumberInput
        label="Limite de participantes"
        source="limiteParticipantes"
      />
      <LongTextInput source="requisitos" />
      <LongTextInput source="resumo" />
    </SimpleForm>
  </Create>
);
