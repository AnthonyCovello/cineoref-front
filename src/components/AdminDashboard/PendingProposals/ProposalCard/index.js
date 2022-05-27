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
function ProposalCard(props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <LayoutGroup>
      {expanded && (<ExpandedProposalCard param={props} setExpanded={() => setExpanded(false)} />)}
      <CompactProposalCard param={props} setExpanded={() => setExpanded(true)} />
    </LayoutGroup>
  );
}

// ? Compact Card
function CompactProposalCard({ param, setExpanded }) {
  return (
    <motion.div
      className="compactProposalCard relative h-12 p-4 w-full flex items-center gap-12 text-[1.5rem] rounded cursor-pointer tablet:text-[1.2rem]"
      layoutId={param.refId}
      onClick={setExpanded}
    >
      <p className="ref"><span>Ref:</span>{param.citation}</p>
      <p className="caractere"><span>Personnage:</span>{param.character}</p>
    </motion.div>
  );
}

// ? Expanded Card
function ExpandedProposalCard({ param, setExpanded }) {
  const [isDisable, setIsDisable] = useState(true);
  const [valueCitation, setValueCitation] = useState(param.citation);
  const [valueMedia, setValueMedia] = useState(param.media);
  const [valueCharacter, setValueCharacter] = useState(param.character);
  const [valueArtist, setValueArtist] = useState(param.artist);
  const [valueShow, setValueShow] = useState(param.show);
  const [isSucces, setIsSucces] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // ? function to handleChanges
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.patch(`https://cinoref-api.herokuapp.com/admin/dashboard/editing/${param.refId}`, {
      ref: valueCitation,
      category: valueMedia,
      character: valueCharacter,
      artist: valueArtist,
      title: valueShow,
    }).then((res) => {
      setIsDisable(!isDisable);
      if (res) {
        setIsSucces(true);
        param.callAPI();
        setTimeout(() => setIsSucces(false), 2000);
      }
    });
  };

  const handleValidation = () => {
    axios.patch(`https://cinoref-api.herokuapp.com/admin/dashboard/validating/${param.refId}`).then((res) => {
      if (res) {
        setIsDisable(!isDisable);
        param.callAPI();
      }
    });
  };

  const handleDelete = () => {
    axios.delete(`https://cinoref-api.herokuapp.com/ref/${param.refId}`).then((res) => {
      if (res) {
        param.callAPI();
      }
    });
  };

  return (
    <motion.div
      className="expandedProposalCard absolute z-10 top-36 left-[32rem] h-fit w-3/5 p-4 rounded-md"
      layoutId={param.refId}
    >
      <FaWindowClose className="ml-auto text-[1.5rem] text-porange cursor-pointer" onClick={setExpanded} />
      <form action="PATCH" onSubmit={handleSubmit} className="expandedProposalCard-form flex flex-col items-center h-full w-3/5 px-20 mb-4 mx-auto tablet:w-4/5 tablet:px-20 phone:w-11/12 phone:py-4 phone:px-4">
        <div className="expandedProposalCard-form-group">
          <label className="expandedProposalCard-form-group-label" htmlFor="title">
            Titre de l'oeuvre
          </label>
          <input
            name="title"
            id="title"
            type="text"
            value={valueShow}
            disabled={isDisable}
            onChange={(e) => setValueShow(e.target.value)}
          />
        </div>
        <div className="expandedProposalCard-form-group">
          <label className="expandedProposalCard-form-group-label" htmlFor="category">
            Média
          </label>
          <select
            name="media"
            id="category"
            defaultValue={valueMedia}
            disabled={isDisable}
            onChange={(e) => setValueMedia(e.target.value)}
          >
            <option value="movie">Film</option>
            <option value="serie">Série</option>
            <option value="anime">Animé</option>
            <option value="cartoon">Dessins animés</option>
          </select>
        </div>
        <div className="expandedProposalCard-form-group">
          <label className="expandedProposalCard-form-group-label" htmlFor="character">
            Personnage
          </label>
          <input
            type="text"
            id="character"
            value={valueCharacter}
            disabled={isDisable}
            onChange={(e) => setValueCharacter(e.target.value)}
          />
        </div>
        <div className="expandedProposalCard-form-group">
          <label className="expandedProposalCard-form-group-label" htmlFor="artist">
            Artiste
          </label>
          <input
            type="text"
            id="artist"
            value={valueArtist}
            disabled={isDisable}
            onChange={(e) => setValueArtist(e.target.value)}
          />
        </div>
        <div className="expandedProposalCard-form-group">
          <label className="expandedProposalCard-form-group-label" htmlFor="reference">
            Citation
          </label>
          <textarea
            type="text"
            id="reference"
            className="text-center p-1 rounded-md resize min-h-[5rem] min-w-[20rem] max-h-[15rem] max-w-[40rem] tablet:max-w-[35rem] phone:resize-y phone:max-h-[10rem] phone:min-w-[17rem]"
            value={valueCitation}
            disabled={isDisable}
            onChange={(e) => setValueCitation(e.target.value)}
          />
        </div>
        <div className="w-full flex justify-evenly">
          {isDisable
            ? (
              <>
                <button
                  className="expandedProposalCard-form-button py-1 px-4 text-[1.5rem] font-bold rounded"
                  type="button"
                  onClick={() => setIsDisable(!isDisable)}
                >
                  Modifier
                </button>
                <button
                  className="expandedProposalCard-form-button py-1 px-4 text-[1.5rem] font-bold rounded"
                  type="button"
                  onClick={() => setShowDeleteModal(true)}
                >
                  Supprimer
                </button>
                <button
                  className="expandedProposalCard-form-button py-1 px-4 text-[1.5rem] font-bold rounded"
                  type="button"
                  onClick={handleValidation}
                >
                  Valider
                </button>
              </>
            )
            : (
              <>
                <button
                  className="expandedProposalCard-form-button py-1 px-4 text-[1.5rem] font-bold rounded"
                  type="button"
                  onClick={() => {
                    setIsDisable(!isDisable);
                  }}
                >Annuler
                </button>
                <button className="expandedProposalCard-form-button py-1 px-4 text-[1.5rem] font-bold rounded" type="submit">Sauvegarder</button>
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
                <div className="mb-5 font-bold text-lg">Supprimer la proposition ?</div>
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

CompactProposalCard.propTypes = {
  setExpanded: PropTypes.func.isRequired,
  param: PropTypes.shape({
    citation: PropTypes.string.isRequired,
    show: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    refId: PropTypes.number.isRequired,
  }).isRequired,
};

ExpandedProposalCard.propTypes = {
  setExpanded: PropTypes.func.isRequired,
  param: PropTypes.shape({
    citation: PropTypes.string.isRequired,
    show: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    refId: PropTypes.number.isRequired,
    media: PropTypes.string.isRequired,
    callAPI: PropTypes.func.isRequired,
  }).isRequired,
};

export default React.memo(ProposalCard);
