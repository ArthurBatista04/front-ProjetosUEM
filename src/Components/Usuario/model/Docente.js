export default class Docente {
  constructor(matricula, cargo, lotacao, situacao, vencimentoContrato) {
    this.matricula = matricula;
    this.cargo = cargo;
    this.lotacao = lotacao;
    this.situacao = situacao;
    this.vencimentoContrato = vencimentoContrato;
    this.usuarioId = undefined;
  }

  /**
   * @param {string} usuarioId
   */
  setUsuarioId(usuarioId) {
    this.usuarioId = usuarioId;
  }
}
