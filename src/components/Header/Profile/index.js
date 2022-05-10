// ? Import modules
import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setProfileDropdown } from '../../../features/dropDownSlice';
import { logout } from '../../../features/authSlice';

// ? Import style
import './styles.scss';

// ? Composant
function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isOpen = useSelector(({ dropdown }) => dropdown.dropdownProfile);
  // open profile menue
  const toggleDropdown = () => {
    dispatch(setProfileDropdown());
  };
  const handleClick = () => {
    navigate('/proposal');
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
