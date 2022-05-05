/* eslint-disable jsx-a11y/label-has-associated-control */
// ? Import modules
import React from 'react';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

// ? Import composants
import Description from './Description';
// ? Import style
import './styles.scss';

// ? Composant
function Homepage() {
  return (
    <div className="app">
      <Description />

      <form className="searchForm">
        <label className="searchLabel">
          Recherchez une citation
          <input className="searchInput" type="text" placeholder="Rechercher..." />
        </label>
      </form>
      <span className="addRefBtn"> Ajouter une ref'</span>
      <div className="randomCitation">
        <span> random citation </span>
        <span> embed </span>
        <p className="randomCitation-text">
          Moi je passe pas mal de temps à la taverne.
          J’ai jamais entendu parlé de celui-là!
          Mais attendez… Y a une table et des sièges
          et j’devrais m’farcir toutes les notes à ratifier debout?
          Déjà à la corne, ils regardent même pas vers ici!
          Vous pouvez bien agiter tout les drapeaux que vous voudrez!
        </p>
        <span>copié</span>
      </div>
      <div>
        <h2>Top contributeur</h2>
        <ul>
          <li>
            <a>J-P l'agitateur</a>
          </li>
          <li>
            <a>Jacky</a>
          </li>
          <li>
            <a>XxPussyHunter*$M'Lady$*xX</a>
          </li>
          <li>
            <a>Dark Sasuke</a>
          </li>
          <li>
            <a>AmandineDu38</a>
          </li>
        </ul>
      </div>
      <div className="citations">
        <nav className="citation-nav">
          <span className="citation-nav-btn">Les mieux notées</span>
          <span className="citation-nav-btn">Les plus récentes</span>
        </nav>
        <div>
          <ul>
            <li>
              <p> citation</p>
              <span>copié</span>
            </li>
            <li>
              <p> citation</p>
              <span>copié</span>
            </li>
            <li>
              <p> citation</p>
              <span>copié</span>
            </li>
            <li>
              <p> citation</p>
              <span>copié</span>
            </li>
            <li>
              <p> citation</p>
              <span>copié</span>
            </li>
          </ul>
        </div>
      </div>
      <span className="backToTop">^</span>
    </div>
  );
}

export default React.memo(Homepage);
