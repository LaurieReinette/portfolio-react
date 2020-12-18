import React from 'react';

import { NavLink } from 'react-router-dom';

import github from 'src/assets/images/github.png';
import linkedin from 'src/assets/images/linkedin.png';

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
      <div className="footer-logos">
        <a href="https://www.linkedin.com/in/lauriereinette/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="linkeDin logo" />
        </a>
        <a href="https://github.com/LaurieReinette" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="github logo" />
        </a>
      </div>
      <a href="mailto:contact@lauriereinette.fr">contact@lauriereinette.fr</a>
      <p>
        Paris et Île de France
      </p>
    </header>
    <Nav />
  </div>
);

export default Header;
