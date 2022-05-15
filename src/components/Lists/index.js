/* eslint-disable jsx-a11y/label-has-associated-control */
// ? Import modules
import React from 'react';
// import { Routes, Route, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { setLoginDropdown } from '../../features/dropDownSlice';

// ? Import composants
import SearchBarRef from '../Homepage/SearchBarRef';
import AnchorListMenu from './AnchorListMenu';

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
      <AnchorListMenu />
      <SearchBarRef />
      <span className="addRefBtn" onClick={handleAddRef}>
        Ajouter une ref'
      </span>

      {/* faire un tableau a-z avec les divs */}
      <div className="bg-white mg-50 py-7" id="A">
        <span>A</span>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="bg-white mg-100" id="B">
        <span>B</span>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="bg-white mg-500" id="C">
        <span>C</span>
      </div>
    </div>
  );
}

export default React.memo(Lists);

{ /* Tentative de scroll sans Anchorlink */ }
{ /* <a href="#C" onClick={(e) => e.preventDefault()} className="bg-white scroll-smooth">C</a> */ }
