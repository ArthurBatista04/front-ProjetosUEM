import React, { Component, Fragment } from 'react';
import formatDate from './formatDate';
import moment from 'moment';
// eslint-disable-next-line no-unused-vars
import tz from 'moment-timezone';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-materialize';
import { HandleGetProcessosSeletivo } from '../Controller/controller';
import Header from '../../Header/Header';
import CardError from '../../cardError';
class sobreProcessoSeletivo extends Component {
  componentWillMount() {
    const userId = localStorage.getItem('user_id');
    const token = localStorage.getItem('access_token');
    const Token = {
      headers: {
        Authorization: token
      }
    };
    HandleGetProcessosSeletivo(this, this.props.match.params.processoId);
    userId
      ? this.setState({ userLogged: true, Token })
      : this.setState({ userLogged: false });
  }
  getInscrever = () => {
    return this.state.userLogged
      ? `/processoSeletivo/${this.props.match.params.processoId}/cadastro`
      : `/login/`;
  };

  state = {
    userLogged: false,
    showCardLogin: false,
    usuario: {},
    Token: {},
    name: '',
    password: '',
    redirect: false,
    openDialogBox: false,
    requirementKey: Math.random(),
    processoSeletivo: []
  };

  getTextButton = () => {
    const { userLogged } = this.state;
    return userLogged ? 'Inscrever-se' : 'Efetue login';
  };

  getTime = time => {
    return time.substring(11, 16);
  };

  buildRow = (key, value) => (
    <Row>
      <Col s={12} m={6}>
        <b className="left hide-on-small-and-down">{key}</b>
        <b className="really-center-span hide-on-med-and-up">{key}</b>
      </Col>

      <Col s={12} m={6}>
        <span className="right hide-on-small-and-down">{value}</span>
        <span className="really-center-span hide-on-med-and-up">{value}</span>
      </Col>
    </Row>
  );

  render() {
    const {
      descricao,
      dataInicio,
      prerequisitos,
      encerrado,
      projetoId
    } = this.state.processoSeletivo;
    console.log(this.state.processoSeletivo);
    const titleStyle = {
      fontWeight: 'bold',
      fontSize: `${2}rem`,
      fontFamily: 'Nunito'
    };
    if (projetoId) {
      return (
        <Fragment>
          <Header></Header>
          <div className="container">
            <div className="card-panel z-depth-2">
              <div className="row">
                <div id="sobre" className="col s12">
                  <h3 style={titleStyle} className="center">
                    Processo Seletivo
                  </h3>
                  <div></div>
                  <h5>
                    <i className="material-icons left">equalizer</i>Sobre o
                    processo seletivo
                  </h5>
                  <p className="basicInfo grey-text text-darken-2">
                    {descricao}
                  </p>
                  <br />
                  <h5>
                    <i className="material-icons left">info</i>Informações
                    importantes
                  </h5>
                  <div className="basicInfo grey-text text-darken-2">
                    <hr className="style-six" />
                    {this.buildRow(
                      'Inicio do processo seletivo:',
                      formatDate(
                        moment.tz(dataInicio, 'America/Sao_Paulo').format()
                      )
                    )}
                    <hr className="style-six" />

                    {this.buildRow('Prerequisitos', prerequisitos)}
                  </div>
                  <br />
                  {encerrado ? (
                    <Link
                      to={`/processoSeletivo/${this.props.match.params.processoId}/edital`}
                      className="btn blue lighten-1 left "
                      style={{
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden'
                      }}
                    >
                      Visualizar edital
                    </Link>
                  ) : null}
                  <Link
                    to={this.getInscrever()}
                    className="btn blue lighten-1 right"
                    style={{
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden'
                    }}
                  >
                    Inscrever-se
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <Header></Header>
          <CardError titulo={'Carregando...'} />
        </Fragment>
      );
    }
  }
}

export default sobreProcessoSeletivo;
