import Swal from "sweetalert2";
import PathName from "../../../pathConst.js";
import Axios from "axios";

export const handleChange = (self, e) => {
  self.setState({ [e.target.name]: e.target.value });
};

export const handlePassChange = async (self, e) => {
  e.preventDefault();

  const { newPassword, confirmNewPassword } = self.state;
  const userId = localStorage.getItem("user_id");

  if (newPassword !== confirmNewPassword) {
    return Swal.fire({
      type: "error",
      title: "As senhas estão diferentes",
      text: "É necessário que a nova senha e a confirmação sejam iguais"
    });
  } else if (newPassword.length < 4) {
    self.setState({ confirmPassword: "" });
    return Swal.fire({
      type: "error",
      title: "Senha deve ter pelo menos 4 caracteres",
      text: "Tente novamente"
    });
  } else {
    Axios.post(
      `${PathName}/api/Usuarios/change-password`,
      {
        oldPassword: self.state.currentPassword,
        newPassword: self.state.newPassword
      },
      {
        headers: {
          Authorization: localStorage.getItem("access_token")
        }
      }
    )
      .then(async res => {
        localStorage.clear();
        self.setState({ redirect: true });
        return Swal.fire({
          type: "success",
          title: "Senha alterada com sucesso!",
          text: "Por favor, logue-se de novo para completar a troca da senha"
        });
      })
      .catch(err => {
        return Swal.fire({
          type: "error",
          title: "Ops! algo deu errado",
          text: err.response.data.error.message
        });
      });
  }
};
