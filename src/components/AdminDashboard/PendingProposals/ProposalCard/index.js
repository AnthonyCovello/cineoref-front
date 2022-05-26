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
      {expanded ? (
        <ExpandedProposalCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactProposalCard param={props} setExpanded={() => setExpanded(true)} />
      )}
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
      <p className="ref truncate"><span>Ref: </span>{param.citation}</p>
      <p className="caractere truncate"><span>Personnage: </span>{param.character}</p>
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

  const enable = !isDisable ? 'enable' : '';

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
        setTimeout(() => setIsSucces(false), 3000);
      }
    });
  };

  const handleValidation = () => {
    axios.patch(`https://cinoref-api.herokuapp.com/admin/dashboard/validating/${param.refId}`).then((res) => {
      if (res) {
        setIsDisable(!isDisable);
      }
    });
  };

  const handleDelete = () => {
    axios.delete(`https://cinoref-api.herokuapp.com/ref/${param.refId}`).then((res) => {
      if (res) {
        setIsDisable(!isDisable);
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
          <label className="expandedProposalCard-form-label" htmlFor="title">
            Titre de l'oeuvre
          </label>
          <input
            name="title"
            id="title"
            type="text"
            className={`${enable} input`}
            value={valueShow}
            disabled={isDisable}
            onChange={(e) => setValueShow(e.target.value)}
          />
        </div>
        <div className="expandedProposalCard-form-group">
          <label className="expandedProposalCard-form-label" htmlFor="category">
            Média
          </label>
          <select
            name="media"
            id="category"
            className="input"
            defaultValue={valueMedia}
            disabled={isDisable}
            onChange={(e) => setValueMedia(e.target.value)}
          >
            <option value="movie">Film</option>
            <option value="serie">Série</option>
            <option value="anime">Animé</option>
            <option value="cartoon">Dessin animé</option>
          </select>
        </div>
        <div className="expandedProposalCard-form-group">
          <label className="expandedProposalCard-form-label" htmlFor="character">
            Personnage
          </label>
          <input
            type="text"
            id="character"
            className={`${enable} input`}
            value={valueCharacter}
            disabled={isDisable}
            onChange={(e) => setValueCharacter(e.target.value)}
          />
        </div>
        <div className="expandedProposalCard-form-group">
          <label className="expandedProposalCard-form-label" htmlFor="artist">
            Artiste
          </label>
          <input
            type="text"
            id="artist"
            className={`${enable} input`}
            value={valueArtist}
            disabled={isDisable}
            onChange={(e) => setValueArtist(e.target.value)}
          />
        </div>
        <div className="expandedProposalCard-form-group">
          <label className="expandedProposalCard-form-label" htmlFor="reference">
            Citation
          </label>
          <textarea
            type="text"
            id="reference"
            className="bg-[#C8C8C8] text-[#000] text-center p-1 rounded-md resize min-h-[5rem] min-w-[20rem] max-h-[15rem] max-w-[40rem] tablet:max-w-[35rem] phone:resize-y phone:max-h-[10rem] phone:min-w-[17rem]"
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
                  onClick={handleDelete}
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
  }).isRequired,
};

export default React.memo(ProposalCard);
