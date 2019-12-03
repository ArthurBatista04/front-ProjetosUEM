import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Home';
import chooseCadastro from './Usuario/Perfil/View/chooseCadastro';
import CadastroDocente from './Usuario/Perfil/View/CadastroDocente';
import CadastroDiscente from './Usuario/Perfil/View/CadastroDiscente';
import Login from './Login/view/Login';
import Manager from './Admin/View/manager';
import userProfile from './Usuario/userProfile';
import TrocaSenha from './Usuario/Perfil/View/TrocaSenha';
import TrocaEmail from './Usuario/Perfil/View/trocarEmail';
import EsqueceuSenha from './Login/view/EsqueceuSenha';
import RedefineSenha from './Login/view/RedefineSenha';
import SearchPage from './Search//view/SearchPage';
import ShowProject from './Projeto/showProject';

const Main = () => (
	<main>
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/cadastro' component={chooseCadastro}></Route>
			<Route exact path='/cadastro/Docente' component={CadastroDocente}></Route>
			<Route
				exact
				path='/cadastro/Discente'
				component={CadastroDiscente}
			></Route>
			<Route exact path='/login' component={Login}></Route>
			<Route exact path='/perfil' component={userProfile}></Route>
			<Route exact path='/pesquisar' component={SearchPage}></Route>
			<Route exact path='/admin' component={Manager} />
			<Route exact path='/perfil/trocarSenha' component={TrocaSenha} />
			<Route exact path='/perfil/trocarEmail' component={TrocaEmail} />
			<Route exact path='/esqueceuSenha' component={EsqueceuSenha} />
			<Route path='/reset-password/:access_token' component={RedefineSenha} />
			<Route
				path='/showProject/:id'
				render={({ match }) => <ShowProject idEvento={match.params.id} />}
			/>
		</Switch>
	</main>
);

export default Main;
