/* eslint-disable jsx-a11y/img-redundant-alt */
// ? Import modules
import React from 'react';
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
      <span className="text-porange font-bold text-2xl phone:hidden tablet:text-xl">{user.pseudo}</span>
      <div className="w-12 h-12 ml-2 phone:w-8 phone:h-8">
        <img className="rounded-full" src={user.profile_picture} alt="Photo de profil" />
      </div>
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
