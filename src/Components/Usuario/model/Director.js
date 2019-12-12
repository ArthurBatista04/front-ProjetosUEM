// eslint-disable-next-line no-unused-vars
import UsuarioBuilder from "./UsuarioBuilder";

export default class Director {
  constructor() {
    this._usuarioBuilder = undefined;
  }

  /**
   * @param {UsuarioBuilder} usuarioBuilder
   */
  set usuarioBuilder(usuarioBuilder) {
    this._usuarioBuilder = usuarioBuilder;
  }

  get usuarioBuilder() {
    return this._usuarioBuilder;
  }

  buildUsuario({
    usuario: { nome, email, username, password },
    discente: { ra, curso, turno, campus, serie, situacaoAcademica } = {},
    docente: { matricula, cargo, lotacao, situacao, vencimentoContrato } = {}
  }) {
    this._usuarioBuilder.buildUsuario(nome, email, username, password);
    this._usuarioBuilder.buildDiscente(
      ra,
      curso,
      turno,
      campus,
      serie,
      situacaoAcademica
    );
    this._usuarioBuilder.buildDocente(
      matricula,
      cargo,
      lotacao,
      situacao,
      vencimentoContrato
    );
  }

  getUsuario() {
    return this._usuarioBuilder.get();
  }
}
