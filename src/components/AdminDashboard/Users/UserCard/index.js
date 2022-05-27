/* eslint-disable jsx-a11y/label-has-associated-control */
// ? Import modules
import axios from 'axios';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaWindowClose } from 'react-icons/fa';
import { motion, LayoutGroup } from 'framer-motion';

// ? Import styles
import './styles.scss';

// ? Composant Card
function UserCard(props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <LayoutGroup>
      {expanded && (<ExpandedUserCard param={props} setExpanded={() => setExpanded(false)} />)}
      <CompactUserCard param={props} setExpanded={() => setExpanded(true)} />
    </LayoutGroup>
  );
}

// ? Compact Card
function CompactUserCard({ param, setExpanded }) {
  return (
    <motion.div
      className="compactUserCard relative h-12 p-4 w-full flex items-center gap-12 text-[1.5rem] rounded cursor-pointer tablet:text-[0.9rem]"
      layoutId={param.user_id}
      onClick={setExpanded}
    >
      <p className="username truncate"><span>Pseudo:</span>{param.username}</p>
      <p className="role"><span>Rôle:</span>{param.role}</p>
    </motion.div>
  );
}

// ? Expanded Card
function ExpandedUserCard({ param, setExpanded }) {
  const [isDisable, setIsDisable] = useState(true);
  const [valueGrade, setValueGrade] = useState(param.grade_id);
  const [valueRole, setValueRole] = useState(param.role_id);
  const [isSucces, setIsSucces] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // ? function to handleChanges
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.patch(`https://cinoref-api.herokuapp.com/admin/dashboard/update/user/${param.user_id}`, {
      role: valueRole,
      grade: valueGrade,
    }).then((res) => {
      setIsDisable(!isDisable);
      if (res) {
        setIsSucces(true);
        param.callAPI();
        setTimeout(() => setIsSucces(false), 2000);
      }
    });
  };

  const handleDelete = () => {
    axios.delete(`https://cinoref-api.herokuapp.com/admin/dashboard/delete/user/${param.user_id}`)
      .then((res) => {
        if (res) {
          param.callAPI();
        }
      });
  };

  return (
    <motion.div
      className="expandedUserCard absolute z-10 top-36 left-[32rem] h-fit w-3/5 p-4 rounded-md"
      layoutId={param.user_id}
    >
      <FaWindowClose className="ml-auto text-[1.5rem] text-porange cursor-pointer" onClick={setExpanded} />

      <form action="PATCH" onSubmit={handleSubmit} className="expandedUserCard-form flex flex-col items-center h-full w-3/5 px-20 mb-4 mx-auto tablet:w-4/5 tablet:px-20 phone:w-11/12 phone:py-4 phone:px-4">
        <div className="expandedUserCard-form-group">
          <h3 className="expandedUserCard-form-group-label">
            Pseudo
          </h3>
          <p>{param.username}</p>
        </div>
        <div className="expandedUserCard-form-group">
          <h3 className="expandedUserCard-form-group-label">
            Rôle
          </h3>
          <select
            defaultValue={valueRole}
            disabled={isDisable}
            onChange={(e) => setValueRole(e.target.value)}
          >
            <option value={2}>Admin</option>
            <option value={1}>Membre</option>
          </select>
        </div>
        <div className="expandedUserCard-form-group">
          <h3 className="expandedUserCard-form-group-label">
            Grade
          </h3>
          <select
            defaultValue={valueGrade}
            disabled={isDisable}
            onChange={(e) => setValueGrade(e.target.value)}
          >
            <option value={1}>Stagiaire</option>
            <option value={2}>Développeur infogrammes</option>
            <option value={3}>Homme de culture</option>
            <option value={4}>Chevalier au lion</option>
            <option value={5}>Le fatigué</option>
          </select>
        </div>
        <div className="expandedUserCard-form-group">
          <h3 className="expandedUserCard-form-group-label">
            Adresse email
          </h3>
          <p>{param.email}</p>
        </div>
        <div className="expandedUserCard-form-group">
          <h3 className="expandedUserCard-form-group-label">
            Date de naissance
          </h3>
          <p>{param.birthday}</p>
        </div>
        <div className="expandedUserCard-form-group">
          <h3 className="expandedUserCard-form-group-label">
            Date d'inscription
          </h3>
          <p>{param.signup}</p>
        </div>
        <div className="w-full flex justify-evenly mt-2">
          {isDisable
            ? (
              <>
                <button
                  className="expandedUserCard-form-button py-1 px-4 text-[1.5rem] font-bold rounded"
                  type="button"
                  onClick={() => setIsDisable(!isDisable)}
                >
                  Modifier
                </button>
                <button
                  className="expandedUserCard-form-button py-1 px-4 text-[1.5rem] font-bold rounded"
                  type="button"
                  onClick={() => setShowDeleteModal(true)}
                >
                  Supprimer
                </button>
              </>
            )
            : (
              <>
                <button
                  className="expandedUserCard-form-button py-1 px-4 text-[1.5rem] font-bold rounded"
                  type="button"
                  onClick={() => {
                    setIsDisable(!isDisable);
                  }}
                >Annuler
                </button>
                <button
                  className="expandedUserCard-form-button py-1 px-4 text-[1.5rem] font-bold rounded"
                  type="submit"
                >
                  Sauvegarder
                </button>
              </>
            )}
        </div>
        {isSucces && (
          <p className="bg-[#33CC66] text-[#003300] p-4 mt-4 text-center rounded phone:text-[0.9rem]">
            Modifications enregistrées
          </p>
        )}
      </form>
      {showDeleteModal
        ? (
          <div className="bg-mblue opacity-80 fixed inset-0 z-50">
            <div className="flex h-screen justify-center items-center">
              <div className="flex-col justify-center border-4 bg-lblue py-6 px-12 rounded-md">
                <div className="mb-5 font-bold text-lg">Supprimer l'utilisateur ?</div>
                <div className="flex justify-between">
                  <button type="button" className="btn-modal py-2 px-4 rounded font-bold text-[1.2rem]" onClick={handleDelete}>Oui</button>
                  <button type="button" className="btn-modal py-2 px-4 rounded font-bold text-[1.2rem]" onClick={() => setShowDeleteModal(false)}>Non</button>
                </div>
              </div>
            </div>
          </div>
        ) : null}
    </motion.div>
  );
}

CompactUserCard.propTypes = {
  setExpanded: PropTypes.func.isRequired,
  param: PropTypes.shape({
    username: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    role_id: PropTypes.number.isRequired,
    grade_id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
    signup: PropTypes.string.isRequired,
    user_id: PropTypes.number.isRequired,
    callAPI: PropTypes.func.isRequired,
  }).isRequired,
};

ExpandedUserCard.propTypes = {
  setExpanded: PropTypes.func.isRequired,
  param: PropTypes.shape({
    username: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    role_id: PropTypes.number.isRequired,
    grade_id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
    signup: PropTypes.string.isRequired,
    user_id: PropTypes.number.isRequired,
    callAPI: PropTypes.func.isRequired,
  }).isRequired,
};

export default React.memo(UserCard);
