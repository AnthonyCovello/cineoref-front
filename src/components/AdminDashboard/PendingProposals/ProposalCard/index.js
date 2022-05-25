// ? Import modules
import React, { useState } from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import PropTypes from 'prop-types';
import { FaWindowClose } from 'react-icons/fa';
import axios from 'axios';

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
      className="expandedProposalCard"
      layoutId={param.refId}
    // onClick={setExpanded}
    >
      <FaWindowClose className="text-porange cursor-pointer" onClick={setExpanded} />
      <form action="PATCH" onSubmit={handleSubmit} className="text-black">
        <textarea
          type="text"
          className={enable}
          value={valueCitation}
          disabled={isDisable}
          onChange={(e) => setValueCitation(e.target.value)}
        />
        <input
          type="text"
          className={enable}
          value={valueShow}
          disabled={isDisable}
          onChange={(e) => setValueShow(e.target.value)}
        />
        <select
          name="media"
          disabled={isDisable}
          defaultValue={valueMedia}
          onChange={(e) => setValueMedia(e.target.value)}
          className="text-porange"
        >
          <option value="movie">Film</option>
          <option value="serie">Série</option>
          <option value="anime">Animé</option>
          <option value="cartoon">Dessin animé</option>
        </select>
        <input
          type="text"
          className={enable}
          value={valueCharacter}
          disabled={isDisable}
          onChange={(e) => setValueCharacter(e.target.value)}
        />
        <input
          type="text"
          className={enable}
          value={valueArtist}
          disabled={isDisable}
          onChange={(e) => setValueArtist(e.target.value)}
        />
        {isDisable
          ? (
            <div>
              <button
                className="py-2 px-4 rounded font-bold text-[1.2rem]"
                type="button"
                onClick={() => setIsDisable(!isDisable)}
              >
                Modifier
              </button>
              <button
                className="py-2 px-4 rounded font-bold text-[1.2rem]"
                type="button"
                onClick={handleDelete}
              >
                Supprimer
              </button>
              <button
                className="py-2 px-4 rounded font-bold text-[1.2rem]"
                type="button"
                onClick={handleValidation}
              >
                Valider
              </button>
            </div>
          )
          : (
            <>
              <button className="py-2 px-4 rounded font-bold text-[1.2rem]" type="submit">Sauvegarder</button>
              <button
                className="py-2 px-4 rounded font-bold text-[1.2rem]"
                type="button"
                onClick={() => {
                  setIsDisable(!isDisable);
                }}
              >annuler
              </button>
            </>
          )}
        {isSucces && (
          <p> modifications enregistrées </p>
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
