// ? Import modules
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { FcFilmReel } from 'react-icons/fc';

// ? Import component
import Login from './Login';
import UserMenu from './UserMenu';

// ? Import style
import './styles.scss';

// ? Composant
function Header() {
  const activeLink = ({ isActive }) => (isActive ? 'activeLink header-button p-4' : 'header-button p-4');
  const islogged = useSelector(({ auth }) => auth.isLoggedIn);

  return (
    <header className="header fixed top-0 z-10 w-full h-16 p-4 flex items-center justify-between">
      <Link to="/" title="Page d'accueil" className="flex items-center">
        <FcFilmReel className="mr-1.5 text-[2rem]" />
        <span className="text-[1.7rem] font-bold text-center">
          Ciné<span className="header-titleSpan">O</span>'Ref
        </span>
      </Link>
      <nav className="font-bold flex gap-6">
        <NavLink to="/listcategory/movie" className={activeLink}>Films</NavLink>
        <NavLink to="/listcategory/serie" className={activeLink}>Séries</NavLink>
        <NavLink to="/listcategory/anime" className={activeLink}>Animés</NavLink>
        <NavLink to="/listcategory/cartoon" className={activeLink}>Dessins animés</NavLink>
        <NavLink to="/listartist" className={activeLink}>Artistes</NavLink>
        <NavLink to="/listcharacter" className={activeLink}>Personnages</NavLink>
        {islogged && (<NavLink to="/bookmarks" className={activeLink}>Favoris</NavLink>)}
      </nav>
      {!islogged && (
        <div className="header-connection">
          <Login />
          <Link to="/registration" className="signUp_button ml-4 py-1 px-2 rounded font-bold cursor-pointer">Inscription</Link>
        </div>
      )}
      {islogged && (
        <div className="header-logged">
          <UserMenu />
        </div>
      )}
    </header>
  );
}

export default React.memo(Header);
