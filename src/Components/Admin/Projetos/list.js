import React from "react";
import { List, Datagrid, TextField, NumberField, ReferenceField, EditButton } from 'react-admin';

export const ProjetosList = props => (
  <List {...props}>
    <Datagrid >
      <TextField source="titulo" />
      <ReferenceField source="DocenteId" reference="docentes">
                <TextField source="nome" />
      </ReferenceField>
      <TextField source="area" />
      <TextField source="status" />
      <NumberField label = "Número de participantes" source="nroParticipantes" />
      <NumberField label = "Limite de participantes" source="limiteParticipantes" />
      <EditButton />
    </Datagrid>
  </List>
);