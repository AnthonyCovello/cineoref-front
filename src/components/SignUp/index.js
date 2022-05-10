/* eslint-disable jsx-a11y/label-has-associated-control */
// ? Import modules
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import {
  Formik, Field, Form, ErrorMessage,
} from 'formik';
import { register } from '../../features/authSlice';
import { clearMessage } from '../../features/messageSlice';

// ? Import style
import './styles.scss';

// ? Composant
function SignUp() {
  const dispatch = useDispatch();
  const [successful, setSuccessful] = useState(false);
  const navigate = useNavigate();
  const { message } = useSelector((state) => state.message);
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    username: '',
    email: '',
    password: '',
    birthday: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .test(
        'len',
        'Le pseudo doit contenir 3 à 20 caractères.',
        (val) => val
          && val.toString().length >= 3
          && val.toString().length <= 20,
      ),
    email: Yup.string()
      .email('Adresse mail non valide.'),
    password: Yup.string()
      .test(
        'len',
        'Le mot de passe doit contenir au moins 6 caractères.',
        (val) => val && val.toString().length >= 6,
      ),
    birthday: Yup.date()
      .min(new Date(1900, 0, 1), 'Ça m\'etonnerait que tu aies plus de 120 ans.')
      .max(new Date(Date.now()), 'Marty reviens du futur.'),
  });
  const handleRegister = (formValue) => {
    const {
      username, email, birthday, password,
    } = formValue;
    setSuccessful(false);
    dispatch(register({
      username, email, birthday, password,
    }))
      .unwrap()
      .then(() => {
        setSuccessful(true);
        navigate('/');
      })
      .catch(() => {
        setSuccessful(false);
      });
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleRegister}
      >
        <Form className="signUp-form" action="" method="post">
          <Link className="signUp-form-returnButton" to="/" title="Retourner à la page d'accueil">
            <BsFillArrowLeftSquareFill />
          </Link>
          <h1 className="signUp-form-title">Créer un compte</h1>
          <p className="signUp-form-instructions">Le pseudo doit être unique et sera visible des autres utilisateur.</p>
          <div className="form-group">
            <label className="signUp-form-label" htmlFor="username">
              Pseudo
            </label>
            <Field
              type="text"
              name="username"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="alert alert-danger"
            />
          </div>
          <div className="form-group">
            <label className="signUp-form-label" htmlFor="email">
              Adresse mail
            </label>
            <Field type="email" name="email" />
            <ErrorMessage
              name="email"
              component="div"
              className="alert alert-danger"
            />
          </div>
          <div className="form-group">
            <label className="signUp-form-label" htmlFor="password">
              Mot de passe
            </label>
            <Field type="password" name="password" />
            <ErrorMessage
              name="password"
              component="div"
              className="alert alert-danger"
            />
          </div>
          <div className="form-group">
            <label className="signUp-form-label" htmlFor="birthday">
              Date de naissance
            </label>
            <Field type="date" name="birthday" />
            <ErrorMessage
              name="birthday"
              component="div"
              className="alert alert-danger"
            />
          </div>
          <p className="signUp-form-cgu">
            En cliquant sur <strong>S'inscrire</strong>, vous confirmez avoir lu et accepté les <Link to="/cgu">Conditions d'utilisation</Link>.
          </p>
          <button className="signUp-form-button" type="submit">Valider</button>
        </Form>
      </Formik>
      {message && (
        <div className="form-group-signup">
          <div className="alert-signup alert-danger" role="alert">
            {message}
          </div>
        </div>
      )}
    </div>
  );
}

export default React.memo(SignUp);
