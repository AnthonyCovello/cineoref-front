/* eslint-disable jsx-a11y/label-has-associated-control */
// ? Import modules
import React from 'react';
import { Link } from 'react-router-dom';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

// ? Import composants
import Description from './Description';
import RandomRef from './RandomRef';
import SearchBarRef from './SearchBarRef';
import TopContributor from './TopContributor';
import TopNew from './TopNew';

// ? Import style
import './styles.scss';

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
      <Link to="/proposal" className="addRefBtn"> Ajouter une ref'</Link>
      <TopNew />
      <span className="backToTop">^</span>
    </div>
  );
}

export default React.memo(Homepage);
