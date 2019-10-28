import React, { Component, Fragment } from 'react';

import { Row, Col, Collection, CollectionItem } from 'react-materialize';
import { Redirect } from 'react-router-dom';
import formatDate from './formatDate';
import moment from 'moment';
// eslint-disable-next-line no-unused-vars
import tz from 'moment-timezone';

export class ItemProcessoSeletivo extends Component {
  state = {
    redirect: false,
    idRedirect: null
  };

  handleClick = () => {
    this.setState({ idRedirect: this.props.processo.id, redirect: true });
  };

  buildRow = (key, value, color) => (
    <Row>
      <Col s={12} m={6}>
        <b className={`left hide-on-small-and-down`} style={{ color: color }}>
          {key}
        </b>
        <b
          style={{ color: color }}
          className={`really-center-span hide-on-med-and-up `}
        >
          {key}
        </b>
      </Col>

      <Col s={12} m={6}>
        <span
          style={{ color: color }}
          className={`right hide-on-small-and-down `}
        >
          {value}
        </span>
        <span
          style={{ color: color }}
          className={`really-center-span hide-on-med-and-up `}
        >
          {value}
        </span>
      </Col>
    </Row>
  );

  getText = (style, text) => (
    <Fragment>
      <h5 className="hide-on-small-and-down" style={style}>
        {text}
      </h5>
      <h5 className="hide-on-med-and-up center" style={style}>
        {text}
      </h5>
    </Fragment>
  );

  render() {
    const { descricao, dataInicio, encerrado } = this.props.processo;
    const { redirect, idRedirect } = this.state;

    if (redirect) {
      return <Redirect to={`/processoSeletivo/${idRedirect}`} />;
    }

    return (
      <Fragment>
        <Row>
          <Col m={12} s={12}>
            <Collection
              className="hoverable"
              onMouseEnter={() => {
                document.body.style.cursor = 'pointer';
              }}
              onMouseLeave={() => {
                document.body.style.cursor = 'default';
              }}
              onClick={this.handleClick}
            >
              <CollectionItem className="avatar" style={{ padding: 10 }}>
                <div className="col m10 s12">
                  <div className="hoverOn">
                    <div className="basicInfo grey-text text-darken-2">
                      <p>
                        {descricao.length > 400
                          ? descricao.substring(0, 400) + '...'
                          : descricao}
                      </p>

                      {dataInicio ? (
                        <Fragment>
                          <hr className="style-six" />
                          {this.buildRow(
                            'Início das inscrições:',
                            formatDate(
                              moment
                                .tz(dataInicio, 'America/Sao_Paulo')
                                .format()
                            )
                          )}
                        </Fragment>
                      ) : null}

                      {encerrado ? (
                        <Fragment>
                          <hr className="style-six" />
                          {this.buildRow(
                            'Processo está fechado para inscrições',
                            '',
                            'red'
                          )}
                        </Fragment>
                      ) : (
                        <Fragment>
                          <hr className="style-six" />
                          {this.buildRow(
                            'Processo está aberto à inscrições',
                            '',
                            'blue'
                          )}
                        </Fragment>
                      )}
                    </div>
                  </div>
                </div>
              </CollectionItem>
            </Collection>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default ItemProcessoSeletivo;
