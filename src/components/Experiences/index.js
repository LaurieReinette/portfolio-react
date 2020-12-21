import React from 'react';
import logostopogaspi from 'src/assets/images/logostopogaspi.png';
import logodiabetica from 'src/assets/images/logodiabetica.png';

import './experiences.scss';

const Experiences = () => (
  <div className="experiences">
    <article className="experience">
      <a href="https://diabetica.lauriereinette.fr" target="_blank" rel="noopener noreferrer"><img src={logodiabetica} alt=""/></a>
      <h2>
        Diabetica
      </h2>
      <p className="date">
        Septembre-Décembre 2020
      </p>
      <p className="description-text">
        Webapp single page codée en <span>ReactJs/Redux</span> et <span>Symfony</span> <br/>
        Elle permet aux personnes diabétiques de gérer leurs glycémies, et avoir un suivi <br/>
      </p>
      <a href="https://diabetica.lauriereinette.fr" target="_blank" rel="noopener noreferrer">A découvrir ici</a>
      <p className="description">
        <h3>
          Projet solo
        </h3>
        <h4>Mes réalisations</h4>
        <h5>Conception de projet</h5>
        <ul>
          <li className="code-list">Wireframes</li>
          <li className="code-list">User stories</li>
        </ul>
        <h5> Front-end</h5>
        <ul>
          <li className="code-list">Création des composants React</li>
          <li className="code-list">Mise en place de Redux</li>
          <li className="code-list">Création du store, des reducers, des middlewares</li>
          <li className="code-list">CSS</li>
          <li className="code-list">Appels à l'API back</li>
          <li className="code-list">Déploiement sur serveur</li>
        </ul>
        <h5> Back-end</h5>
        <ul>
          <li className="code-list">Modélisation/Création de la base de données</li>
          <li className="code-list">Création du projet en Symfony 5.1</li>
          <li className="code-list">Création des contollers, modèles</li>
          <li className="code-list">Mise en place des JWT</li>
          <li className="code-list">API's codées à la main</li>
          <li className="code-list">Déploiement sur serveur</li>
        </ul>
      </p>
    </article>
    <article className="experience">
      <a href="https://stop-o-gaspi.ocrprojects.com/" target="_blank" rel="noopener noreferrer"><img src={logostopogaspi} alt=""/></a>
      <h2>
        Stop O Gaspi
      </h2>
      <p className="date">
        Juin-Juillet 2020
      </p>
      <p className="description-text">
        Webapp single page codée en <span>ReactJs/Redux</span> et <span>Symfony</span> <br/>
        Elle permet de réduire le gaspillage alimentaire <br/>
        L'utilisateur entre ses denrhées et est averti par mail
        de leur date de péremption pour les consommer dans les temps <br/>
      </p>
      <a href="https://stop-o-gaspi.ocrprojects.com/" target="_blank" rel="noopener noreferrer">A découvrir ici</a>
      <p className="description">
        <h3>
          Projet en groupe de 5 développeurs, 3 front-end 2 back-end
        </h3>
        <h4>Mes réalisations</h4>
        <h5>Conception de projet - Participation aux:</h5>
        <ul>
          <li className="code-list">Wireframes</li>
          <li className="code-list">User stories</li>
          <li className="code-list">Cahier des charges</li>
        </ul>
        <h5> Back-end</h5>
        <ul>
          <li className="code-list">Modélisation/Création de la base de données</li>
          <li className="code-list">Création du projet en Symfony 5.1</li>
          <li className="code-list">Création des contollers, modèles</li>
          <li className="code-list">API's codées à la main</li>
          <li className="code-list">Déploiement sur serveur</li>
          <li className="code-list">Création de scripts linux shell</li>
          <li className="code-list">Création de commandes linux</li>
          <li className="code-list">Création de datafixtures</li>
        </ul>
      </p>
    </article>
    
    <article className="experience">
      <h2>
        Infirmière
      </h2>
      <p className="description-text">
        Infirmière en services multiples
      </p>
      <p className="date">
        2015-2020
      </p>
      <p className="description">
        Prise en charge des patients dans différents contexte:
        urgence vitale, chirurgie, hospitalisation classique
      </p>
    </article>
    <article className="experience">
      <h2>
        Entreprise familiale <br/>
        Vente de matériel pour les métiers de bouche
      </h2>
      <p className="description-text">
        Poste multifonction
      </p>
      <p className="date">
        2010-2018
      </p>
      <p className="description">
        <ul>
          <li>Gestion du site internet</li>
          <li>Réalisation de devis, commandes et factures. Suivi des paiements</li>
          <li>Paiement des fournisseurs</li>
          <li>Suivi des commandes</li>

        </ul>
      </p>
    </article>
  </div>
);

export default Experiences;
