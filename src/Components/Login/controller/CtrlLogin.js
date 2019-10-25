import expression from "../src/regex";
import Swal from "sweetalert2";
import { login } from "../../Usuario/controller/CtrlUsuario";
import Axios from "axios";
import PathName from "../../pathConst";

const isEmail = email => {
  return expression.test(String(email).toLowerCase());
};

export const handleChange = (self, e) => {
  self.setState({ [e.target.name]: e.target.value });
};

export const handleSignIn = async (self, e) => {
  e.preventDefault();

  const { name, password } = self.state;
  const newLogin = {};

  if (isEmail(name)) {
    newLogin.email = name.toLowerCase();
    newLogin.password = password;
  } else {
    newLogin.username = name.toLowerCase();
    newLogin.password = password;
  }

  try {
    const res = await login(newLogin);
    const filter = {
      where: { usuarioId: res.data.userId }
    };

    localStorage.setItem(res.data.user.realm, res.data.id);
    localStorage.setItem("user_id", res.data.userId);
    localStorage.setItem("access_token", res.data.id);

    if (res.data.user.realm === "Docente") {
      const docente = await Axios.get(
        `${PathName}/api/Docentes?filter=${JSON.stringify(filter)}`
      );

      localStorage.setItem("docenteId", docente.data[0].id);
    } else if (res.data.user.realm === "Discente") {
      const discente = await Axios.get(
        `${PathName}/api/Discentes?filter=${JSON.stringify(filter)}`
      );

      localStorage.setItem("discenteId", discente.data[0].id);
    }
    self.setState({ redirect: true });
  } catch (err) {
    return Swal.fire({
      type: "error",
      title: "Ops! algo deu errado",
      text: err.response.data.error.message
    });
  }
};
