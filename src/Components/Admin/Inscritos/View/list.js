import React, { Fragment } from 'react';
import { Datagrid, TextField, List, NumberField } from 'react-admin';
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
    if (props.ids !== state[props.filterValues.status]) {
      return { ...state, [props.filterValues.status]: props.ids };
    }
    return null;
  }

  handleChange = (event, value) => {
    const { filterValues, setFilters } = this.props;
    setFilters({ ...filterValues, status: value });
  };

  render() {
    const { classes, filterValues, ...props } = this.props;
    return (
      <Fragment>
        <Tabs
          fullWidth
          centered
          value={filterValues.status}
          indicatorColor="primary"
          onChange={this.handleChange}
        >
          {this.tabs.map(choice => (
            <Tab key={choice.id} label={choice.name} value={choice.id} />
          ))}
        </Tabs>
        <Divider />
        <div>
          {filterValues.status === true && (
            <Datagrid {...props}>
              <TextField source="nome" />
              <TextField source="email" />
              <TextField label="Privilégio" source="status" />
              <NumberField source="rank"></NumberField>
            </Datagrid>
          )}
          {filterValues.status === false && (
            <Datagrid {...props}>
              <TextField source="nome" />
              <TextField source="email" />
              <TextField label="Privilégio" source="status" />
            </Datagrid>
          )}
          {filterValues.status === null && (
            <Datagrid {...props}>
              <TextField source="nome" />
              <TextField source="email" />
              <TextField label="Privilégio" source="status" />
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
  <List
    sort={{ field: 'nome', order: 'ASC' }}
    filter={{ processoseletivoId: window.location.hash.substring(12) }}
    bulkActionButtons={false}
    {...props}
  >
    <StyledTabbedDatagrid></StyledTabbedDatagrid>
  </List>
);

export default InscritoList;
