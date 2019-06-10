import React, { Component, Fragment } from "react";
import NavBarDocente from "./navBarDocente.js";

export class profile extends Component {
  render() {
    return (
      <div>
        <NavBarDocente></NavBarDocente>
      <Fragment>
        <link
          href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css"
          rel="stylesheet"
          id="bootstrap-css"
        />
        <div className="container">
          <div className="row">
            <div className="panel panel-default">
              <div className="panel-heading">
                {" "}
                <h4>Perfil do professor</h4>
              </div>
              <div className="panel-body">
                <div className="col-md-4 col-xs-12 col-sm-6 col-lg-4">
                  <img
                    alt="User Pic"
                    src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg"
                    id="profile-image1"
                    className="img-circle img-responsive"
                  />
                </div>
                <div className="col-md-8 col-xs-12 col-sm-6 col-lg-8">
                  <div className="container">
                    <h2>John Doe</h2>
                    <span>
                      um <b> Professor</b>
                    </span>
                  </div>
                  <hr />
                  <ul className="container details">
                    <li>
                      <span>
                        <span
                          className="glyphicon glyphicon-user one"
                          style={{ width: 50 + "px" }}
                        />
                        i.rudberg
                      </span>
                    </li>
                    <li>
                      <span>
                        <span
                          className="glyphicon glyphicon-envelope one"
                          style={{ width: 50 + "px" }}
                        />
                        somerandom@email.com
                      </span>
                    </li>
                    <li>
                      <span>
                        <span
                          className="glyphicon glyphicon-briefcase"
                          style={{ width: 50 + "px" }}
                        />
                        Professor efetivo
                      </span>
                    </li>
                  </ul>
                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
      </div>
    );
  }
}

export default profile;
