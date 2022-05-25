/* eslint-disable react/jsx-no-comment-textnodes */
// ? Import modules
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// ? Import composants
import AdminDashboard from '../AdminDashboard';
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
import '../../styles/index.scss';

// ? Composant
function App() {
  const isLogged = useSelector(({ auth }) => auth.isLoggedIn);
  const user = useSelector(({ auth }) => auth.user);

  return (
    <div className="app relative max-h-screen m-0 pt-24 tracking-[1.5px] phone:pt-20 tablet:pt-24">
      <Header />
      <ScrollToTop />

      <Routes>

        <Route path="/" element={<Homepage />} /> // * Page d'accueil
        <Route path="/searchResult" element={<SearchResult />} /> //* Page de résultats de recherche
        <Route path="/registration" element={<SignUp />} /> //* Page d'inscription
        <Route path="/proposal" element={isLogged ? <ProposalForm /> : <Navigate to="/" replace />} /> // * Formulaire de proposition de citation - connexion requise
        <Route path="/user/:id/my-profile" element={<Profile />} /> // * Profil personnel
        <Route path="/user/:id/profile" element={<Profile />} /> //* Profil d'un autre utilisateur
        <Route path="/:listTheme" element={<ListsPages />} /> // * Liste des artistes / personnages
        <Route path="/:listTheme/:param" element={<ListsPages />} /> // * Liste des médias films / séries / animés / dessins animés
        <Route path="/:listTheme/:category/:id/refs" element={<ListsRef />} /> // * Liste des citations associées à un film / série / animé / dessins animés / artiste / personnage
        <Route path="/ref/:ref_id" element={<RefPage />} /> // * Page d'une citation

        <Route path="*" element={<h1>Error</h1>} /> // * 404

        <Route path="/admin" element={(isLogged && (user.role === 'Fondateur' || user.role === 'Admin')) ? <AdminDashboard /> : <Navigate to="/" replace />} /> //* Interface admin

      </Routes>

      <Footer />
    </div>
  );
}

export default React.memo(App);
