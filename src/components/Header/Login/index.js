// ? Import modules
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLoginDropDown } from '../../../feature/dropDownLoginSlice';

// ? Import style
import './styles.scss';

// ? Composant
function Login() {
  const dispatch = useDispatch();

  // handle toggle menu login
  const toggleDropdown = () => {
    dispatch(setLoginDropDown());
  };
  const isOpen = useSelector(({ dropDownlogin }) => dropDownlogin.dropdown);

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
              <input
                className="content-input"
                type="text"
                placeholder="Pseudo"
              />
              <input
                className="content-input"
                type="text"
                placeholder="Mot de passe"
              />
              <button type="submit" className="dropdown-content-login"> se connecter </button>
            </form>
          </div>
        )}
    </div>
  );
}

export default React.memo(Login);
