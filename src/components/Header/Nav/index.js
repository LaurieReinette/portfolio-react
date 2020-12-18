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
      to="experiences"
      exact
    >
      Expériences
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


  </nav>
);

export default Nav;
