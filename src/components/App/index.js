/* eslint-disable jsx-a11y/label-has-associated-control */
// ? Import modules
import React from 'react';
import { FcFilmReel } from 'react-icons/fc';
// import { Routes, Route, useLocation } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

// ? Import composants
import Header from '../Header';
import Footer from '../Footer';
import Homepage from '../Homepage';
// ? Import style
import './styles.scss';

// ? Composant
function App() {
  return (
    <div className="app">
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}

export default React.memo(App);
