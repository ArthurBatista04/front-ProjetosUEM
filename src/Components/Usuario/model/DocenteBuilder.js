import Usuario from "./Usuario";
import Docente from "./Docente";
import UsuarioBuilder from "./UsuarioBuilder";

// Concrete Builder Docente
export default class DocenteBuilder extends UsuarioBuilder {
  constructor() {
    super();

    this.buildUsuario = (
      nome,
      email,
      username,
      password,
      realm = "Docente"
    ) => {
      this.usuario = new Usuario(nome, email, password, username, realm);
    };

    this.buildDocente = (
      matricula,
      cargo,
      lotacao,
      situacao,
      vencimentoContrato
    ) => {
      this.docente = new Docente(
        matricula,
        cargo,
        lotacao,
        situacao,
        vencimentoContrato
      );
    };

    this.get = () => {
      return { usuario: this.usuario, docente: this.docente };
    };

    this.buildDiscente = () => {};
  }

  setUsuarioId(usuarioId) {
    this.docente.setUsuarioId(usuarioId);
  }
}
