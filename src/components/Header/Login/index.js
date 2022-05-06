// ? Import modules
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginDropDown } from '../../../feature/loginSlice';

// ? Import style
import './styles.scss';

// ? Composant
function Login() {
  const dispatch = useDispatch();
  function toggleDropdown() {
    dispatch(setLoginDropDown());
  }
  const isOpen = useSelector(({ login }) => login.dropdown);

  return (
    <div className="dropdown">
      <span
        className="signIn_button"
        onClick={toggleDropdown}
      >
        Connexion
      </span>
      {isOpen
        && (
          <div className="dropdown-content">
            <form>
              <input className="content-input" type="text" placeholder="Pseudo" />
              <input className="content-input" type="text" placeholder="Mot de passe" />
              <span className="dropdown-content-login"> se connecter </span>
            </form>
          </div>
        )
      }
    </div >

  );
}

export default React.memo(Login);
