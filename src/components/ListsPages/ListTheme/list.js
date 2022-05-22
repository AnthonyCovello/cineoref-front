import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// ? import Style
import '../styles.scss';

// ? Composant
function List({ letter, listTheme }) {
  return (
    <li>
      {letter.map((data) => (
        <Link
          to={`/${listTheme}/${data.category}/${data.id}/refs`}
          key={data.id}
          className="linkToMedia flex flex-col hover:text-porange p-3 my-2 rounded tablet:max-h-min"
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
  listTheme: PropTypes.string.isRequired,
};

export default React.memo(List);
