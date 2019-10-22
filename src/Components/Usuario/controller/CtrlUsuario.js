import axios from "axios";
import PathName from "../../pathConst.js";

export const login = async credentials => {
  return axios.post(`${PathName}/api/Usuarios/login?include=user`, credentials);
};

export const createDocente = docente => {
  return axios.post(`${PathName}/api/Docentes`, docente);
};

export const createDiscente = discente => {
  return axios.post(`${PathName}/api/Discentes`, discente);
};

export const createUsuario = usuario => {
  return axios.post(`${PathName}/api/Usuarios`, usuario);
};
