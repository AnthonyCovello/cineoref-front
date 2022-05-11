/* eslint-disable jsx-a11y/label-has-associated-control */
// ? Import modules
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
// import Select from 'react-select';
import {
  Formik, Field, Form, ErrorMessage,
} from 'formik';
import { proposal } from '../../features/proposalSlice';
import { clearMessage } from '../../features/messageSlice';

// ? Import style
import './styles.scss';

// ? Composant
function ProposalForm() {
  const dispatch = useDispatch();
  const [successful, setSuccessful] = useState(false);
  const { message } = useSelector((state) => state.message);

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    title: '',
    category: '--choisissez un média--',
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
        // afficher un message
        actions.resetForm();
      })
      .catch(() => setSuccessful(false));
  };

  // options pour <Select />
  // const options = [
  //   { value: 'film', label: 'Film' },
  //   { value: 'serie', label: 'Série' },
  //   { value: 'anime', label: 'Animé' },
  //   { value: 'cartoon', label: 'Dessins animés' },
  // ];

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
          {/* <Select className="selectInput"
          defaultValue={options[0].value} options={options} name="category" /> */}
          <Field as="select" name="category" className="selectInput">
            <option className="selectInput-options"> --choisissez un média-- </option>
            <option className="selectInput-options" value="film">film</option>
            <option className="selectInput-options" value="serie">serie</option>
            <option className="selectInput-options" value="anime">anime</option>
            <option className="selectInput-options" value="cartoon">cartoon</option>
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
          <div className="alert alert-danger" role="alert">
            {message}
          </div>
        </div>
      )}
    </>
  );
}

export default React.memo(ProposalForm);
