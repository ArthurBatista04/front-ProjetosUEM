import { connect } from "react-redux";
import { change, submit, isSubmitting } from "redux-form";
import React, { Component, Fragment } from "react";
import {
  required,
  Button,
  SaveButton,
  CREATE,
  SimpleForm,
  withDataProvider,
  LongTextInput
} from "react-admin";
import IconContentAdd from "@material-ui/icons/Add";
import IconCancel from "@material-ui/icons/Cancel";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import PropTypes from "prop-types";
import DialogContent from "@material-ui/core/DialogContent";
// import Br from 'date-fns/locale/pt-BR';
// import DateFnsUtils from '@date-io/date-fns';
// import { DateTimeInput } from 'react-admin-date-inputs';
// import DialogActions from '@material-ui/core/DialogActions';
// DateFnsUtils.prototype.getStartOfMonth = DateFnsUtils.prototype.startOfMonth;

class PostQuickCreateButton extends Component {
  state = {
    error: false,
    showDialog: false
  };

  handleClick = () => {
    this.setState({ showDialog: true });
  };

  handleCloseClick = () => {
    this.setState({ showDialog: false });
  };

  handleSaveClick = () => {
    const { submit } = this.props;

    // Trigger a submit of our custom quick create form
    // This is needed because our modal action buttons are oustide the form
    submit("post-quick-create");
  };

  handleSubmit = values => {
    const { dataProvider } = this.props;
    console.log(this.props);
    dataProvider(
      CREATE,
      "processosSeletivos",
      {
        pagination: { page: 1, perPage: 0 },
        sort: { field: "id", order: "DESC" },
        data: {
          projetoId: this.props.projetoId,
          prerequisitos: values.prerequisitos,
          descricao: values.descricao,
          dataInicio: values.dataInicio
        }
      },
      {
        onSuccess: {
          refresh: true
        },
        onError: {
          notification: {
            body: "Error: algo deu errado!",
            level: "warning"
          }
        }
      }
    );
    this.setState({ showDialog: false });
  };

  render() {
    const { showDialog } = this.state;
    const { isSubmitting } = this.props;

    return (
      <Fragment>
        <Button onClick={this.handleClick} label="Processo seletivo">
          <IconContentAdd />
        </Button>
        <Dialog
          fullWidth
          open={showDialog}
          onClose={this.handleCloseClick}
          aria-label="Criar processo seletivo"
        >
          <DialogTitle>Processo seletivo</DialogTitle>
          <DialogContent>
            <SimpleForm
              // We override the redux-form name to avoid collision with the react-admin main form
              form="post-quick-create"
              resource="turma"
              // We override the redux-form onSubmit prop to handle the submission ourselves
              onSubmit={this.handleSubmit}
              // We want no toolbar at all as we have our modal actions
              toolbar={null}
            >
              <LongTextInput validate={required()} source="prerequisitos" />
              <LongTextInput validate={required()} source="descricao" />
              {/* <DateTimeInput
                label="Início do processo seletivo"
                source="dataInicio"
                providerOptions={{ utils: DateFnsUtils, locale: Br }}
              /> */}
            </SimpleForm>
          </DialogContent>
          {/* <DialogActions>
            <SaveButton
              label="Criar processo seletivo"
              saving={isSubmitting}
              onClick={this.handleSaveClick}
            />
            <Button label="ra.action.cancel" onClick={this.handleCloseClick}>
              <IconCancel />
            </Button>
          </DialogActions> */}
        </Dialog>
      </Fragment>
    );
  }
}

PostQuickCreateButton.propTypes = {
  dataProvider: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  record: PropTypes.object
};
const mapStateToProps = state => ({
  isSubmitting: isSubmitting("post-quick-create")(state)
});

const mapDispatchToProps = {
  change,

  submit
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withDataProvider(PostQuickCreateButton));
