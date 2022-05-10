/* eslint-disable jsx-a11y/label-has-associated-control */
// ? Import modules
import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';

// ? Import composants
import Header from '../Header';
import Footer from '../Footer';
import Homepage from '../Homepage';
import SignUp from '../SignUp';
import ProposalForm from '../ProposalForm';

// ? Import style
import './styles.scss';

// ? Composant
function App() {
  return (
    <div className="app">
      <Header />

      <Routes>

        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={{/* Login */}} />
        <Route path="/registration" element={<SignUp />} />
        <Route path="/proposal" element={<ProposalForm />} />
        {/* <Route path="*" element={<NotFound />} /> */}

      </Routes>

      <Footer />
    </div>
  );
}

export default React.memo(App);
