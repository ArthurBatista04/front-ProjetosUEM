import Axios from "axios";
import PathName from "../../../pathConst";

export const getProjetos = () => {
  const docenteId = localStorage.getItem("docenteId");

  const filterSearch = {
    where: { docenteId: docenteId }
  };
  return Axios.get(
    `${PathName}/api/Projetos?filter=${JSON.stringify(filterSearch)}`
  );
};

export const getDadosRelatorio = async projetos => {
  const dados = [];
  for (const projeto of projetos) {
    console.log(projeto);
    const relevancia = (
      await Axios.get(
        `${PathName}/api/relatorioProjetos/relevancia/${projeto.id}`
      )
    ).data;
    const mediaAcessos = (
      await Axios.get(
        `${PathName}/api/relatorioProjetos/mediaAcessos/${projeto.id}`
      )
    ).data;
    const titulo = projeto.titulo;
    dados.push({ titulo, relevancia, mediaAcessos });
  }

  console.log("Dados: ", dados);

  return dados;
};
