class Docente {
  constructor(matricula, cargo, lotacao, situacao, vencimentoContrato) {
    this.matricula = matricula;
    this.cargo = cargo;
    this.lotacao = lotacao;
    this.situacao = situacao;
    this.vencimentoContrato = vencimentoContrato;
    this._usuarioId = undefined;
  }

  /**
   * @param {string} usuarioId
   */
  set usuarioId(usuarioId) {
    this._usuarioId = usuarioId;
  }
}

class Discente {
  constructor(ra, curso, turno, campus, serie, situacaoAcademica) {
    this.ra = ra;
    this.curso = curso;
    this.turno = turno;
    this.campus = campus;
    this.serie = serie;
    this.situacaoAcademica = situacaoAcademica;
    this._usuarioId = undefined;
  }

  /**
   * @param {string} usuarioId
   */
  set usuarioId(usuarioId) {
    this._usuarioId = usuarioId;
  }
}

class Usuario {
  constructor(nome, email, password, username, realm) {
    this.nome = nome.toUpperCase();
    this.email = email;
    this.password = password;
    this.username = username.toLowerCase();
    this.realm = realm;
  }
}

export class DiscenteBuilder {
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

  getDiscente() {
    return this.discente;
  }

  getUsuario() {
    return this.usuario;
  }
}

export class DocenteBuilder {
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

  getDocente() {
    return this.docente;
  }

  getUsuario() {
    return this.usuario;
  }
}
