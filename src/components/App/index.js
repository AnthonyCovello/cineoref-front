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
//* Test
import Protected from '../Protected';

// ? Import style
import './styles.scss';

// ? Composant
function App() {
  const isLogged = useSelector(({ auth }) => auth.isLoggedIn);

  return (
    <div className="app m-0 tracking-[2px]">
      <Header />

      <Routes>

        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/registration" element={<SignUp />} />

        {/* //* Test 1 */}
        <Route path="/proposal" element={isLogged ? <ProposalForm /> : <Navigate to="/" replace />} />
        {/* //* Test2 */}
        {/* <Route
          path="/proposal"
          element={<Protected isLogged={isLogged}><ProposalForm /></Protected>}
        /> */}

        <Route path="/ref" element={<RefPage />} />
        <Route path="*" element={<h1>Error</h1>} />

      </Routes>

      <Footer />
    </div>
  );
}

export default React.memo(App);
