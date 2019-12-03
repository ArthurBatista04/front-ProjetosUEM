import Axios from "axios";
import PathName from "../../../pathConst";

const getDocente = () => {
  const userId = localStorage.getItem("user_id");
  const token = localStorage.getItem("access_token");
  const Token = {
    headers: {
      Authorization: token
    }
  };
  Axios.get(`${PathName}/api/Usuarios/${userId}`, Token).then(res => {
    this.setState({ nome: res.data.username });
  });
};
