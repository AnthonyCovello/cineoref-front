// ? Import modules
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import {
  Formik, Field, Form, ErrorMessage,
} from 'formik';
import { setLoginDropdown } from '../../../features/dropDownSlice';
import { login } from '../../../features/authSlice';
import { clearMessage, setMessage } from '../../../features/messageSlice';

// ? Import style
import './styles.scss';

// ? Composant
function Login() {
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

  // * Ouverture du menu de connexion
  const toggleDropdown = () => {
    dispatch(setLoginDropdown());
    dispatch(setMessage(''));
  };

  const handleLogin = (formValue) => {
    const { username, password } = formValue;
    dispatch(login({ username, password }))
      .unwrap()
      .catch((error) => {
        console.error(error);
      });
    if (islogged) {
      toggleDropdown();
    }
  };

  return (
    <div className="inline-block relative">
      <span className="signIn_button py-1 px-2 rounded font-bold cursor-pointer tablet:text-[0.8rem] tablet:px-1" onClick={toggleDropdown}>
        Connexion
      </span>
      {isOpen
        && (
          <div className="dropdown-content absolute z-10 -left-4 w-[16rem] mt-5 p-4 rounded-md tablet:-left-0 tablet:w-[12rem] tablet:text-[0.8rem] phone:left-[-5rem]">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleLogin}
            >
              <Form>
                <div>
                  <Field
                    className="content-input rounded py-2 px-3 bg-[#d3d3d3] w-full tablet:py-1"
                    name="username"
                    type="text"
                    placeholder="Pseudo"
                  />
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="alert-login py-2 px-6 rounded mt-2 text-center font-bold tablet:py-1 tablet:px-2"
                  />
                </div>
                <div className="mt-4 tablet:mt-2">
                  <Field
                    className="content-input rounded py-2 px-3 bg-[#d3d3d3] w-full tablet:py-1"
                    name="password"
                    type="password"
                    placeholder="Mot de passe"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="alert-login py-2 px-6 rounded mt-2 text-center font-bold tablet:py-1 tablet:px-2"
                  />
                </div>
                <button type="submit" className="login-button table mt-4 mx-auto py-2 px-3 rounded font-bold text-white tablet:py-1 tablet:px-2 tablet:mt-2"> Se connecter </button>
              </Form>
            </Formik>
            {message ? (
              <div className="p-1.5 mt-4 text-center rounded bg-[#F8D7DA] text-[#82212F]" role="alert">
                {message}
              </div>
            )
              : ''}
          </div>
        )}
    </div>
  );
}

export default React.memo(Login);
