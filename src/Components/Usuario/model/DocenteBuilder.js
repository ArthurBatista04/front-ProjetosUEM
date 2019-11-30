import Usuario from "./Usuario";
import Docente from "./Docente";

export default class DocenteBuilder {
  constructor(
    nome,
    email,
    matricula,
    cargo,
    lotacao,
    situacao,
    vencimentoContrato,
    username,
    password
  ) {
    this.usuario = new Usuario(nome, email, password, username, "Docente");
    this.docente = new Docente(
      matricula,
      cargo,
      lotacao,
      situacao,
      vencimentoContrato
    );
  }

  setUsuarioId(usuarioId) {
    this.docente.setUsuarioId(usuarioId);
  }

  getDocente() {
    return this.docente;
  }

  getUsuario() {
    return this.usuario;
  }
}
