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
    <div className="phoneNav absolute left-[45%] font-bold phone:left-[42%]">
      <button
        type="button"
        className="menu-button py-2 px-3 font-bold rounded phone:py-1 phone:px-2"
        onClick={toggleMenu}
      >
        Menu
      </button>
      {openMenu
        && (
          <nav className="navMenu absolute top-14 left-[-29.5rem] flex flex-col text-center phone:top-10" onClick={toggleMenu}>
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
