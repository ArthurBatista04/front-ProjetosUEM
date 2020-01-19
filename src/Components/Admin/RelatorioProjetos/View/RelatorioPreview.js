import React, { Component, Fragment } from "react";
import "./centerIfSmall.css";

class RelatorioPreview extends Component {
  buildRow = (key, value) => (
    <div className="row">
      <div className="col m6 s12">
        <b className="left hide-on-small-and-down">{key}</b>
        <b className="really-center-span hide-on-med-and-up">{key}</b>
      </div>

      <div className="col m6 s12">
        <span className="right hide-on-small-and-down">{value}</span>
        <span className="really-center-span hide-on-med-and-up">{value}</span>
      </div>
    </div>
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
    const { dados } = this.props;
    return (
      <Fragment>
        <div
          className="card-panel hoverable"
          onMouseEnter={() => {
            document.body.style.cursor = "pointer";
          }}
          onMouseLeave={() => {
            document.body.style.cursor = "default";
          }}
        >
          <div className="row">
            <div className="col s12">
              {this.getText(titleStyle, dados.titulo)}
              <div className="basicInfo grey-text text-darken-2">
                {this.buildRow("Relevância (%):", dados.relevancia)}
                <hr className="style-six" />
                {this.buildRow("Média de acessos:", dados.mediaAcessos)}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const titleStyle = {
  fontWeight: "bold",
  fontSize: `${2}rem`,
  fontFamily: "Nunito"
};

export default RelatorioPreview;
