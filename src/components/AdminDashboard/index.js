// ? Import modules
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTabTitle } from '../../utlis';
import { setLoginDropdown } from '../../features/dropDownSlice';

// ? Import composants

// ? Import styles
import './styles.scss';

// ? Composant
function AdminDashboard() {
  const dispatch = useDispatch();
  const isOpen = useSelector(({ dropdown }) => dropdown.dropdownLogin);

  changeTabTitle('Administration');

  // * Ouverture du menu de connexion
  const toggleDropdown = () => {
    dispatch(setLoginDropdown());
  };

  return (
    <div onClick={() => {
      if (isOpen === true) toggleDropdown();
    }}
    >
      <h1>Interface admin</h1>
    </div>
  );
}

export default React.memo(AdminDashboard);
