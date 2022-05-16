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
function UserMenu() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isOpen = useSelector(({ dropdown }) => dropdown.dropdownProfile);
  const user = useSelector(({ auth }) => auth.user);

  // * open profile menue
  const toggleDropdown = () => {
    dispatch(setProfileDropdown());
  };

  const handleLogout = () => {
    dispatch(logout());
    toggleDropdown();
    navigate('/');
  };

  return (
    <div className="dropdownProfil" onClick={toggleDropdown}>
      <span className="header-logged_profil">{user.pseudo}</span>
      <CgProfile className="header-logged_logo" />
      {isOpen && (
        <div className="dropdownProfil-content">
          <Link className="content-btn" to={`/user/${user.user_id}/my-profile`}> Profil </Link>
          <Link className="content-btn" to="/proposal"> Ajouter une ref' </Link>
          <Link className="content-btn" to="/bookmarks"> Favoris </Link>
          <span className="content-btn" onClick={handleLogout}>
            Déconnexion
          </span>
        </div>
      )}
    </div>
  );
}

export default React.memo(UserMenu);
