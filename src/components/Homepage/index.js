/* eslint-disable jsx-a11y/label-has-associated-control */
// ? Import modules
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoginDropdown } from '../../features/dropDownSlice';

// ? Import composants
import Description from './Description';
import RandomRef from './RandomRef';
import SearchBarRef from './SearchBarRef';
import TopContributor from './TopContributor';
import TopNew from './TopNew';

// ? Import style
import './styles.scss';
import { changeTabTitle } from '../../utlis';

// ? Composant
function Homepage() {
  changeTabTitle('Acceuil');

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
      <Description />
      <SearchBarRef />
      <div className="line-random-top">
        <RandomRef />
        <TopContributor />
      </div>
      <span className="addRefBtn" onClick={handleAddRef}>
        Ajouter une ref'
      </span>
      <TopNew />
    </div>
  );
}

export default React.memo(Homepage);
