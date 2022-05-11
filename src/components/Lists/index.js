/* eslint-disable jsx-a11y/label-has-associated-control */
// ? Import modules
import React from 'react';
// import { Routes, Route, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoginDropdown } from '../../features/dropDownSlice';
// ? Import composants
import SearchBarRef from '../Homepage/SearchBarRef';

// ? Import style
import './styles.scss';
import '../../styles/index.scss';

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
      <span
        className="addRefBtn"
        onClick={handleAddRef}
      > Ajouter une ref'
      </span>
      <span className="backToTop">^</span>
    </div>
  );
}

export default React.memo(Lists);
