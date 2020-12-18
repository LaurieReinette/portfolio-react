import React from 'react';
import PropTypes from 'prop-types';

import github from 'src/assets/images/github.png';
import linkedin from 'src/assets/images/linkedin.png';

import './footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer-logos">
      <a href="https://github.com/LaurieReinette" target="_blank" rel="noopener noreferrer">
        <img src={github} alt="github logo" />
      </a>
      <a href="https://www.linkedin.com/in/lauriereinette/" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="linkeDin logo" />
      </a>
    </div>


  </footer>
);

export default Footer;
