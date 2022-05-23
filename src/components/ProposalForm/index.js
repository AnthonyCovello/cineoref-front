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

  const validationSchema = Yup.object().shape({
    title: Yup.string(),
    category: Yup.string(),
    character: Yup.string(),
    artist: Yup.string(),
    ref: Yup.string(),
  });

  const user = JSON.parse(localStorage.getItem('user'));
  const { user_id } = user;
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
            <Field type="text" className="input" name="title" id="title" required />
            <ErrorMessage
              name="title"
              component="div"
              className="alert alert-danger"
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
              <option className="selectInput-options" value="cartoon">Dessins animés</option>
            </Field>
            <ErrorMessage
              name="category"
              component="div"
              className="alert alert-danger"
            />
          </div>
          <div className="proposal-form-group">
            <label className="proposal-form-label" htmlFor="character">
              Personnage
            </label>
            <Field type="text" className="input" name="character" id="character" required />
            <ErrorMessage
              name="character"
              component="div"
              className="alert alert-danger"
            />
          </div>
          <div className="proposal-form-group">
            <label className="proposal-form-label" htmlFor="artist">
              Artiste
            </label>
            <Field type="text" className="input" name="artist" id="artist" required />
            <ErrorMessage
              name="artist"
              component="div"
              className="alert alert-danger"
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
              required
            />
            <ErrorMessage
              name="reference"
              component="div"
              className="alert alert-danger"
            />
          </div>
          <button className="proposal-form-button mx-auto py-1 px-4 text-[1.5rem] font-bold rounded" type="submit">Valider</button>
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
