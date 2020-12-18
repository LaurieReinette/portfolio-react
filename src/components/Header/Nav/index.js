import React from 'react';
import { NavLink } from 'react-router-dom';

import './nav.scss';

const Nav = () => (
  <nav className="nav">
    <NavLink
      className="nav-item"
      activeClassName="nav-active"
      key="5"
      to="/"
      exact
    >
      Accueil
    </NavLink>
    <NavLink
      className="nav-item"
      activeClassName="nav-active"
      key="1"
      to="skills"
      exact
    >
      Compétences
    </NavLink>
    <NavLink
      className="nav-item"
      activeClassName="nav-active"
      key="4"
      to="productions"
      exact
    >
      Réalisations
    </NavLink>
    <NavLink
      className="nav-item"
      activeClassName="nav-active"
      key="2"
      to="professionnal-career"
      exact
    >
      Parcours
    </NavLink>
    <NavLink
      className="nav-item"
      activeClassName="nav-active"
      key="3"
      to="informations"
      exact
    >
      Informations
    </NavLink>
  </nav>
);

export default Nav;
