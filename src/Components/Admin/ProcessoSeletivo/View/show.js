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
import Button from '@material-ui/core/Button';
import DisaproveButton from '../Buttons/disaproveButton';
import RankButton from '../Buttons/changeRankButton';
import Swal from 'sweetalert2';
import Toolbar from '@material-ui/core/Toolbar';
const datagridStyles = {
  total: { fontWeight: 'bold' }
};
const PostActions = ({
  basePath,
  currentSort,
  displayedFilters,
  exporter,
  filters,
  filterValues,
  onUnselectItems,
  resource,
  selectedIds,
  showFilter,
  total
}) => (
  <Toolbar>
    <Button color="primary" onClick={customAction}>
      Ajude-me
    </Button>
  </Toolbar>
);
const customAction = () => {
  Swal.mixin({
    confirmButtonText: 'Próximo &rarr;',
    showCancelButton: true,
    progressSteps: ['1', '2', '3', '4']
  }).queue([
    {
      title: 'Inscritos',
      text:
        'Os inscritos são organizados em três categorias: aprovados, rejeitados e todos. Neste último, à medida que aparecem inscrições você poderá inclui-los nas outras duas categorias e modificar conforme desejar. '
    },
    {
      title: 'Aprovados',
      text: 'Uma vez aprovados, você poderá alterar o rank dos inscritos.'
    },
    {
      title: 'Rejeitados',
      text:
        'É importante rejeitar os inscritos para que eles constem no edital, caso contrário, não aparecerão.'
    },
    {
      title: 'Finalizar processo seletivo',
      text:
        'Para divulgar o resultado do processo seletivo, basta ir à tela de processos seletivos, selecionar "editar", e encerrar o processo. Neste momento, toda comunidade acadêmica poderá acessar este edital ao pesquisar o projeto vinculado ao processo. '
    }
  ]);
};

class TabbedDatagrid extends React.Component {
  tabs = [
    { id: true, name: 'Aprovados' },
    { id: false, name: 'Rejeitados' },
    { id: null, name: 'Todos Inscritos' }
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
        actions={<PostActions></PostActions>}
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
