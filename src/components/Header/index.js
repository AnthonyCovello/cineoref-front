// ? Import modules
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { FcFilmReel } from 'react-icons/fc';

// ? Import component
import Login from './Login';
import UserMenu from './UserMenu';
import PhoneNav from './PhoneNav';

// ? Import style
import './styles.scss';

// ? Composant
function Header() {
  const activeLink = ({ isActive }) => (isActive ? 'activeLink header-button p-4' : 'header-button p-4');
  const islogged = useSelector(({ auth }) => auth.isLoggedIn);

  return (
    <header className="header fixed top-0 z-10 w-full h-16 p-4 flex justify-between items-center phone:h-12">
      <Link to="/" title="Page d'accueil" className="flex items-center">
        <FcFilmReel className="mr-1.5 text-[2rem] phone:hidden" />
        <h1 className="text-[1.7rem] font-bold text-center tablet:text-[1.2rem]">
          Ciné<span className="header-titleSpan">O</span>'Ref
        </h1>
      </Link>
      <PhoneNav />
      <nav className="deskNav font-bold flex gap-6">
        <NavLink to="/list/listcategory/movie" className={activeLink}>Films</NavLink>
        <NavLink to="/list/listcategory/serie" className={activeLink}>Séries</NavLink>
        <NavLink to="/list/listcategory/anime" className={activeLink}>Animés</NavLink>
        <NavLink to="/list/listcategory/cartoon" className={activeLink}>Dessins animés</NavLink>
        <NavLink to="/list/listartist" className={activeLink}>Artistes</NavLink>
        <NavLink to="/list/listcharacter" className={activeLink}>Personnages</NavLink>
        {islogged && (<NavLink to="/bookmarks" className={activeLink}>Favoris</NavLink>)}
      </nav>
      {!islogged && (
        <div className="header-connection">
          <Login />
          <Link to="/registration" className="signUp_button ml-4 py-1 px-2 rounded font-bold cursor-pointer tablet:ml-2 tablet:px-1 tablet:text-[0.8rem] phone:hidden">Inscription</Link>
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
