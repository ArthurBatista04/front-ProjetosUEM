import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  DateInput,
  LongTextInput,
  ReferenceInput,
  SelectInput,
  DisabledInput
} from "react-admin";

export const ProjetosEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="titulo" />
      <ReferenceInput source="docenteId" reference="docentes">
        <SelectInput label="Orientador" optionText="name" />
      </ReferenceInput>
      <ReferenceInput source="docenteId" reference="docentes">
        <SelectInput label="Coorientador" optionText="name" />
      </ReferenceInput>
      <TextInput source="area" />
      <TextInput source="subarea" />
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
  </Edit>
);
