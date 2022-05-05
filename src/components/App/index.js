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
    </div>

  );
}

export default React.memo(App);
