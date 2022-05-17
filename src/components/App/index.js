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
import Lists from '../Lists';

// ? Import style
import './styles.scss';

// ? Composant
function App() {
  const isLogged = useSelector(({ auth }) => auth.isLoggedIn);

  return (
    <div className="app m-0 tracking-[1.5px]">
      <Header />

      <Routes>

        <Route path="/" element={<Homepage />} />
        <Route path="/user/:id/my-profile" element={<Profile />} />
        <Route path="/user/:id/profile" element={<Profile />} />
        <Route path="/registration" element={<SignUp />} />
        <Route path="/films" element={<Lists />} />
        <Route path="/series" element={<Lists />} />
        <Route path="/animes" element={<Lists />} />
        <Route path="/cartoons" element={<Lists />} />
        <Route path="/artists" element={<Lists />} />
        <Route path="/characters" element={<Lists />} />

        {/* //* Test 1 */}
        <Route path="/proposal" element={isLogged ? <ProposalForm /> : <Navigate to="/" replace />} />
        <Route path="/ref" element={<RefPage />} />
        <Route path="*" element={<h1>Error</h1>} />

      </Routes>

      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default React.memo(App);
