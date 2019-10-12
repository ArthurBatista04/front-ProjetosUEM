import axios from "axios";
import Swal from "sweetalert2";
import PathName from "../../pathConst.js";

export const handleChange = (self, e) => {
  self.setState({ [e.target.name]: e.target.value });
};

export const handlePassChange = async (self, e) => {
  e.preventDefault();

  const { password, confirmPassword } = self.state;

  if (password.length < 4) {
    return Swal.fire({
      type: "error",
      title: "Senha deve ter pelo menos 4 caracteres",
      text: "Tente novamente"
    });
  } else if (password !== confirmPassword) {
    return Swal.fire({
      type: "error",
      title: "As senhas são diferentes",
      text: "É necessário que a nova senha e a confirmação sejam iguais"
    });
  } else {
    axios
      .post(
        `${PathName}/api/Usuarios/reset-password`,
        {
          newPassword: self.state.password
        },
        {
          headers: {
            Authorization: self.state.token
          }
        }
      )
      .then(async () => {
        self.setState({ redirect: true });
        return Swal.fire({
          type: "success",
          title: "Senha alterada com sucesso!"
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
