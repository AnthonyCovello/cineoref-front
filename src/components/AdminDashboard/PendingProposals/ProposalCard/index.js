import React, { useState } from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import PropTypes from 'prop-types';

// ? Import styles
import './styles.scss';

// ? Composant Card
function ProposalCard(props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <LayoutGroup>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </LayoutGroup>
  );
}

// ? Composant Compact Card
function CompactCard({ param, setExpanded }) {
  return (
    <motion.div
      className="CompactCard relative h-12 p-4 w-full flex items-center gap-12 text-[1.5rem] rounded cursor-pointer tablet:text-[1.2rem]"
      layoutId={param.refId}
      onClick={setExpanded}
    >
      <p className="username truncate"><span>Ref: </span>{param.citation}</p>
      <p className="role"><span>Personnage: </span>{param.character}</p>
    </motion.div>
  );
}

// ? Composant Expanded Card
function ExpandedCard({ param, setExpanded }) {
  return (
    <motion.div
      className="ExpandedCard"
      layoutId={param.refId}
      onClick={setExpanded}
    >
      <span>{param.citation}</span>
      <span>{param.show}</span>
      <span>{param.character}</span>
      <span>{param.artist}</span>
    </motion.div>
  );
}

CompactCard.propTypes = {
  setExpanded: PropTypes.func.isRequired,
  param: PropTypes.shape({
    citation: PropTypes.string.isRequired,
    show: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    refId: PropTypes.number.isRequired,
  }).isRequired,
};

ExpandedCard.propTypes = {
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
