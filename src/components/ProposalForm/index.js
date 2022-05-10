/* eslint-disable jsx-a11y/label-has-associated-control */
// ? Import modules
import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import Select from 'react-select';
import {
  Formik, Field, Form, ErrorMessage,
} from 'formik';

// ? Import style
import './styles.scss';

// ? Composant
function ProposalForm() {
  const dispatch = useDispatch();
  const [successful, setSuccessful] = useState(false);

  const initialValues = {
    title: '',
    category: '',
    character: '',
    artist: '',
    ref: '',
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string(),
    category: Yup.string(),
    character: Yup.string(),
    artist: Yup.string(),
    ref: Yup.string(),
  });

  const handleSubmit = (formValue) => {
    const {
      title, category, character, artist, ref,
    } = formValue;
    setSuccessful(false);
    dispatch(register({
      title, category, character, artist, ref,
    }))
      .unwrap()
      .then(() => {
        setSuccessful(true);
        // afficher un message
      })
      .catch(() => setSuccessful(false));
  };

  const options = [
    { value: 'film', label: 'Film' },
    { value: 'serie', label: 'Série' },
    { value: 'anime', label: 'Animé' },
    { value: 'cartoon', label: 'Dessins animés' },
  ];

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="proposal-form" action="" method="post">
        <Link className="proposal-form-returnButton" to="/" title="Retourner à la page d'accueil">
          <BsFillArrowLeftSquareFill />
        </Link>
        <h1 className="proposal-form-title">Proposition de citation</h1>
        <p className="proposal-form-instructions">Le pseudo doit être unique et sera visible des autres utilisateur.</p>
        <label className="proposal-form-label" htmlFor="title">
          Titre
        </label>
        <Field type="text" name="title" required />
        <ErrorMessage
          name="title"
          component="div"
        // className="alert alert-danger"
        />
        <label className="proposal-form-label" htmlFor="category">
          Média
        </label>
        <Field as={Select} defaultValue={options[0].value} options={options} name="category" />
        <ErrorMessage
          name="category"
          component="div"
        // className="alert alert-danger"
        />
        <label className="proposal-form-label" htmlFor="character">
          Personnage
        </label>
        <Field type="text" name="character" required />
        <ErrorMessage
          name="character"
          component="div"
        // className="alert alert-danger"
        />
        <label className="proposal-form-label" htmlFor="artist">
          Artiste
        </label>
        <Field type="text" name="artist" required />
        <ErrorMessage
          name="artist"
          component="div"
        // className="alert alert-danger"
        />
        <label className="proposal-form-label" htmlFor="ref">
          Citation
        </label>
        <Field as="textarea" name="ref" required />
        <ErrorMessage
          name="ref"
          component="div"
        // className="alert alert-danger"
        />
        <button className="proposal-form-button" type="submit">Valider</button>
      </Form>
    </Formik>
  );
}

export default React.memo(ProposalForm);
