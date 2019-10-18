import axios from "axios";
import Swal from "sweetalert2";
import PathName from "../../../pathConst.js";

const sweetAlert = (type, title, text, showConfirmButton) => {
  return Swal.fire({
    type,
    title,
    text,
    showConfirmButton
  });
};

const createDocente = docente => {
  return axios.post(`${PathName}/api/Docentes`, docente);
};

const createUsuario = usuario => {
  return axios.post(`${PathName}/api/Usuarios`, usuario);
};

export const handleClick = self => {
  self.setState({ redirect: true, to: "Cadastro" });
};

export const handleChange = (self, e, mask) => {
  if (typeof mask === "function")
    self.setState({ [e.target.name]: mask(e.target.value) });
  else self.setState({ [e.target.name]: e.target.value });
};

export const handleDatePickerChange = (self, e) => {
  self.setState({ vencimentoContrato: e.toString() });
};

export const handleSignUp = async (self, e) => {
  e.preventDefault();

  if (self.state.password !== self.state.confirmPassword) {
    self.setState({ confirmPassword: "" });
    return Swal.fire({
      type: "error",
      title: "Senha confirmada incorretamente",
      text: "Tente novamente"
    });
  } else if (self.state.password.length < 4) {
    self.setState({ confirmPassword: "" });
    return Swal.fire({
      type: "error",
      title: "Senha deve ter pelo menos 4 caracteres",
      text: "Tente novamente"
    });
  }

  const {
    nome,
    email,
    matricula,
    cargo,
    lotacao,
    situacao,
    vencimentoContrato,
    username,
    password
  } = self.state;

  const newDocente = {
    matricula,
    cargo,
    lotacao,
    situacao,
    vencimentoContrato
  };

  const newUser = {
    nome: nome.toUpperCase(),
    email,
    password,
    username: username.toLowerCase(),
    realm: "Docente"
  };

  try {
    const docente = await createDocente(newDocente);
    newUser["docenteId"] = docente.data.id;
    const res = await createUsuario(newUser);

    if (res.status >= 200 && res.status < 300) {
      sweetAlert(
        "success",
        "Cadastro realizado com sucesso",
        "Veja seu email para confirmar sua conta",
        true
      );
      self.setState({ redirect: true });
    }
  } catch (err) {
    sweetAlert(
      "error",
      "Ops! Algo deu errado",
      err.response.data.error.message,
      true
    );
  }
};
