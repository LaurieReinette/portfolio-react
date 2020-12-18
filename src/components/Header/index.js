import React from 'react';
import PropTypes from 'prop-types';

import { NavLink, Redirect } from 'react-router-dom';

import Nav from './Nav';

import './header.scss';

const Header = () => (
  <div className="header-div">
    <header className="header">
      <NavLink
        className="nav-item"
        activeClassName="nav-active"
        key="1"
        to="/"
        exact
      >
        <h1>
          Laurie Reinette <br />
          Developpeuse web junior <br />
          React Symfony
        </h1>
      </NavLink>

    </header>
    <Nav />
  </div>
);

export default Header;
