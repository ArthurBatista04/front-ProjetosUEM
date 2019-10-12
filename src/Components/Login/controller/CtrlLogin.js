import axios from "axios";
import Swal from "sweetalert2";
import PathName from "../../pathConst.js";
import expression from "../src/regex";

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

  axios
    .post(`${PathName}/api/Usuarios/login/`, newLogin)
    .then(async res => {
      localStorage.setItem(res.data.user.realm, res.data.id);
      localStorage.setItem("user_id", res.data.userId);
      localStorage.setItem("access_token", res.data.id);
      self.setState({ redirect: true });
    })
    .catch(err => {
      return Swal.fire({
        type: "error",
        title: "Ops! algo deu errado",
        text: err.response.data.error.message
      });
    });
};
