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
  self.setState({ vencimentoContrato: e.toString() });
};

export const handleClickVoltar = self => {
  self.setState({ redirect: true });
};

export const handleSubmit = (self, e) => {
  e.preventDefault();

  const userId = self.props.usuario.id;
  const docenteId = self.props.usuario.docenteId;
  const discenteId = self.props.usuario.discenteId;
  const token = localStorage.getItem("access_token");
  const Token = {
    headers: {
      Authorization: token
    }
  };

  const userUpdated = {
    nome: self.state.nome.toUpperCase(),
    username: self.state.username.toLowerCase(),
    email: self.state.email,
    realm: getRealm()
  };

  if (userUpdated.realm === "Docente") {
    const docenteUpdated = {
      matricula: self.state.docente.matricula,
      cargo: self.state.docente.cargo,
      lotacao: self.state.docente.lotacao,
      situacao: self.state.docente.situacao,
      vencimentoContrato: self.state.docente.vencimentoContrato
    };

    userUpdated.docenteId = docenteId;
    Axios.patch(`${PathName}/api/Docentes/${docenteId}`, docenteUpdated, Token)
      .then(() => {
        Swal.fire({
          type: "success",
          title: "Alteração realizada com sucesso",
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          self.setState({ redirect: true });
        });

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
      })
      .catch(err => {
        return Swal.fire({
          type: "error",
          title: "Ops! algo deu errado",
          text: err.response.data.error.message
        });
      });
  } else if (userUpdated.realm === "Discente") {
    const discenteUpdated = {
      ra: self.state.discente.ra,
      curso: self.state.discente.curso,
      turno: self.state.discente.turno,
      campus: self.state.discente.campus,
      serie: self.state.discente.serie,
      situacaoAcademica: self.state.discente.situacaoAcademica
    };

    userUpdated.discenteId = discenteId;
    Axios.patch(
      `${PathName}/api/Discentes/${discenteId}`,
      discenteUpdated,
      Token
    )
      .then(() => {
        Swal.fire({
          type: "success",
          title: "Alteração realizada com sucesso",
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          self.setState({ redirect: true });
        });

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
