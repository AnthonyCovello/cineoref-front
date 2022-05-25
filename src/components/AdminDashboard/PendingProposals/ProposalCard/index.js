// ? Import modules
import React, { useState } from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import PropTypes from 'prop-types';
import { FaWindowClose } from 'react-icons/fa';

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
  const enable = !isDisable ? 'enable' : '';
  return (
    <motion.div
      className="expandedProposalCard"
      layoutId={param.refId}
      // onClick={setExpanded}
    >
      <FaWindowClose className="text-porange cursor-pointer" onClick={setExpanded} />
      <input
        type="text"
        className={enable}
        placeholder={param.citation}
      />
      <input
        type="text"
        className={enable}
        placeholder={param.show}
      />
      <input
        type="text"
        className={enable}
        placeholder={param.character}
      />
      <input
        type="text"
        className={enable}
        placeholder={param.artist}
      />
      {isDisable
        ? <button className="py-2 px-4 rounded font-bold text-[1.2rem]" type="button" onClick={() => setIsDisable(!isDisable)}>Modifier</button>
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
  }).isRequired,
};

export default React.memo(ProposalCard);
