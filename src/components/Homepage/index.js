/* eslint-disable jsx-a11y/label-has-associated-control */
// ? Import modules
import React from 'react';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

// ? Import composants
import Description from './Description';
import RandomRef from './RandomRef';
import SearchBarRef from './SearchBarRef';
import TopContributor from './TopContributor';

// ? Import style
import './styles.scss';
import TopNew from './TopNew';

// ? Composant
function Homepage() {
  return (
    <div className="app">
      <Description />
      <SearchBarRef />
      <div className="line-random-top">
        <RandomRef />
        <TopContributor />
      </div>
      <span className="addRefBtn"> Ajouter une ref'</span>
      <TopNew />
      <span className="backToTop">^</span>
    </div>
  );
}

export default React.memo(Homepage);
