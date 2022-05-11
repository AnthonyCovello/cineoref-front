// ? Import modules
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import {
  Formik, Field, Form, ErrorMessage,
} from 'formik';
import { setLoginDropdown } from '../../../features/dropDownSlice';
import { login } from '../../../features/authSlice';
import { clearMessage } from '../../../features/messageSlice';

// ? Import style
import './styles.scss';

// ? Composant
function Login(props) {
  const [loading, setLoading] = useState(false);
  const { message } = useSelector((state) => state.message);
  const islogged = useSelector(({ auth }) => auth.isLoggedIn);
  const isOpen = useSelector(({ dropdown }) => dropdown.dropdownLogin);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    username: '',
    password: '',
  };

  // * Schéma de validation
  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Identifiant requis!'),
    password: Yup.string().required('Mot de passe requis!'),
  });

  // ouverture du menu de connexion
  const toggleDropdown = () => {
    dispatch(setLoginDropdown());
  };

  const handleLogin = (formValue) => {
    const { username, password } = formValue;
    // setLoading(true);
    dispatch(login({ username, password }))
      .unwrap()
      .catch(() => {
        setLoading(false);
      });
    if (islogged) {
      toggleDropdown();
    }
  };

  return (
    <div className="connection">
      <div className="dropdown">
        <span className="signIn_button" onClick={toggleDropdown}>
          Connexion
        </span>
        {isOpen
          && (
            <div className="dropdown-content">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleLogin}
              >
                <Form>
                  <div className="form-group-login">
                    <Field
                      className="content-input"
                      name="username"
                      type="text"
                      placeholder="Pseudo"
                    />
                    <ErrorMessage
                      name="username"
                      component="div"
                      className="alert-login"
                    />
                  </div>
                  <div className="form-group-login">
                    <Field
                      className="content-input"
                      name="password"
                      type="password"
                      placeholder="Mot de passe"
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="alert-login"
                    />
                  </div>
                  <button type="submit" className="dropdown-content-login"> Se connecter </button>
                </Form>
              </Formik>
              {message ? (
                <div className="connection-alert-login" role="alert">
                  {message}
                </div>
              )
                : ''}
            </div>
          )}
      </div>
    </div>
  );
}

export default React.memo(Login);
