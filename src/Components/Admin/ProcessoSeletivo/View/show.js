import React, { Fragment } from 'react';
import {
  Datagrid,
  BooleanField,
  List,
  NumberField,
  Show,
  ReferenceManyField
} from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';
import Divider from '@material-ui/core/Divider';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

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
              <BooleanField label="Status" source="aprovado" />
              <NumberField source="rank"></NumberField>
            </Datagrid>
          )}
          {filterValues.aprovado === false && (
            <Datagrid {...props}>
              <BooleanField label="Status" source="aprovado" />
              <NumberField source="rank"></NumberField>
            </Datagrid>
          )}
          {filterValues.aprovado == null && (
            <Datagrid {...props}>
              <BooleanField label="Status" source="aprovado" />
              <NumberField source="rank"></NumberField>
            </Datagrid>
          )}
        </div>
      </Fragment>
    );
  }
}

const StyledTabbedDatagrid = withStyles(datagridStyles)(TabbedDatagrid);

const InscritoList = ({ classes, ...props }) => (
  <Show actions={false} {...props}>
    <ReferenceManyField title={false} reference="Inscritos" target="inscritoId">
      <List
        sort={{ field: 'nome', order: 'ASC' }}
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
