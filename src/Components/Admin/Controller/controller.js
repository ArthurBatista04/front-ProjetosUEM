import React from "react";

import { Admin, Resource } from "react-admin";
import Dashboard from "../View/dashboard";
import simpleRestProvider from "ra-data-simple-rest";

import { DiscenteList } from "../Discente/list";
import { DocenteList } from "../Docente/list";
import { AdminList } from "../Administrador/list";
import { AdminEdit } from "../Administrador/edit";
import { ProjetosCreate } from "../Projetos/create";
import { ProjetosEdit } from "../Projetos/edit";
import { ProjetosList } from "../Projetos/list";

const dataProvider = simpleRestProvider("http://path.to.my.api");

export default () => (
  <Admin dataProvider={dataProvider} dashboard={Dashboard}>
    <Resource name="Discentes" list={DiscenteList} />
    <Resource name="Docentes" list={DocenteList} />
    <Resource name="Admins" list={AdminList} edit={AdminEdit} />
    <Resource name="Projetos" list={ProjetosList} edit={ProjetosEdit} create={ProjetosCreate} />
  </Admin>
);
