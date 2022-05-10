// ? Import modules
import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';
import { setProfileDropdown } from '../../../features/dropDownSlice';
import { logout } from '../../../features/authSlice';

// ? Import style
import './styles.scss';

// ? Composant
function Profile() {
  const dispatch = useDispatch();
  const isOpen = useSelector(({ dropdown }) => dropdown.dropdownProfile);
  // open profile menue
  const toggleDropdown = () => {
    dispatch(setProfileDropdown());
  };

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="dropdown">
      <CgProfile
        className="header-logged_profil"
        onClick={toggleDropdown}
      />
      {isOpen && (
        <div className="dropdown-content">
          <span className="content-btn"> Profil </span>
          <span className="content-btn"> Ajouter une ref' </span>
          <span className="content-btn"> Favoris </span>
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
