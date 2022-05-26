// ? Import modules
import React, { useState } from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import PropTypes from 'prop-types';
import { FaWindowClose } from 'react-icons/fa';

// ? Import styles
import './styles.scss';

// ? Composant Card
function UserCard(props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <LayoutGroup>
      {expanded ? (
        <ExpandedUserCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactUserCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </LayoutGroup>
  );
}

// ? Composant Compact Card
function CompactUserCard({ param, setExpanded }) {
  return (
    <motion.div
      className="compactUserCard relative h-12 p-4 w-full flex items-center gap-12 text-[1.5rem] rounded cursor-pointer tablet:text-[0.9rem]"
      layoutId={param.user_id}
      onClick={setExpanded}
    >
      <p className="username truncate"><span>Pseudo: </span>{param.username}</p>
      <p className="role"><span>Rôle: </span>{param.role}</p>
    </motion.div>
  );
}

// ? Composant Expanded Card
function ExpandedUserCard({ param, setExpanded }) {
  return (
    <motion.div
      className="expandedUserCard"
      layoutId={param.user_id}
      onClick={setExpanded}
    >
      <FaWindowClose className="text-porange cursor-pointer" onClick={setExpanded} />
      <span>{param.username}</span>
      <span>{param.role}</span>
      <span>{param.grade}</span>
      <span>{param.email}</span>
      <span>{param.birthday}</span>
      <span>{param.signup}</span>
    </motion.div>
  );
}

CompactUserCard.propTypes = {
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

ExpandedUserCard.propTypes = {
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

export default React.memo(UserCard);
