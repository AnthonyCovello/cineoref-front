// ? Import modules
import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setProfileDropdown } from '../../../features/dropDownSlice';
import { logout } from '../../../features/authSlice';

// ? Import style
import './styles.scss';

// ? Composant
function Profile() {
  const dispatch = useDispatch();
  const isOpen = useSelector(({ dropdown }) => dropdown.dropdownProfile);
  const user = useSelector(({ auth }) => auth.user.pseudo);
  
  // open profile menue
  const toggleDropdown = () => {
    dispatch(setProfileDropdown());
  };

  const handleLogout = () => {
    dispatch(logout());
    toggleDropdown();
  };

  return (
    <div
      className="dropdownProfil"
      onClick={toggleDropdown}
    >
      <span className="header-logged_profil">{user}</span>
      <CgProfile
        className="header-logged_logo"
      />
      {isOpen && (
        <div className="dropdownProfil-content">
          <Link className="content-btn" to="/profile"> Profil </Link>
          <Link className="content-btn" to="/proposal"> Ajouter une ref' </Link>
          <Link className="content-btn" to="/bookmarks"> Favoris </Link>
          <span
            className="content-btn"
            onClick={handleLogout}
          > Déconnexion
          </span>
        </div>
      )}
    </div>
  );
}

export default React.memo(Profile);
