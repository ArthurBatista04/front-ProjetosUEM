import React from "react";
import { Admin, Resource } from "react-admin";
import Dashboard from "./dashboard";
import UsuarioList from "../Usuarios/View/list";
import ProjetosCreate from "../Projetos/View/create";
import ProjetosEdit from "../Projetos/View/edit";
import ProjetosList from "../Projetos/View/list";
import ProcessoSeletivoCreate from "../ProcessoSeletivo/View/create";
import ProcessoSeletivoEdit from "../ProcessoSeletivo/View/edit";
import ProcessoSeletivoList from "../ProcessoSeletivo/View/list";
import AreaList from "../Areas/View/list";
import AreaCreate from "../Areas/View/create";
import AreaEdit from "../Areas/View/edit";
import SubareaList from "../Subareas/View/list";
import SubareaCreate from "../Subareas/View/create";
import SubareaEdit from "../Subareas/View/edit";
import i18nProvider from "../Customization/language";
import SideMenu from "./sideMenu";
import theme from "../Customization/theme";
import dataProvider from "../Controller/controller";

export default () => (
  <Admin
    theme={theme}
    locale="pt"
    i18nProvider={i18nProvider}
    menu={SideMenu}
    dataProvider={dataProvider}
    dashboard={Dashboard}
  >
    <Resource name="Usuarios" list={UsuarioList}></Resource>
    <Resource
      name="Projetos"
      list={ProjetosList}
      edit={ProjetosEdit}
      create={ProjetosCreate}
    />
    <Resource
      name="ProcessosSeletivos"
      create={ProcessoSeletivoCreate}
      edit={ProcessoSeletivoEdit}
      list={ProcessoSeletivoList}
    ></Resource>
    <Resource
      name="Areas"
      create={AreaCreate}
      edit={AreaEdit}
      list={AreaList}
    ></Resource>
    <Resource
      name="Subareas"
      create={SubareaCreate}
      edit={SubareaEdit}
      list={SubareaList}
    ></Resource>
  </Admin>
);
