/* eslint-disable jsx-a11y/label-has-associated-control */
// ? Import modules
import React from 'react';
import { FcFilmReel } from 'react-icons/fc';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

// ? Import composants

// ? Import style
import './styles.scss';

// ? Composant
function App() {
  return (
    <div className="app">
      <header className="header">
        <a href="/" className="header-brand">
          <FcFilmReel className="header-brand-logo" />
          <span className="header-brand-title">CinO'Ref</span>
        </a>
        <nav className="header-navbar">
          <a href="#" className="header-navbar-button">Films</a>
          <a href="#" className="header-navbar-button">Séries</a>
          <a href="#" className="header-navbar-button">Animés</a>
          <a href="#" className="header-navbar-button">Dessins animés</a>
          <a href="#" className="header-navbar-button">Artistes</a>
          <a href="#" className="header-navbar-button">Personnages</a>
        </nav>
        <div className="header-connexion">
          <span className="signIn_button">Connexion</span>
          <span className="signUp_button">Inscription</span>
        </div>
      </header>
      <div className="description">
        <p className="description-text">
          Moi je passe pas mal de temps à la taverne.
          J’ai jamais entendu parlé de celui-là!
          Mais attendez… Y a une table et des sièges
          et j’devrais m’farcir toutes les notes à ratifier debout?
          Déjà à la corne, ils regardent même pas vers ici!
          Vous pouvez bien agiter tout les drapeaux que vous voudrez!
        </p>
      </div>
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
      <footer className="footer">
        <a href="/" className="footer-brand">
          <FcFilmReel className="footer-brand-logo" />
          <span className="footer-brand-title">CinO'Ref</span>
          <span className="copyright">© Copyright 2022</span>
        </a>
        <a href="#">Proposer sa citation</a>
        <a href="#">L'équipe</a>
        <a href="#">Contact</a>
        <a href="#">Mentions légales</a>
        <a href="#">Conditions générales d'utilisation</a>
      </footer>
    </div>
  );
}

export default React.memo(App);
