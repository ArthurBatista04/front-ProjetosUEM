import expression from "../src/regex";
import Swal from "sweetalert2";
import { login } from "../../Usuario/controller/CtrlUsuario";

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

    localStorage.setItem(res.data.user.realm, res.data.id);
    localStorage.setItem("user_id", res.data.userId);
    localStorage.setItem("access_token", res.data.id);
    if (res.data.user.docenteId) {
      localStorage.setItem("docenteId", res.data.user.docenteId);
    } else if (res.data.user.discenteId) {
      localStorage.setItem("discenteId", res.data.user.discenteId);
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
