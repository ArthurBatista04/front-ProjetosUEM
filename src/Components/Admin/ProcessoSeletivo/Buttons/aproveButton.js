import { connect } from 'react-redux';
import { change, submit, isSubmitting } from 'redux-form';
import React, { Component, Fragment } from 'react';
import {
  Button,
  SaveButton,
  BooleanInput,
  NumberInput,
  ReferenceField,
  TextField,
  DisabledInput,
  SimpleForm,
  withDataProvider
} from 'react-admin';
import IconContentAdd from '@material-ui/icons/ThumbUp';
import IconCancel from '@material-ui/icons/Cancel';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { HandleAprove } from '../Controller/CrtlInscrito';
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
    submit('post-quick-create');
  };
  handleSubmit = value => {
    HandleAprove(this);
  };

  render() {
    const { showDialog } = this.state;
    const { isSubmitting, basePath, record, resource } = this.props;

    return (
      <Fragment>
        <Button onClick={this.handleClick} label="Aprovar">
          <IconContentAdd />
        </Button>
        <Dialog
          fullWidth
          open={showDialog}
          onClose={this.handleCloseClick}
          aria-label="Alterar rank"
        >
          <DialogTitle>Realmente deseja aprovar esse candidato?</DialogTitle>
          <DialogContent>
            <SimpleForm
              // We override the redux-form name to avoid collision with the react-admin main form
              form="post-quick-create"
              // We override the redux-form onSubmit prop to handle the submission ourselves
              onSubmit={this.handleSubmit}
              resource="Inscritos"
              // We want no toolbar at all as we have our modal actions
              toolbar={null}
              record={record}
            >
              {/* <ReferenceField
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
              </ReferenceField> */}
            </SimpleForm>
          </DialogContent>
          <DialogActions>
            <SaveButton
              label="Confirmar"
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
  isSubmitting: isSubmitting('post-quick-create')(state)
});

const mapDispatchToProps = {
  change,

  submit
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withDataProvider(PostQuickCreateButton));
