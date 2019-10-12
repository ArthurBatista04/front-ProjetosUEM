import axios from "axios";
import Swal from "sweetalert2";
import PathName from "../../pathConst.js";

export const handleChange = (self, e) => {
  self.setState({ [e.target.name]: e.target.value });
};

export const handlePassForget = async (self, e) => {
  e.preventDefault();

  axios
    .post(`${PathName}/api/Usuarios/reset`, {
      email: self.state.email
    })
    .then(async () => {
      return Swal.fire({
        type: "success",
        title: "Requisição enviada!",
        text: "Verifique seu email"
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
