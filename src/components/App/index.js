/* eslint-disable jsx-a11y/label-has-associated-control */
// ? Import modules
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// ? Import composants
import Header from '../Header';
import Footer from '../Footer';
import Homepage from '../Homepage';
import SignUp from '../SignUp';
import Profile from '../Profile';
import ProposalForm from '../ProposalForm';
import RefPage from '../RefPage';
import ScrollToTop from '../ScrollToTop';
import ListsPages from '../ListsPages';
import ListsRef from '../ListsRef';
import SearchResult from '../SearchResult';

// ? Import style
import './styles.scss';

// ? Composant
function App() {
  const isLogged = useSelector(({ auth }) => auth.isLoggedIn);

  return (
    <div className="app m-0 mt-28 tracking-[1.5px] phone:mt-20 tablet:mt-24">
      <Header />

      <Routes>

        <Route path="/" element={<Homepage />} />
        <Route path="/searchResult" element={<SearchResult />} />
        <Route path="/registration" element={<SignUp />} />
        <Route path="/proposal" element={isLogged ? <ProposalForm /> : <Navigate to="/" replace />} />
        <Route path="/user/:id/my-profile" element={<Profile />} />
        <Route path="/user/:id/profile" element={<Profile />} />
        <Route path="/:listTheme" element={<ListsPages />} />
        <Route path="/:listTheme/:param" element={<ListsPages />} />
        <Route path="/:listTheme/:category/:id/refs" element={<ListsRef />} />
        <Route path="/ref/:ref_id" element={<RefPage />} />

        <Route path="*" element={<h1>Error</h1>} />

      </Routes>

      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default React.memo(App);
