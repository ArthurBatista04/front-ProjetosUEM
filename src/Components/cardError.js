import React from "react";

const cardError = props => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-content">
          <span className="card-title">{props.titulo}</span>
          <p>{props.mensagem}</p>
        </div>
      </div>
    </div>
  );
};
export default cardError;
