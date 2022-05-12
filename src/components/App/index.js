/* eslint-disable jsx-a11y/label-has-associated-control */
// ? Import modules
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
//* Test
import { Navigate } from 'react-router-dom';
import Protected from '../Protected';

// ? Import composants
import Header from '../Header';
import Footer from '../Footer';
import Homepage from '../Homepage';
import SignUp from '../SignUp';
import ProposalForm from '../ProposalForm';
import RefPage from '../RefPage';

// ? Import style
import './styles.scss';

// ? Composant
function App() {
  // const isLogged = useSelector(({ auth }) => auth.isLoggedIn);
  const isLogged = false;

  return (
    <div className="app">
      <Header />

      <Routes>

        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={{/* Login */}} />
        <Route path="/registration" element={<SignUp />} />

        {/* //* Test 1 */}
        <Route path="/proposal" element={isLogged ? <ProposalForm /> : <Navigate to="/" replace />} />
        {/* //* Test2 */}
        {/* <Route
          path="/proposal"
          element={<Protected isLogged={isLogged}><ProposalForm /></Protected>}
        /> */}

        <Route path="/ref" element={<RefPage />} />
        {/* <Route path="*" element={<NotFound />} /> */}

      </Routes>

      <Footer />
    </div>
  );
}

export default React.memo(App);
