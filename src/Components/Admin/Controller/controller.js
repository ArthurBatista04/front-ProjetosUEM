import React from 'react';
import { Admin, Resource } from 'react-admin';
import Dashboard from '../View/dashboard';
import UsuarioList from '../Usuarios/View/list';
import ProjetosCreate from '../Projetos/View/create';
import ProjetosEdit from '../Projetos/View/edit';
import ProjetosList from '../Projetos/View/list';
import ProcessoSeletivoCreate from '../ProcessoSeletivo/View/create';
import ProcessoSeletivoEdit from '../ProcessoSeletivo/View/edit';
import ProcessoSeletivoList from '../ProcessoSeletivo/View/list';
import AreaList from '../Areas/View/list';
import AreaCreate from '../Areas/View/create';
import AreaEdit from '../Areas/View/edit';
import SubareaList from '../Subareas/View/list';
import SubareaCreate from '../Subareas/View/create';
import SubareaEdit from '../Subareas/View/edit';
import jsonServerProvider from 'ra-data-json-server';
import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';
import englishMessages from 'ra-language-english';
import portugueseMessages from 'ra-language-portuguese';
import SideMenu from '../View/sideMenu';
const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: grey,
    error: red,
    type: 'dark',
    contrastThreshold: 3,
    tonalOffset: 0.2
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Arial',
      'sans-serif'
    ].join(',')
  },
  overrides: {
    MuiButton: {
      // override the styles of all instances of this component
      root: {
        // Name of the rule
        color: 'white' // Some CSS
      }
    }
  }
});
const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const messages = {
  pt: portugueseMessages,
  en: englishMessages
};
const i18nProvider = locale => messages[locale];
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
      name="ProcessoSeletivos"
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
