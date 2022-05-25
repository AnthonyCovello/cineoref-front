/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/label-has-associated-control */
// ? Import modules
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import {
  Formik, Field, Form, ErrorMessage,
} from 'formik';
import { proposal } from '../../features/proposalSlice';
import { clearMessage } from '../../features/messageSlice';
import { changeTabTitle } from '../../utlis';

// ? Import style
import './styles.scss';

// ? Composant
function ProposalForm() {
  const dispatch = useDispatch();
  const [successful, setSuccessful] = useState(false);
  const { message } = useSelector((state) => state.message);
  const user = JSON.parse(localStorage.getItem('user'));
  const { user_id } = user;

  changeTabTitle('Proposition de citation');

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    title: '',
    category: '--Choisissez un média--',
    character: '',
    artist: '',
    reference: '',
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .test(
        'len',
        'Le titre doit contenir au moins deux caractères.',
        (val) => val
          && val.toString().length >= 2,
      ),
    category: Yup.string()
      .test(
        'len',
        'Veuillez sélectionner un média.',
        (val) => val.toString() === 'movie'
          || val.toString() === 'serie'
          || val.toString() === 'anime'
          || val.toString() === 'cartoon',
      ),
    character: Yup.string()
      .test(
        'len',
        'Le nom du personnage doit contenir 3 à 20 caractères',
        (val) => val
          && val.toString().length >= 3
          && val.toString().length <= 20,
      ),
    artist: Yup.string()
      .test(
        'len',
        'Le nom de l\'artiste doit contenir 3 à 20 caractères',
        (val) => val
          && val.toString().length >= 3
          && val.toString().length <= 20,
      ),
    reference: Yup.string()
      .test(
        'len',
        'La citation doit contenir au moins dix caractères.',
        (val) => val
          && val.toString().length >= 10,
      ),
  });

  const handleSubmit = (formValue, actions) => {
    const {
      title, category, character, artist, reference,
    } = formValue;
    setSuccessful(false);
    dispatch(
      proposal({
        title, category, character, artist, reference, user_id,
      }),
    )
      .unwrap()
      .then(() => {
        setSuccessful(true);
        actions.resetForm();
      })
      .catch(() => setSuccessful(false));
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="proposal-form flex flex-col items-center w-2/4 py-12 px-40 mx-auto rounded-md cursor-context-menu tablet:w-4/5 tablet:px-20 phone:w-11/12 phone:py-4 phone:px-4" action="" method="post">
          <Link className="proposal-form-returnButton text-porange text-[2rem] mr-auto h-[2.3rem] rounded phone:text-[1.5rem] phone:h-[1.9rem]" to="/" title="Retourner à la page d'accueil">
            <BsFillArrowLeftSquareFill />
          </Link>
          <h1 className="proposal-form-title text-[2rem] text-center font-bold text-porange phone:text-[1.9rem] phone:mt-2">Proposer une citation</h1>
          <p className="my-6 text-center tablet:text-[0.9rem] phone:text-[0.8rem]">
            Veuillez vérifier les informations avant de valider la proposition.
          </p>
          <div className="proposal-form-group">
            <label className="proposal-form-label" htmlFor="title">
              Titre de l'oeuvre
            </label>
            <Field type="text" className="input" name="title" id="title" />
            <ErrorMessage
              name="title"
              component="div"
              className="errorMessage"
            />
          </div>
          <div className="proposal-form-group">
            <label className="proposal-form-label" htmlFor="category">
              Média
            </label>
            <Field as="select" name="category" id="category" className="input">
              <option className="selectInput-options"> --Choisissez un média-- </option>
              <option className="selectInput-options" value="movie">Film</option>
              <option className="selectInput-options" value="serie">Série</option>
              <option className="selectInput-options" value="anime">Animé</option>
              <option className="selectInput-options" value="cartoon">Dessin animé</option>
            </Field>
            <ErrorMessage
              name="category"
              component="div"
              className="errorMessage"
            />
          </div>
          <div className="proposal-form-group">
            <label className="proposal-form-label" htmlFor="character">
              Personnage
            </label>
            <Field type="text" className="input" name="character" id="character" />
            <ErrorMessage
              name="character"
              component="div"
              className="errorMessage"
            />
          </div>
          <div className="proposal-form-group">
            <label className="proposal-form-label" htmlFor="artist">
              Artiste
            </label>
            <Field type="text" className="input" name="artist" id="artist" />
            <ErrorMessage
              name="artist"
              component="div"
              className="errorMessage"
            />
          </div>
          <div className="proposal-form-group">
            <label className="proposal-form-label" htmlFor="reference">
              Citation
            </label>
            <Field
              as="textarea"
              className="bg-[#C8C8C8] text-[#000] text-center p-1 rounded-md resize min-h-[5rem] min-w-[20rem] max-h-[15rem] max-w-[40rem] tablet:max-w-[35rem] phone:resize-y phone:max-h-[10rem] phone:min-w-[17rem]"
              name="reference"
              id="reference"
            />
            <ErrorMessage
              name="reference"
              component="div"
              className="errorMessage"
            />
          </div>
          <button className="proposal-form-button mx-auto py-1 px-4 text-[1.5rem] font-bold rounded" type="submit">Valider</button>
          {message ? (
            <div
              className={
                successful
                  ? 'bg-[#33CC66] text-[#003300] p-4 mt-4 text-center rounded phone:text-[0.9rem]'
                  : 'bg-[#F8D7DA] text-[#82212F] p-4 mt-4 text-center rounded phone:text-[0.9rem]'
              }
              role="alert"
            >
              {message}
            </div>
          )
            : ''}
        </Form>
      </Formik>
    </div>
  );
}

export default React.memo(ProposalForm);
