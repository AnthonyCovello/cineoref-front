// ? Import modules
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// ? Composant
function PhoneNav() {
  const islogged = useSelector(({ auth }) => auth.isLoggedIn);
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => setOpenMenu(!openMenu);

  return (
    <div className="font-bold desk:hidden">
      <button
        type="button"
        className="menu-button font-bold"
        onClick={toggleMenu}
      >
        Menu
      </button>
      {openMenu
        && (
          <nav className="navMenu flex flex-col w-full text-center text-black" onClick={toggleMenu}>
            <Link to="/listcategory/movie">Films</Link>
            <Link to="/listcategory/serie">Séries</Link>
            <Link to="/listcategory/anime">Animés</Link>
            <Link to="/listcategory/cartoon">Dessins animés</Link>
            <Link to="/listartist">Artistes</Link>
            <Link to="/listcharacter">Personnages</Link>
            {islogged && (<Link to="/bookmarks">Favoris</Link>)}
          </nav>
        )}
    </div>
  );
}

export default React.memo(PhoneNav);
