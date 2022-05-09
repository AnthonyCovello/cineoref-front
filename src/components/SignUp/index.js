/* eslint-disable jsx-a11y/label-has-associated-control */
// ? Import modules
import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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
      .min(new Date(1900, 0, 1))
      .max(new Date(Date.now())),
  });

  const handleRegister = (formValue) => {
    const {
      username, email, password, birthday,
    } = formValue;
    setSuccessful(false);
    dispatch(register({
      username, email, password, birthday,
    }))
      .unwrap()
      .then(() => {
        setSuccessful(true);
        // return <Redirect to="/profile" />;
      })
      .catch(() => {
        setSuccessful(false);
      });
  };

  return (
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
        <label className="signUp-form-label" htmlFor="username">
          Pseudo
        </label>
        <Field type="text" name="username" data-required="true" required />
        <ErrorMessage
          name="username"
          component="div"
        // className="alert alert-danger"
        />
        <label className="signUp-form-label" htmlFor="email">
          Adresse mail
        </label>
        <Field type="email" name="email" required />
        <ErrorMessage
          name="email"
          component="div"
        // className="alert alert-danger"
        />
        <label className="signUp-form-label" htmlFor="password">
          Mot de passe
        </label>
        <Field type="password" name="password" required />
        <ErrorMessage
          name="password"
          component="div"
        // className="alert alert-danger"
        />
        <label className="signUp-form-label" htmlFor="birthday">
          Date de naissance
        </label>
        <Field type="date" name="birthday" required />
        <ErrorMessage
          name="birthday"
          component="div"
        // className="alert alert-danger"
        />
        <p className="signUp-form-cgu">
          En cliquant sur <strong>S'inscrire</strong>, vous confirmez avoir lu et accepté les <Link to="/cgu">Conditions d'utilisation</Link>.
        </p>
        <button className="signUp-form-button" type="submit">Valider</button>
      </Form>
    </Formik>
  );
}

export default React.memo(SignUp);
