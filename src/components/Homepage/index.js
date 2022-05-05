/* eslint-disable jsx-a11y/label-has-associated-control */
// ? Import modules
import React from 'react';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

// ? Import composants
import Description from './Description';
import RandomRef from './RandomRef';
import SearchBarRef from './SearchBarRef';

// ? Import style
import './styles.scss';

// ? Composant
function Homepage() {
  return (
    <div className="app">
      <Description />
      <SearchBarRef />
      <span className="addRefBtn"> Ajouter une ref'</span>
      <RandomRef />
      <div>
        <h2>Top contributeur</h2>
        <ul>
          <li>
            <a>J-P l'agitateur</a>
          </li>
          <li>
            <a>Jacky</a>
          </li>
          <li>
            <a>XxPussyHunter*$M'Lady$*xX</a>
          </li>
          <li>
            <a>Dark Sasuke</a>
          </li>
          <li>
            <a>AmandineDu38</a>
          </li>
        </ul>
      </div>
      <div className="citations">
        <nav className="citation-nav">
          <span className="citation-nav-btn">Les mieux notées</span>
          <span className="citation-nav-btn">Les plus récentes</span>
        </nav>
        <div>
          <ul>
            <li>
              <p> citation</p>
              <span>copié</span>
            </li>
            <li>
              <p> citation</p>
              <span>copié</span>
            </li>
            <li>
              <p> citation</p>
              <span>copié</span>
            </li>
            <li>
              <p> citation</p>
              <span>copié</span>
            </li>
            <li>
              <p> citation</p>
              <span>copié</span>
            </li>
          </ul>
        </div>
      </div>
      <span className="backToTop">^</span>
    </div>
  );
}

export default React.memo(Homepage);
