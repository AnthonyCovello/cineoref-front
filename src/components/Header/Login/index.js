// ? Import modules
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import {
  Formik, Field, Form, ErrorMessage,
} from 'formik';
import { setLoginDropDown } from '../../../features/dropDownLoginSlice';
import { login } from '../../../features/authSlice';
import { clearMessage } from '../../../features/messageSlice';

// ? Import style
import './styles.scss';

// ? Composant
function Login(props) {
  const [loading, setLoading] = useState(false);
  const { message } = useSelector((state) => state.message);
  const islogged = useSelector(({ auth }) => auth.isLoggedIn);
  const isOpen = useSelector(({ dropDownlogin }) => dropDownlogin.dropdown);
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
    username: Yup.string().required('This field is required!'),
    password: Yup.string().required('This field is required!'),
  });

  const handleLogin = (formValue) => {
    const { username, password } = formValue;
    // setLoading(true);
    dispatch(login({ username, password }))
      .unwrap()
      .catch(() => {
        setLoading(false);
      });
    if (islogged) {
      dispatch(setLoginDropDown());
    }
  };

  // ouverture du menu de connexion
  const toggleDropdown = () => {
    dispatch(setLoginDropDown());
  };

  return (
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
                <Field
                  className="content-input"
                  name="username"
                  type="text"
                  placeholder="Pseudo"
                  required
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="alert-login alert-danger"
                />
                <Field
                  className="content-input"
                  name="password"
                  type="password"
                  placeholder="Mot de passe"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="alert-login alert-danger"
                />
                <button type="submit" className="dropdown-content-login"> Se connecter </button>
              </Form>
            </Formik>
          </div>
        )}
      {message && (
        <div className="form-group-login">
          <div className="alert-login alert-danger" role="alert">
            {message}
          </div>
        </div>
      )}
    </div>
  );
}

export default React.memo(Login);
