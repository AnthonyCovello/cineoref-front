/* eslint-disable jsx-a11y/label-has-associated-control */
// ? Import modules
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoginDropdown } from '../../features/dropDownSlice';
import { changeTabTitle } from '../../utlis';

// ? Import composants
import Description from './Description';
import RandomRef from './RandomRef';
import SearchBarRef from './SearchBarRef';
import TopContributor from './TopContributor';
import TopNew from './TopNew';
import ScrollToTop from '../ScrollToTop';
import { setNewRefData, setRandomRefData } from '../../features/refSlice';
import { setTopContributorsData } from '../../features/topContributorsSlice';

// ? Import style
import './styles.scss';
// ? Composant
function Homepage() {
  changeTabTitle('Acceuil');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogged = useSelector(({ auth }) => auth.isLoggedIn);

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
      .get('https://cinoref-api.herokuapp.com/random')
      .then((res) => {
        dispatch(setRandomRefData(res.data));
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
