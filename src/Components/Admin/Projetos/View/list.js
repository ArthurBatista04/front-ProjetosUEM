import React from "react";
import {
  List,
  Datagrid,
  TextField,
  NumberField,
  ReferenceField,
  SelectField,
  EditButton
} from "react-admin";

export default props => (
  <List {...props}>
    <Datagrid>
      <TextField source="titulo" />
      <ReferenceField source="docenteId" reference="Docentes">
        <TextField label="Orientador" optionText="nome" />
      </ReferenceField>
      <ReferenceField source="areaId" reference="Areas">
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
