/* eslint-disable jsx-a11y/label-has-associated-control */
// ? Import modules
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaTrophy } from 'react-icons/fa';
import { changeTabTitle } from '../../utlis';
import { setLoginDropdown } from '../../features/dropDownSlice';
import { setNewRefData, setBestRefData } from '../../features/refSlice';
import { setTopContributorsData } from '../../features/topContributorsSlice';

// ? Import composants
import RandomRef from './RandomRef';
import SearchBarRef from './SearchBarRef';
import TopContributor from './TopContributor';
import TopNew from './TopNew';

// ? Import style
import './styles.scss';
import PhoneTopContributor from './PhoneTopContributor';

// ? Composant
function Homepage() {
  changeTabTitle('Acceuil');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogged = useSelector(({ auth }) => auth.isLoggedIn);
  const isOpen = useSelector(({ dropdown }) => dropdown.dropdownLogin);
  const openMenu = useSelector(({ list }) => list.openMenu);
  const [showModal, setShowModal] = useState(false);

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
      {!openMenu
        && (
        <FaTrophy
          className="icon-trophy-style absolute w-10 h-10 p-1 z-10 top-36 left-2 rounded-full cursor-pointer desk:hidden"
          onClick={() => setShowModal(!showModal)}
        />
        )}
      <SearchBarRef />
      <div className="flex justify-center items-start gap-20">
        <RandomRef />
        <TopContributor />
      </div>
      <span className="addRefBtn my-8 mx-auto p-3.5 font-bold rounded cursor-pointer" onClick={handleAddRef}>
        Ajouter une ref'
      </span>
      <TopNew />

      {showModal && <PhoneTopContributor />}
    </div>
  );
}

export default React.memo(Homepage);
