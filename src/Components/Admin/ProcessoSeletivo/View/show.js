import React, { Fragment } from 'react';
import {
  Datagrid,
  ReferenceField,
  BooleanField,
  List,
  TextField,
  NumberField,
  DeleteButton,
  Show,
  ReferenceManyField
} from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';
import Divider from '@material-ui/core/Divider';
import Tabs from '@material-ui/core/Tabs';
import AproveButton from '../Buttons/aproveButton';
import Tab from '@material-ui/core/Tab';
import DisaproveButton from '../Buttons/disaproveButton';
import RankButton from '../Buttons/changeRankButton';
const datagridStyles = {
  total: { fontWeight: 'bold' }
};

class TabbedDatagrid extends React.Component {
  tabs = [
    { id: true, name: 'Aprovados' },
    { id: false, name: 'Rejeitados' },
    { id: null, name: 'Pendentes' }
  ];

  state = { Aprovados: [], Rejeitados: [], Pendentes: [] };

  static getDerivedStateFromProps(props, state) {
    if (props.ids !== state[props.filterValues.aprovado]) {
      return { ...state, [props.filterValues.aprovado]: props.ids };
    }
    return null;
  }

  handleChange = (event, value) => {
    const { filterValues, setFilters } = this.props;
    setFilters({ ...filterValues, aprovado: value });
  };

  render() {
    const { classes, filterValues, ...props } = this.props;
    return (
      <Fragment>
        <Tabs
          fullWidth
          centered
          value={filterValues.aprovado}
          indicatorColor="primary"
          onChange={this.handleChange}
        >
          {this.tabs.map(choice => (
            <Tab key={choice.id} label={choice.name} value={choice.id} />
          ))}
        </Tabs>
        <Divider />
        <div>
          {filterValues.aprovado === true && (
            <Datagrid {...props}>
              <ReferenceField
                label="Nome"
                reference="Discentes"
                source="discenteId"
              >
                <ReferenceField
                  label="Nome"
                  reference="Usuarios"
                  source="usuarioId"
                >
                  <TextField source="nome"></TextField>
                </ReferenceField>
              </ReferenceField>
              <ReferenceField
                label="Email"
                reference="Discentes"
                source="discenteId"
              >
                <ReferenceField
                  label="Email"
                  reference="Usuarios"
                  source="usuarioId"
                >
                  <TextField source="email"></TextField>
                </ReferenceField>
              </ReferenceField>
              <ReferenceField
                label="Serie"
                reference="Discentes"
                source="discenteId"
              >
                <NumberField source="serie"></NumberField>
              </ReferenceField>
              <ReferenceField
                label="Curso"
                reference="Discentes"
                source="discenteId"
              >
                <NumberField source="curso"></NumberField>
              </ReferenceField>
              <TextField source="mensagem"></TextField>
              <TextField source="curriculo"></TextField>

              <BooleanField label="Status" source="aprovado" />
              <NumberField source="rank"></NumberField>
              <RankButton {...props}></RankButton>
            </Datagrid>
          )}
          {filterValues.aprovado === false && (
            <Datagrid {...props}>
              <ReferenceField
                label="Nome"
                reference="Discentes"
                source="discenteId"
              >
                <ReferenceField
                  label="Nome"
                  reference="Usuarios"
                  source="usuarioId"
                >
                  <TextField source="nome"></TextField>
                </ReferenceField>
              </ReferenceField>
              <ReferenceField
                label="Email"
                reference="Discentes"
                source="discenteId"
              >
                <ReferenceField
                  label="Email"
                  reference="Usuarios"
                  source="usuarioId"
                >
                  <TextField source="email"></TextField>
                </ReferenceField>
              </ReferenceField>
              <ReferenceField
                label="Serie"
                reference="Discentes"
                source="discenteId"
              >
                <NumberField source="serie"></NumberField>
              </ReferenceField>
              <ReferenceField
                label="Curso"
                reference="Discentes"
                source="discenteId"
              >
                <NumberField source="curso"></NumberField>
              </ReferenceField>
              <TextField source="mensagem"></TextField>
              <TextField source="curriculo"></TextField>

              <BooleanField label="Status" source="aprovado" />
            </Datagrid>
          )}
          {filterValues.aprovado == null && (
            <Datagrid {...props}>
              <ReferenceField
                label="Nome"
                reference="Discentes"
                source="discenteId"
              >
                <ReferenceField
                  label="Nome"
                  reference="Usuarios"
                  source="usuarioId"
                >
                  <TextField source="nome"></TextField>
                </ReferenceField>
              </ReferenceField>
              <ReferenceField
                label="Email"
                reference="Discentes"
                source="discenteId"
              >
                <ReferenceField
                  label="Email"
                  reference="Usuarios"
                  source="usuarioId"
                >
                  <TextField source="email"></TextField>
                </ReferenceField>
              </ReferenceField>
              <ReferenceField
                label="Serie"
                reference="Discentes"
                source="discenteId"
              >
                <NumberField source="serie"></NumberField>
              </ReferenceField>
              <ReferenceField
                label="Curso"
                reference="Discentes"
                source="discenteId"
              >
                <NumberField source="curso"></NumberField>
              </ReferenceField>
              <TextField source="mensagem"></TextField>
              <TextField source="curriculo"></TextField>
              <BooleanField label="Status" source="aprovado" />
              <AproveButton {...props}></AproveButton>
              <DisaproveButton {...props}></DisaproveButton>
              <DeleteButton {...props} redirect={false}></DeleteButton>
            </Datagrid>
          )}
        </div>
      </Fragment>
    );
  }
}

const StyledTabbedDatagrid = withStyles(datagridStyles)(TabbedDatagrid);

const InscritoList = ({ classes, ...props }) => (
  <Show title="Listar Inscritos" actions={false} {...props}>
    <ReferenceManyField title={false} reference="Inscritos" target="inscritoId">
      <List
        actions={false}
        title="."
        filter={{ processoSeletivoId: props.id }}
        bulkActionButtons={false}
        {...props}
      >
        <StyledTabbedDatagrid></StyledTabbedDatagrid>
      </List>
    </ReferenceManyField>
  </Show>
);

export default InscritoList;
