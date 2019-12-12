import React from 'react';
import { MenuItemLink, WithPermissions } from 'react-admin';
import PeopleIcon from '@material-ui/icons/People';
import CategoryIcon from '@material-ui/icons/Collections';
import HomeIcon from '@material-ui/icons/Home';
import EventIcon from '@material-ui/icons/Event';
import ExitIcon from '@material-ui/icons/PowerSettingsNew';

const handleClick = () => (window.location.href = 'http://localhost:3000/');

const Menu = ({ resources, onMenuClick, logout }) => (
  <div>
    <MenuItemLink
      to="/"
      primaryText="Dashboard"
      leftIcon={<HomeIcon />}
      onClick={onMenuClick}
    />
    {localStorage.getItem('admin')
      ? [
          <MenuItemLink
            to="/Areas"
            primaryText="Área"
            leftIcon={<CategoryIcon />}
            onClick={onMenuClick}
          />,
          <MenuItemLink
            to="/Subareas"
            primaryText="Subarea"
            leftIcon={<CategoryIcon />}
            onClick={onMenuClick}
          />,
          <MenuItemLink
            to="/Usuarios"
            primaryText="Usuario"
            leftIcon={<PeopleIcon />}
            onClick={onMenuClick}
          />
        ]
      : null}
    {localStorage.getItem('Docente') ? (
      <MenuItemLink
        to="/Projetos"
        primaryText="Projeto"
        leftIcon={<EventIcon />}
        onClick={onMenuClick}
      />
    ) : null}

    <MenuItemLink
      to="/"
      primaryText="Página Inicial"
      leftIcon={<ExitIcon />}
      onClick={handleClick}
    />
  </div>
);

export default Menu;
