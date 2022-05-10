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
  // state
  const [loading, setLoading] = useState(false);
  const { message } = useSelector((state) => state.message);
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

  const islogged = useSelector(({ auth }) => auth.isLoggedIn);

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
                />
                <ErrorMessage
                  name="username"
                  component="div"
                // className="alert alert-danger"
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
                // className="alert alert-danger"
                />
                <button type="submit" className="dropdown-content-login"> se connecter </button>
              </Form>
            </Formik>
          </div>
        )}
      {message && (
        <div className="form-group">
          <div className="alert alert-danger" role="alert">
            {message}
          </div>
        </div>
      )}
    </div>
  );
}

export default React.memo(Login);
