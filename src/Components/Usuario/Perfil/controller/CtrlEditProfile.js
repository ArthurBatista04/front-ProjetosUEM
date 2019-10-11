import Axios from "axios";
import Swal from "sweetalert2";
import PathName from "../../../pathConst";

export const getRealm = () => {
  return localStorage.getItem("Discente") ? "Discente" : "Docente";
};

export const capitalizeString = str => {
  return str.toLowerCase().replace(/\b\w/g, l => l.toUpperCase());
};

export const handleChange = (self, e) => {
  self.setState({ [e.target.name]: e.target.value });
};

export const handleDatePickerChange = (self, e) => {
  self.setState({ vencimentoContrato: new Date(e) });
};

export const handleClickVoltar = self => {
  self.setState({ redirect: true });
};

export const handleSubmit = (self, e) => {
  e.preventDefault();

  const userId = self.props.usuario.id;
  const token = localStorage.getItem("access_token");
  const Token = {
    headers: {
      Authorization: token
    }
  };

  const userUpdated = {
    nome: self.state.nome.toUpperCase(),
    username: self.state.username.toLowerCase(),
    github: self.state.github,
    linkedin: self.state.linkedin,
    lattes: self.state.lattes
  };

  Axios.patch(`${PathName}/api/Usuarios/${userId}`, userUpdated, Token)
    .then(() => {
      Swal.fire({
        type: "success",
        title: "Alteração realizada com sucesso",
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        self.setState({ redirect: true });
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
