/* eslint-disable jsx-a11y/label-has-associated-control */
// ? Import modules
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoginDropdown } from '../../features/dropDownSlice';
import { changeTabTitle } from '../../utlis';
import { setNewRefData, setBestRefData } from '../../features/refSlice';
import { setTopContributorsData } from '../../features/topContributorsSlice';

// ? Import composants
import RandomRef from './RandomRef';
import SearchBarRef from './SearchBarRef';
import TopContributor from './TopContributor';
import TopNew from './TopNew';

// ? Import style
import './styles.scss';

// ? Composant
function Homepage() {
  changeTabTitle('Acceuil');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogged = useSelector(({ auth }) => auth.isLoggedIn);
  const isOpen = useSelector(({ dropdown }) => dropdown.dropdownLogin);

  useEffect(() => {
    axios
      .get('https://cinoref-api.herokuapp.com/usertopfive')
      .then((res) => {
        dispatch(setTopContributorsData(res.data));
      });
    axios
      .get('https://cinoref-api.herokuapp.com/mostrecent')
      .then((res) => {
        dispatch(setNewRefData(res.data));
      });
    axios
      .get('https://cinoref-api.herokuapp.com/mostrated')
      .then((res) => {
        dispatch(setBestRefData(res.data));
      });
  }, []);

  const handleAddRef = () => {
    if (isLogged) {
      navigate('/proposal');
    }
    else {
      dispatch(setLoginDropdown());
    }
  };

  // * Ouverture du menu de connexion
  const toggleDropdown = () => {
    dispatch(setLoginDropdown());
  };

  return (
    <div
      className="grid"
      onClick={() => {
        if (isOpen === true) toggleDropdown();
      }}
    >
      <SearchBarRef />
      <div className="flex justify-center gap-20">
        <RandomRef />
        <TopContributor />
      </div>
      <span className="addRefBtn my-8 mx-auto p-3.5 font-bold rounded cursor-pointer" onClick={handleAddRef}>
        Ajouter une ref'
      </span>
      <TopNew />
    </div>
  );
}

export default React.memo(Homepage);
