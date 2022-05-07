// ? Import modules
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FcFilmReel } from 'react-icons/fc';

// ? Import style
import './styles.scss';

// ? Composant
function Header() {
  return (
    <header className="header">
      <Link to="/" title="Page d'accueil" className="header-brand">
        <FcFilmReel className="header-brand-logo" />
        <span className="header-brand-title">Cin<span>O</span>'Ref</span>
      </Link>
      <nav className="header-navbar">
        <NavLink to="/films" className={({ isActive }) => (isActive ? 'activeLink header-navbar-button' : 'header-navbar-button')}>Films</NavLink>
        <NavLink to="/series" className={({ isActive }) => (isActive ? 'activeLink header-navbar-button' : 'header-navbar-button')}>Séries</NavLink>
        <NavLink to="/animes" className={({ isActive }) => (isActive ? 'activeLink header-navbar-button' : 'header-navbar-button')}>Animés</NavLink>
        <NavLink to="/cartoons" className={({ isActive }) => (isActive ? 'activeLink header-navbar-button' : 'header-navbar-button')}>Dessins animés</NavLink>
        <NavLink to="/artists" className={({ isActive }) => (isActive ? 'activeLink header-navbar-button' : 'header-navbar-button')}>Artistes</NavLink>
        <NavLink to="/characters" className={({ isActive }) => (isActive ? 'activeLink header-navbar-button' : 'header-navbar-button')}>Personnages</NavLink>
      </nav>
      <div className="header-connexion">
        <span className="signIn_button">Connexion</span>
        <Link to="/registration" className="signUp_button">Inscription</Link>
      </div>
    </header>
  );
}

export default React.memo(Header);
