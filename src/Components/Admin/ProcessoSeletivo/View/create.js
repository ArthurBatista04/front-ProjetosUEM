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
  DateInput,
  LongTextInput
} from "react-admin";
import IconContentAdd from "@material-ui/icons/Add";
import IconCancel from "@material-ui/icons/Cancel";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import PropTypes from "prop-types";
import DialogContent from "@material-ui/core/DialogContent";
import Br from "date-fns/locale/pt-BR";
import DateFnsUtils from "@date-io/date-fns";

import DialogActions from "@material-ui/core/DialogActions";
import { HandleProcesso } from "../Controller/CrtlInscrito";
DateFnsUtils.prototype.getStartOfMonth = DateFnsUtils.prototype.startOfMonth;
const validarDados = values => {
  const errors = {};
  const dataAtual = new Date().setHours(0, 0, 0, 0).valueOf();
  if (!values.prerequisitos) {
    errors.prerequisitos = ["Pre requisitos são necessários"];
  } else if (!values.descricao) {
    errors.descricao = ["Uma descrição é necessária"];
  } else if (values.descricao.length > 200) {
    errors.descricao = ["Max de 200 caracteres"];
  } else if (
    values.dataInicio &&
    values.dataInicio.valueOf() < dataAtual.valueOf()
  ) {
    errors.dataInicio = ["A data não pode ser anterior ao dia atual!"];
  }
  return errors;
};
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
    HandleProcesso(this, values);
    this.setState({ showDialog: false });
  };

  render() {
    const { showDialog } = this.state;
    const { isSubmitting } = this.props;
    const dateFormatter = v => {
      // v is a `Date` object
      if (!(v instanceof Date) || isNaN(v)) return;
      let d = new Date(v),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [year, month, day].join("-");
      // return `${(pad + dd).slice(-2)}/${(pad + mm).slice(-2)}/${yy}`;
    };
    const dateParser = v => {
      // v is a string of "YYYY-MM-DD" format
      const match = /(\d{4})-(\d{2})-(\d{2})/.exec(v);
      if (match === null) return;
      const d = new Date(match[1], parseInt(match[2], 10) - 1, match[3]);
      if (isNaN(d)) return;
      return d;
    };
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
              validate={validarDados}
            >
              <LongTextInput source="prerequisitos" />
              <LongTextInput source="descricao" />
              <DateInput
                label="Início do processo seletivo"
                source="dataInicio"
                format={dateFormatter}
                parse={dateParser}
                providerOptions={{ utils: DateFnsUtils, locale: Br }}
              />
            </SimpleForm>
          </DialogContent>
          <DialogActions>
            <SaveButton
              label="Criar processo seletivo"
              saving={isSubmitting}
              onClick={this.handleSaveClick}
            />
            <Button label="ra.action.cancel" onClick={this.handleCloseClick}>
              <IconCancel />
            </Button>
          </DialogActions>
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
