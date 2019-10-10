import React from "react";
import { Create, SimpleForm, TextInput, NumberInput, DateInput, LongTextInput, ReferenceInput, SelectInput } from 'react-admin';

export const ProjetosCreate = props => (
  <Create {...props}>
    <SimpleForm >
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
      <DateInput source="dataInicio"/>
      <DateInput source="dataTermino"/>
      <TextInput source="status" />
      <NumberInput label = "Número de participantes" source="nroParticipantes" />
      <NumberInput label = "Limite de participantes" source="limiteParticipantes" />
      <LongTextInput source="requisitos" />
      <LongTextInput source="resumo" />
    </SimpleForm>
  </Create>
);