import React, { Component, Fragment } from 'react';
import Headers from '../../Header/Header';
import CardError from '../../cardError';
import { Link } from 'react-router-dom';
import ItemInscrito from './itemInscritos';
import { HandleInscrito } from '../Controller/controller';
export class Inscritos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Inscritos: []
    };
  }

  componentWillMount() {
    HandleInscrito(this, this.props.match.params.processoId);
  }

  render() {
    const { Inscritos } = this.state;
    if (Inscritos.length === 0) {
      return (
        <Fragment>
          <Headers></Headers>
          <CardError
            titulo={
              'Não consegui encontrar nenhum inscrito nesse processo seletivo'
            }
            mensagem={
              'No momento, o docente pode estar avaliando os inscritos. Volte mais tarde. '
            }
          />
        </Fragment>
      );
    } else {
      return (
        <Fragment>
          <Headers></Headers>
          <div className="container">
            <div id="active" className="card-panel z-depth-2">
              <h3 style={{ textAlign: 'center' }}>
                {' '}
                Edital do processo seletivo{' '}
              </h3>
              {Inscritos.map(inscrito => (
                <ItemInscrito inscrito={inscrito} key={inscrito.id} />
              ))}
            </div>
            <Link
              className="btn blue lighten-1 left"
              to={`/processoSeletivo/${this.props.match.params.processoId}`}
            >
              {'Voltar'}
            </Link>
          </div>
        </Fragment>
      );
    }
  }
}

export default Inscritos;
