// ? Import modules
import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { useDispatch, useSelector } from 'react-redux';
import { setProfileDropdown } from '../../../features/dropDownLoginSlice';

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
  return (
    <div className="dropdown">
      <CgProfile
        className="header-logged_profil"
        onClick={toggleDropdown}
      />
      {isOpen && (
        <div className="dropdown-content">
          <span className="content-btn"> Profil </span>
          <span className="content-btn"> ajouter ref' </span>
          <span className="content-btn"> favoris </span>
          <span className="content-btn"> déconnexion </span>
        </div>
      )}
    </div>
  );
}

export default React.memo(Profile);
