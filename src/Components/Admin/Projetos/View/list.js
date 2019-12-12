import React from 'react';
import {
  List,
  BooleanField,
  Datagrid,
  TextField,
  ShowButton,
  NumberField,
  ReferenceField,
  EditButton
} from 'react-admin';

export default props => (
  <List {...props} filter={{ docenteId: localStorage.getItem('docenteId') }}>
    <Datagrid>
      <TextField source="titulo" />
      <ReferenceField linkType={false} source="docenteId" reference="Docentes">
        <TextField label="Orientador" source="cargo" />
      </ReferenceField>
      <ReferenceField source="areaId" linkType={false} reference="Areas">
        <TextField label="Área" source="nome" />
      </ReferenceField>
      <BooleanField source="ativo" label="Status" />
      <NumberField
        label="Número de participantes"
        source="atualParticipantes"
      />
      <NumberField
        label="Limite de participantes"
        source="limiteParticipantes"
      />
      <ShowButton label="Visualizar processos seletivos"></ShowButton>
      <EditButton />
    </Datagrid>
  </List>
);
