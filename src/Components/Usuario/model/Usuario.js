export default class Usuario {
  constructor(nome, email, password, username, realm) {
    this.nome = nome.toUpperCase();
    this.email = email;
    this.password = password;
    this.username = username.toLowerCase();
    this.realm = realm;
  }
}
