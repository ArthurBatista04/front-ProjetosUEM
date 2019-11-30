import Usuario from "./Usuario";
import Discente from "./Discente";

export default class DiscenteBuilder {
  constructor(
    nome,
    email,
    ra,
    curso,
    turno,
    campus,
    serie,
    situacaoAcademica,
    username,
    password
  ) {
    this.usuario = new Usuario(nome, email, password, username, "Discente");
    this.discente = new Discente(
      ra,
      curso,
      turno,
      campus,
      serie,
      situacaoAcademica
    );
  }

  setUsuarioId(usuarioId) {
    this.discente.setUsuarioId(usuarioId);
  }

  getDiscente() {
    return this.discente;
  }

  getUsuario() {
    return this.usuario;
  }
}
