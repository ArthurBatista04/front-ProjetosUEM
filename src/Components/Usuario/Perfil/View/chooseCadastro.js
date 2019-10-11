import React, { Component, Fragment } from "react";
import Header from "../../../Header/Header";
import { Select } from "react-materialize";
import { Redirect } from "react-router-dom";
import { handleChange, handleSubmit } from "../controller/CtrlChooseCadastro";

class chooseCadastro extends Component {
  state = {
    type: 0,
    redirect: false
  };

  render() {
    if (this.state.redirect) {
      if (this.state.type === 1) return <Redirect to="/cadastro/Docente" />;
      else if (this.state.type === 2)
        return <Redirect to="/cadastro/Discente" />;
    }

    return (
      <Fragment>
        <Header />
        <div className="section" />
        <center>
          <div className="container">
            <div
              className="z-depth-1 grey lighten-4 row"
              style={{
                display: "inlineBlock",
                padding: 32 + "px" + 48 + "px" + 0 + "px" + 48 + "px",
                border: 1 + "px solid  #EEE"
              }}
            >
              <center>
                <form className="col s12" onSubmit={() => handleSubmit(this)}>
                  <div className="col s12">
                    <div className="container">
                      <div className="row">
                        <Select
                          s={12}
                          value={this.state.value}
                          onChange={e => handleChange(this, e)}
                        >
                          <option
                            name="Selecione o tipo de cadastro"
                            value="0"
                            defaultValue
                          >
                            Selecione o tipo de cadastro
                          </option>
                          <option name="Docente" value="1">
                            Docente
                          </option>
                          <option name="Discente" value="2">
                            Discente
                          </option>
                        </Select>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <button
                      type="submit"
                      name="btn_continue"
                      className="col s4 btn btn-large waves-effect black"
                      style={{ float: "none" }}
                    >
                      Continuar
                    </button>
                  </div>
                </form>
              </center>
            </div>
          </div>
        </center>
        <div className="section" />
      </Fragment>
    );
  }
}

export default chooseCadastro;
