// ? Import modules
import React from 'react';
import { FcFilmReel } from 'react-icons/fc';

// ? Import style
import './styles.scss';

// ? Composant
function Header() {
  return (
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
  );
}

export default React.memo(Header);
