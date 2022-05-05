// ? Import modules

import React from 'react';
import { FcFilmReel } from 'react-icons/fc';

// ? Import style
import './styles.scss';

// ? Composant
function Header() {
  return (
    <header className="header">
      <a href="/" title="Page d'accueil" className="header-brand">
        <FcFilmReel className="header-brand-logo" />
        <span className="header-brand-title">Cin<span>O</span>'Ref</span>
      </a>
      <nav className="header-navbar">
        <a href="/films" className="header-navbar-button">Films</a>
        <a href="/series" className="header-navbar-button">Séries</a>
        <a href="/animes" className="header-navbar-button">Animés</a>
        <a href="/cartoons" className="header-navbar-button">Dessins animés</a>
        <a href="/artists" className="header-navbar-button">Artistes</a>
        <a href="/characters" className="header-navbar-button">Personnages</a>
      </nav>
      <div className="header-connexion">
        <span className="signIn_button">Connexion</span>
        <span className="signUp_button">Inscription</span>
      </div>
    </header>
  );
}

export default React.memo(Header);
