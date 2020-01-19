import React, { Fragment, Component } from "react";
import { getDadosRelatorio, getProjetos } from "../Controller/controller";
import RelatorioPreview from "./RelatorioPreview";

class RelatorioProjetos extends Component {
  state = { dadosRelatorio: [] };

  async componentWillMount() {
    const projetos = await getProjetos();
    const dados = await getDadosRelatorio(projetos.data);

    console.log("Dados: ", dados);
    this.setState({ dadosRelatorio: dados });
  }

  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="card-panel">
            {this.state.dadosRelatorio.map((dados, i) => (
              <RelatorioPreview key={i} dados={dados} />
            ))}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default RelatorioProjetos;
