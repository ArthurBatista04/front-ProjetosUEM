import React from 'react';
import { MenuItemLink, WithPermissions } from 'react-admin';
import PeopleIcon from '@material-ui/icons/People';
import CategoryIcon from '@material-ui/icons/Collections';
import HomeIcon from '@material-ui/icons/Home';
import EventIcon from '@material-ui/icons/Event';
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
    ,
  </div>
  // <MenuItemLink
  //   to="/"
  //   primaryText="Dashboard"
  //   leftIcon={<HomeIcon />}
  //   onClick={onMenuClick}
  // />,
  // <MenuItemLink
  //   to="/Areas"
  //   primaryText="Área"
  //   leftIcon={<CategoryIcon />}
  //   onClick={onMenuClick}
  // />,
  // <MenuItemLink
  //   to="/Projetos"
  //   primaryText="Projeto"
  //   leftIcon={<EventIcon />}
  //   onClick={onMenuClick}
  // />,
  // <MenuItemLink
  //   to="/Subareas"
  //   primaryText="Subarea"
  //   leftIcon={<CategoryIcon />}
  //   onClick={onMenuClick}
  // />,
  // <MenuItemLink
  //   to="/Usuarios"
  //   primaryText="Usuario"
  //   leftIcon={<PeopleIcon />}
  //   onClick={onMenuClick}
  // />
);

export default Menu;
