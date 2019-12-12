// Abstract Builder
export default class UsuarioBuilder {
  constructor() {
    this.usuario = undefined;
    this.docente = undefined;
    this.discente = undefined;

    this.buildUsuario = undefined;
    this.buildDocente = undefined;
    this.buildDiscente = undefined;

    this.get = undefined;
  }
}
