import Swal from "sweetalert2";
import { createDiscente, createUsuario } from "../../controller/CtrlUsuario";

const sweetAlert = (type, title, text, showConfirmButton) => {
  return Swal.fire({
    type,
    title,
    text,
    showConfirmButton
  });
};

export const handleClick = self => {
  self.setState({ redirect: true, to: "Cadastro" });
};

export const handleChange = (self, e, mask) => {
  if (typeof mask === "function")
    self.setState({ [e.target.name]: mask(e.target.value) });
  else self.setState({ [e.target.name]: e.target.value });
};

export const handleSignUp = async (self, e) => {
  e.preventDefault();

  if (self.state.password !== self.state.confirmPassword) {
    self.setState({ confirmPassword: "" });
    return sweetAlert(
      "error",
      "Senha confirmada incorretamente",
      "Tente novamente"
    );
  } else if (self.state.password.length < 4) {
    self.setState({ confirmPassword: "" });
    return sweetAlert(
      "error",
      "Senha deve ter pelo menos 4 caracteres",
      "Tente novamente"
    );
  }

  const {
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
  } = self.state;

  const newDiscente = {
    ra,
    curso,
    turno,
    campus,
    serie,
    situacaoAcademica
  };

  const newUser = {
    nome: nome.toUpperCase(),
    email,
    password,
    username: username.toLowerCase(),
    realm: "Discente"
  };

  try {
    const res = await createUsuario(newUser);
    newDiscente["usuarioId"] = res.data.id;
    await createDiscente(newDiscente);

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
