import axios from "axios";
import PathName from "../../pathConst.js";

export const login = async credentials => {
  return axios.post(`${PathName}/api/Usuarios/login?include=user`, credentials);
};
