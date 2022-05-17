import React from 'react';
import PropTypes from 'prop-types';

// ? Composant
function List({ letter }) {
  return (
    <div>
      {letter.map((data) => (
        <li key={data.id}>{data.name}</li>
      ))}
    </div>
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
