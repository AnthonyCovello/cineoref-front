/* eslint-disable jsx-a11y/label-has-associated-control */
// ? Import modules
import React from 'react';
// import { Routes, Route, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoginDropdown } from '../../features/dropDownSlice';

// ? Import composants
import SearchBarRef from '../Homepage/SearchBarRef';
import ListPage from './ListPage';

// ? Composant
function Lists() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogged = useSelector(({ auth }) => auth.isLoggedIn);

  const handleAddRef = () => {
    if (isLogged) {
      navigate('/proposal');
    }
    else {
      dispatch(setLoginDropdown());
    }
  };

  return (
    <div className="app">
      <SearchBarRef />
      <span className="addRefBtn" onClick={handleAddRef}>
        Ajouter une ref'
      </span>
      <ListPage />
    </div>
  );
}

export default React.memo(Lists);
