/* eslint-disable jsx-a11y/label-has-associated-control */
// ? Import modules
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import * as Yup from 'yup';
import {
  Formik, Field, Form, ErrorMessage,
} from 'formik';
import { changeTabTitle } from '../../utlis';
import { register } from '../../features/authSlice';
import { clearMessage } from '../../features/messageSlice';
import { setLoginDropdown } from '../../features/dropDownSlice';

// ? Import style
import './styles.scss';

// ? Composant
function SignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [successful, setSuccessful] = useState(false);
  const { message } = useSelector((state) => state.message);
  const isOpen = useSelector(({ dropdown }) => dropdown.dropdownLogin);

  changeTabTitle('Inscription');

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  // * Ouverture du menu de connexion
  const toggleDropdown = () => {
    dispatch(setLoginDropdown());
  };

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
    // setSuccessful(false);
    dispatch(register({
      username, email, birthday, password,
    }))
      .unwrap()
      .then(() => {
        // setSuccessful(true);
        navigate('/');
      })
      .catch(() => {
        // setSuccessful(false);
      });
  };

  return (
    <div onClick={() => {
      if (isOpen === true) toggleDropdown();
    }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleRegister}
      >
        <Form className="signUp-form flex flex-col items-center w-2/5 mx-auto p-12 rounded-md cursor-context-menu tablet:w-4/5 phone:w-11/12 phone:p-6" action="" method="post">
          <Link className="signUp-form-returnButton text-porange text-[2rem] mr-auto h-[2.3rem] rounded phone:text-[1.5rem] phone:h-[1.9rem]" to="/" title="Retourner à la page d'accueil">
            <BsFillArrowLeftSquareFill />
          </Link>
          <h1 className="signUp-form-title text-[2rem] font-bold text-porange phone:text-[1.9rem] phone:mt-2">Créer un compte</h1>
          <p className="my-6 text-center tablet:text-[0.9rem] phone:text-[0.8rem]">Votre pseudo sera visible par les utilisateurs.</p>
          <div className="signUp-form-group">
            <label className="signUp-form-label" htmlFor="username">
              Pseudo
            </label>
            <Field type="text" name="username" id="username" />
            <ErrorMessage
              name="username"
              component="div"
              className="errorMessage"
            />
          </div>
          <div className="signUp-form-group">
            <label className="signUp-form-label" htmlFor="email">
              Adresse mail
            </label>
            <Field type="email" name="email" id="email" />
            <ErrorMessage
              name="email"
              component="div"
              className="errorMessage"
            />
          </div>
          <div className="signUp-form-group">
            <label className="signUp-form-label" htmlFor="password">
              Mot de passe
            </label>
            <Field type="password" name="password" id="password" />
            <ErrorMessage
              name="password"
              component="div"
              className="errorMessage"
            />
          </div>
          <div className="signUp-form-group">
            <label className="signUp-form-label" htmlFor="birthday">
              Date de naissance
            </label>
            <Field type="date" name="birthday" id="birthday" />
            <ErrorMessage
              name="birthday"
              component="div"
              className="errorMessage"
            />
          </div>
          <p className="mt-4 mb-8 text-center phone:text-[0.9rem]">
            En cliquant sur <strong className="font-bold">S'inscrire</strong>, vous confirmez avoir lu et accepté les <Link to="/cgu" className="cgu-link font-bold">Conditions d'utilisation</Link>.
          </p>
          <button className="signUp-form-button mx-auto py-1 px-4 text-[1.5rem] font-bold rounded" type="submit">Valider</button>
          {message ? (
            <div className="p-4 mt-4 text-center rounded bg-[#F8D7DA] text-[#82212F] phone:text-[0.9rem]" role="alert">
              {message}
            </div>
          )
            : ''}
        </Form>
      </Formik>
    </div>
  );
}

export default React.memo(SignUp);
