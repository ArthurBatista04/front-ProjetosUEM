import Usuario from "./Usuario";
import Discente from "./Discente";
import UsuarioBuilder from "./UsuarioBuilder";

// Concrete Builder Discente
export default class DiscenteBuilder extends UsuarioBuilder {
  constructor() {
    super();

    this.buildUsuario = (
      nome,
      email,
      username,
      password,
      realm = "Discente"
    ) => {
      this.usuario = new Usuario(nome, email, password, username, realm);
    };

    this.buildDiscente = (
      ra,
      curso,
      turno,
      campus,
      serie,
      situacaoAcademica
    ) => {
      this.discente = new Discente(
        ra,
        curso,
        turno,
        campus,
        serie,
        situacaoAcademica
      );
    };

    this.get = () => {
      return { usuario: this.usuario, discente: this.discente };
    };

    this.buildDocente = () => {};
  }

  setUsuarioId(usuarioId) {
    this.discente.setUsuarioId(usuarioId);
  }
}
