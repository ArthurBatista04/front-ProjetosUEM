import React, { Fragment } from "react";
import { Datagrid, TextField, List } from "react-admin";
import withStyles from "@material-ui/core/styles/withStyles";

import Divider from "@material-ui/core/Divider";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

const datagridStyles = {
  total: { fontWeight: "bold" }
};

class TabbedDatagrid extends React.Component {
  tabs = [
    { id: "Discente", name: "Discente" },
    { id: "Docente", name: "Docente" },
    { id: "admin", name: "admin" }
  ];

  state = { admin: [], discente: [], docente: [] };

  static getDerivedStateFromProps(props, state) {
    if (props.ids !== state[props.filterValues.status]) {
      return { ...state, [props.filterValues.status]: props.ids };
    }
    return null;
  }

  handleChange = (event, value) => {
    const { filterValues, setFilters } = this.props;
    setFilters({ ...filterValues, realm: value });
  };

  render() {
    const { classes, filterValues, ...props } = this.props;
    return (
      <Fragment>
        <Tabs
          fullWidth
          centered
          value={filterValues.realm}
          indicatorColor="white"
          textColor="white"
          onChange={this.handleChange}
        >
          {this.tabs.map(choice => (
            <Tab key={choice.id} label={choice.name} value={choice.id} />
          ))}
        </Tabs>
        <Divider />
        <div>
          {filterValues.realm === "Docente" && (
            <Datagrid {...props}>
              <TextField source="nome" />
              <TextField source="email" />
              <TextField label="Privilégio" source="realm" />
            </Datagrid>
          )}
          {filterValues.realm === "Discente" && (
            <Datagrid {...props}>
              <TextField source="nome" />
              <TextField source="email" />
              <TextField label="Privilégio" source="realm" />
            </Datagrid>
          )}
          {filterValues.realm === "admin" && (
            <Datagrid {...props}>
              <TextField source="nome" />
              <TextField source="email" />
              <TextField label="Privilégio" source="realm" />
            </Datagrid>
          )}
        </div>
      </Fragment>
    );
  }
}

const StyledTabbedDatagrid = withStyles(datagridStyles)(TabbedDatagrid);

const UserList = ({ classes, ...props }) => (
  <List
    sort={{ field: "nome", order: "ASC" }}
    bulkActionButtons={false}
    {...props}
  >
    <StyledTabbedDatagrid></StyledTabbedDatagrid>
  </List>
);

export default UserList;
