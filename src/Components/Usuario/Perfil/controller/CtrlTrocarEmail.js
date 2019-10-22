import axios from "axios";
import Swal from "sweetalert2";
import PathName from "../../../pathConst.js";
import { getRealm } from "./CtrlEditProfile.js";

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
  const realm = getRealm();

  const updatedUser = {
    email: self.state.newEmail,
    realm
  };

  realm === "Discente"
    ? (updatedUser.discenteId = localStorage.getItem("discenteId"))
    : (updatedUser.docenteId = localStorage.getItem("docenteId"));

  axios
    .patch(`${PathName}/api/Usuarios/${userId}`, updatedUser, {
      headers: {
        Authorization: localStorage.getItem("access_token")
      }
    })
    .then(() => {
      localStorage.clear();
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
