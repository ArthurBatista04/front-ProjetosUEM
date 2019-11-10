import React, { Component, Fragment } from 'react';
import Headers from '../../Header/Header';
import CardError from '../../cardError';
import ItemProcessoSeletivo from './itemProcessoSeletivo';
import { HandleProcessosSeletivos } from '../Controller/controller';
export class showProcessosSeeltivos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      processosSeletivos: []
    };
  }

  componentWillMount() {
    console.log(this.props);
    HandleProcessosSeletivos(this, this.props.match.params.id);
  }

  render() {
    const { processosSeletivos } = this.state;
    if (processosSeletivos.length === 0) {
      return (
        <Fragment>
          <Headers></Headers>
          <CardError
            titulo={
              'Não consegui encontrar nenhum processo seletivo ativo deste projeto'
            }
            mensagem={
              'No momento, o docente não tem nenhum processo seletivo cadastrado. Volte mais tarde. '
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
              <h3 style={{ textAlign: 'center' }}> Processos Seletivos </h3>
              {processosSeletivos.map(processos => (
                <ItemProcessoSeletivo processo={processos} key={processos.id} />
              ))}
            </div>
          </div>
        </Fragment>
      );
    }
  }
}

export default showProcessosSeeltivos;
