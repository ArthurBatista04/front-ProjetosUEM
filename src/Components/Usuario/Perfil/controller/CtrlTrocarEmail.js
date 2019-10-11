import axios from "axios";
import Swal from "sweetalert2";
import PathName from "../../../pathConst.js";

export const handleChange = (self, e) => {
  self.setState({ [e.target.name]: e.target.value });
};

export const handlePassChange = async (self, e) => {
  e.preventDefault();

  const { newEmail, confirmNewEmail } = self.state;
  const userId = localStorage.getItem("user_id");

  if (newEmail !== confirmNewEmail) {
    return Swal.fire({
      type: "error",
      title: "Confirmação de e-mail inválida",
      text: "Por favor, verifique os e-mails digitados"
    });
  }

  axios
    .patch(
      `${PathName}/api//Usuarios/${userId}`,
      {
        email: self.state.newEmail
      },
      {
        headers: {
          Authorization: localStorage.getItem("access_token")
        }
      }
    )
    .then(async res => {
      localStorage.removeItem("access_token");
      localStorage.removeItem("user_id");
      localStorage.removeItem("petiano");
      self.setState({ redirect: true });
      return Swal.fire({
        type: "success",
        title: "E-mail alterada com sucesso!",
        text: "Por favor, confirme seu e-mail antes de realizar um novo login"
      });
    })
    .catch(err => {
      return Swal.fire({
        type: "error",
        title: "Ops! algo deu errado",
        text: err.response.data.error.message
      });
    });
};
