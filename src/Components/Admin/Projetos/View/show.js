import React from 'react';
import {
  List,
  Datagrid,
  DateField,
  BooleanField,
  ShowButton,
  Show,
  CardActions,
  ReferenceManyField
} from 'react-admin';
import Create from '../../ProcessoSeletivo/View/create';
const PostActions = props => (
  <CardActions>
    <Create {...props}></Create>
  </CardActions>
);
export default props => (
  <Show actions={false} title={false} {...props}>
    <ReferenceManyField reference="processosSeletivos" target="projetoId">
      <List
        actions={
          <PostActions
            {...{
              projetoId: props.id
            }}
          ></PostActions>
        }
        filter={{ projetoId: props.id }}
        {...props}
      >
        <Datagrid>
          <DateField locales="pt-BR" label="Início" source="dataInicio" />
          <BooleanField source="encerrado"></BooleanField>
          <ShowButton label="Visualizar inscritos"></ShowButton>
        </Datagrid>
      </List>
    </ReferenceManyField>
  </Show>
);
