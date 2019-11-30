export default class Discente {
  constructor(ra, curso, turno, campus, serie, situacaoAcademica) {
    this.ra = ra;
    this.curso = curso;
    this.turno = turno;
    this.campus = campus;
    this.serie = serie;
    this.situacaoAcademica = situacaoAcademica;
    this.usuarioId = undefined;
  }

  /**
   * @param {string} usuarioId
   */
  setUsuarioId(usuarioId) {
    this.usuarioId = usuarioId;
  }
}
