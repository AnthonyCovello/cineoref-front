// ? Import modules
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FcFilmReel } from 'react-icons/fc';

// ? Import style
import './styles.scss';

// ? Composant
function Header() {
  const activeLink = ({ isActive }) => (isActive ? 'activeLink header-navbar-button' : 'header-navbar-button');

  return (
    <header className="header">
      <Link to="/" title="Page d'accueil" className="header-brand">
        <FcFilmReel className="header-brand-logo" />
        <span className="header-brand-title">Ciné<span>O</span>'Ref</span>
      </Link>
      <nav className="header-navbar">
        <NavLink to="/films" className={activeLink}>Films</NavLink>
        <NavLink to="/series" className={activeLink}>Séries</NavLink>
        <NavLink to="/animes" className={activeLink}>Animés</NavLink>
        <NavLink to="/cartoons" className={activeLink}>Dessins animés</NavLink>
        <NavLink to="/artists" className={activeLink}>Artistes</NavLink>
        <NavLink to="/characters" className={activeLink}>Personnages</NavLink>
      </nav>
      <div className="header-connexion">
        <span className="signIn_button">Connexion</span>
        <Link to="/registration" className="signUp_button">Inscription</Link>
      </div>
    </header>
  );
}

export default React.memo(Header);
