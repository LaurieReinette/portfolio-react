import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

import './main.scss';

const Main = () => (
  <main className="main">
    <h1>
      Bienvenue sur mon port folio
    </h1>
    <article>
      Après un dipmôme d'Etat d'infirmier,
      j'ai decidé de me reconvertir dans le developpement web. <br/>
      Après avoir suivi la <a href="https://oclock.io/formations/developpeur-web">formation O'Clock</a> terminée en apothéose avec la spécialisation Symfony,
      j'ai décidé de continuer en apprenant React JS.
    </article>
    <h2>
      Compétences:
    </h2>
    <article>
    <h3> Technologies</h3>
      <div className="skills-list">
        <div>
          <h4>
            Front-end
          </h4>
          <ul>
            <li>React JS / Redux</li>
            <li>HTML/CSS</li>
            <li>Javascript</li>
          </ul>
        </div>
        <div>
          <h4>
            Back-end
          </h4>
          <ul>
            <li>Symfony 5+</li>
            <li>PHP</li>
            <li>MySQL</li>
            <li>MariaDB</li>
            <li>PhpMyAdmin/Adminer</li>
          </ul>
        </div>
        <div>
          <h4>
            Autre
          </h4>
          <ul>
            <li>Linux</li>
            <li>Git via GitHub</li>
            <li>AWS EC2</li>
            <li>Docker (en cours d'acquisition)</li>
          </ul>
        </div>
      </div>
    </article>
    <article>
      <h4></h4>
      <ul>
        <li>Création d'application web from scratch</li>
        <li>de la production au déploiement sur le serveur</li>
        <li>Développement en méthode AGILE / SCRUM</li>
        <li>Développement d'API REST</li>
        <li>Création et gestion de base de données</li>
        <li>Facilité d'apprentissage</li>
        <li>Capacité de travail en autonomie</li>
        <li>Anglais courant</li>
      </ul>
    </article>
    <article>
      Je suis maintenant prête à prendre un poste en tant que developpeur web junior <br/>
      Disponible immédiatement, vous pouvez me contacter par mail:       <a href="mailto:contact@lauriereinette.fr">contact@lauriereinette.fr</a>
    </article>

  </main>
);

export default Main;
