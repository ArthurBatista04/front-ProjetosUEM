import React, { Component, Fragment } from 'react';

import Header from '../../Header/Header';

import { Link } from 'react-router-dom';
import { handleChange, HandleInscricao } from '../Controller/controller';
import { TextInput } from 'react-materialize';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
export default class cadastroProcessoSeletivo extends Component {
  state = {
    mensagem: '',
    curriculo: '',
    processoSeletivoId: this.props.match.params.processoId
  };

  handleSubmit = e => {
    e.preventDefault();

    HandleInscricao(this);
  };

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <div className="card-panel z-depth-2">
            <div className="row">
              <h3 style={{ textAlign: 'center' }}>{'Inscrição'}</h3>
              <div className="container">
                <form onSubmit={this.handleSubmit}>
                  <Tooltip
                    title={
                      <span style={{ fontSize: '12px' }}>
                        O que pode contribuir ao projeto?
                      </span>
                    }
                    TransitionComponent={Zoom}
                    enterDelay={500}
                  >
                    <TextInput
                      s={12}
                      icon="account_box"
                      label="Competências"
                      name="mensagem"
                      success=""
                      required
                      value={this.state.mensagem}
                      onChange={e => {
                        handleChange(this, e);
                      }}
                    />
                  </Tooltip>
                  <Tooltip
                    title={
                      <span style={{ fontSize: '12px' }}>
                        Por exemplo: lattex
                      </span>
                    }
                    TransitionComponent={Zoom}
                    enterDelay={500}
                  >
                    <TextInput
                      s={12}
                      icon="account_box"
                      label="Link para currículo"
                      name="curriculo"
                      success=""
                      required
                      value={this.state.curriculo}
                      onChange={e => {
                        handleChange(this, e);
                      }}
                    />
                  </Tooltip>
                  <button type="submit" className="btn blue lighten-1 right">
                    {'Submeter inscrição'}
                  </button>
                  <Link
                    className="btn blue lighten-1 left"
                    to={`/processoSeletivo/${this.state.processoSeletivoId}`}
                  >
                    {'Voltar'}
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
