// ? Import modules

import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { FcFilmReel } from 'react-icons/fc';
// ? Import component
import Login from './Login';
import Profile from './Profile';

// ? Import style
import './styles.scss';

// ? Composant
function Header() {
  const activeLink = ({ isActive }) => (isActive ? 'activeLink header-navbar-button' : 'header-navbar-button');
  const islogged = useSelector(({ auth }) => auth.isLoggedIn);

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
        {islogged && (<NavLink to="/favoris" className={activeLink}>Favoris</NavLink>)}
      </nav>
      {!islogged && (
        <div className="header-connection">
          <Login />
          <Link to="/registration" className="signUp_button">Inscription</Link>
        </div>
      )}
      {islogged && (
        <div className="header-logged">
          <Profile />
        </div>
      )}
    </header>
  );
}

export default React.memo(Header);
