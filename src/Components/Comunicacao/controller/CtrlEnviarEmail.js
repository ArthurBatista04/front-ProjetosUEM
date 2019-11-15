import Swal from "sweetalert2";
import PathName from "../../pathConst";
import Axios from "axios";

const sweetAlert = (type, title, text, showConfirmButton) => {
  return Swal.fire({
    type,
    title,
    text,
    showConfirmButton
  });
};

export const handleClick = self => {
  self.setState({ redirect: true });
};

export const handleChange = (self, e) => {
  self.setState({ [e.target.name]: e.target.value });
};

export const assuntoEmail = self => {
  const assunto = `Nova mensagem no Projeto "${self.props.nomeProjeto}" de ${self.props.nomeUsuario}`;

  return assunto;
};

const sendEmail = (email, remetente) => {
  const Authorization = {
    headers: {
      Authorization: localStorage.getItem("access_token")
    }
  };

  if (email.bcc === "Sem cópia") {
    email.bcc = [];
  }

  email.text += `\n\nEmail enviado por ${remetente} por meio do ProjetosUEM.`;

  return Axios.post(
    `${PathName}/api/Usuarios/send-email`,
    email,
    Authorization
  );
};

export const enviar = async (self, e) => {
  e.preventDefault();

  const newEmail = {
    to: self.state.para,
    subject: self.state.assunto,
    text: self.state.texto,
    bcc: self.state.cco
  };

  if (newEmail.text.length === 0) {
    return sweetAlert(
      "error",
      "Não é possível mandar um email vazio",
      "",
      true
    );
  }

  try {
    const remetente = self.state.remetente;
    const res = await sendEmail(newEmail, remetente);

    if (res.status >= 200 && res.status < 300) {
      let mensagem = "";
      if (newEmail.bcc.length === 0 || newEmail.bcc === "Sem cópia") {
        mensagem = `Seu email foi enviado para o orientador do projeto (${newEmail.to})`;
      } else {
        mensagem = `Seu email foi enviado para o orientador do projeto (${newEmail.to}) com uma cópia para o coorientardor (${newEmail.bcc[0]})`;
      }
      sweetAlert("success", "Email enviado com sucesso!", mensagem, true);

      self.setState({ redirect: true });
    }
  } catch (err) {
    sweetAlert(
      "error",
      "Ops! Algo deu errado",
      err.response ? err.response.data.error.message : err,
      true
    );
  }
};
