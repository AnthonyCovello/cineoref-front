import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// ? Composant
function List({ letter }) {
  console.log(letter);
  return (
    <li>
      {letter.map((data) => (
        <Link
          to={`/${data.category}/${data.id}/refs`}
          key={data.id}
          className=""
        >{data.name}
        </Link>
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
