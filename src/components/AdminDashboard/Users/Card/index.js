// ? Import modules
import React, { useState } from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import PropTypes from 'prop-types';

// ? Import styles
import './styles.scss';

// ? Composant Card
function Card(props) {
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
      className="CompactCard"
      layoutId={param.user_id}
      onClick={setExpanded}
    >
      <p className="username truncate"><span>Pseudo: </span>{param.username}</p>
      <p className="role"><span>Rôle: </span>{param.role}</p>
    </motion.div>
  );
}

// ? Composant Expanded Card
function ExpandedCard({ param, setExpanded }) {
  return (
    <motion.div
      className="ExpandedCard"
      layoutId={param.user_id}
      onClick={setExpanded}
    >
      <span>{param.username}</span>
      <span>{param.role}</span>
      <span>{param.grade}</span>
      <span>{param.email}</span>
      <span>{param.birthday}</span>
      <span>{param.signup}</span>
    </motion.div>
  );
}

CompactCard.propTypes = {
  setExpanded: PropTypes.func.isRequired,
  param: PropTypes.shape({
    username: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    grade: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
    signup: PropTypes.string.isRequired,
    user_id: PropTypes.number.isRequired,
  }).isRequired,
};

ExpandedCard.propTypes = {
  setExpanded: PropTypes.func.isRequired,
  param: PropTypes.shape({
    username: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    grade: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    birthday: PropTypes.string.isRequired,
    signup: PropTypes.string.isRequired,
    user_id: PropTypes.number.isRequired,
  }).isRequired,
};

export default React.memo(Card);
