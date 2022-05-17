import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// ? Composant
function List({ letter }) {
  return (
    <li>
      {letter.map((data) => (
        <Link to="#" key={data.id} className="block">{data.name}</Link>
      ))}
    </li>
  );
}

List.propTypes = {
  letter: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default React.memo(List);
