import React from "react";
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  ReferenceField,
  EditButton
} from "react-admin";

export const ProjetosList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="titulo" />
      <TextField source="docente" />
      <ReferenceField source="areaId" reference="areas">
        <TextField label="Área" source="nome" />
      </ReferenceField>
      <TextField source="status" />
      <NumberField label="Número de participantes" source="nroParticipantes" />
      <NumberField
        label="Limite de participantes"
        source="limiteParticipantes"
      />
      <EditButton />
    </Datagrid>
  </List>
);
