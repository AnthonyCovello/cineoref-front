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
  changeTabTitle('Proposition de citation');

  const dispatch = useDispatch();
  const [successful, setSuccessful] = useState(false);
  const { message } = useSelector((state) => state.message);

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

  // Todo: ErrorMessage à régler
  const validationSchema = Yup.object().shape({
    title: Yup.string(),
    category: Yup.string(),
    character: Yup.string(),
    artist: Yup.string(),
    ref: Yup.string(),
  });

  const handleSubmit = (formValue, actions) => {
    const {
      title, category, character, artist, reference,
    } = formValue;
    setSuccessful(false);
    dispatch(
      proposal({
        title, category, character, artist, reference,
      }),
    )
      .unwrap()
      .then(() => {
        setSuccessful(true);
        // Todo: afficher un message
        actions.resetForm();
      })
      .catch(() => setSuccessful(false));
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="proposal-form" action="" method="post">
          <Link className="proposal-form-returnButton" to="/" title="Retourner à la page d'accueil">
            <BsFillArrowLeftSquareFill />
          </Link>
          <h1 className="proposal-form-title">Proposer une citation</h1>
          <p className="proposal-form-instructions">
            Veuillez vérifier les informations avant de valider la proposition.
          </p>
          <label className="proposal-form-label" htmlFor="title">
            Titre
          </label>
          <Field type="text" className="input" name="title" required />
          <ErrorMessage
            name="title"
            component="div"
          // className="alert alert-danger"
          />
          <label className="proposal-form-label" htmlFor="category">
            Média
          </label>
          <Field as="select" name="category" className="input">
            <option className="selectInput-options"> --Choisissez un média-- </option>
            <option className="selectInput-options" value="movie">Film</option>
            <option className="selectInput-options" value="serie">Série</option>
            <option className="selectInput-options" value="anime">Animé</option>
            <option className="selectInput-options" value="cartoon">Dessins animés</option>
          </Field>
          <ErrorMessage
            name="category"
            component="div"
          // className="alert alert-danger"
          />
          <label className="proposal-form-label" htmlFor="character">
            Personnage
          </label>
          <Field type="text" className="input" name="character" required />
          <ErrorMessage
            name="character"
            component="div"
          // className="alert alert-danger"
          />
          <label className="proposal-form-label" htmlFor="artist">
            Artiste
          </label>
          <Field type="text" className="input" name="artist" required />
          <ErrorMessage
            name="artist"
            component="div"
          // className="alert alert-danger"
          />
          <label className="proposal-form-label" htmlFor="reference">
            Citation
          </label>
          <Field as="textarea" className="input" name="reference" required />
          <ErrorMessage
            name="reference"
            component="div"
          // className="alert alert-danger"
          />
          <button className="proposal-form-button" type="submit">Valider</button>
        </Form>
      </Formik>
      {message && (
        <div className="form-group">
          <div className="py-4 px-8 font-bold rounded" role="alert">
            {message}
          </div>
        </div>
      )}
    </>
  );
}

export default React.memo(ProposalForm);
