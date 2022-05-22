/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// ? import Style
import '../styles.scss';

// ? Composant
function List({ letter, listTheme }) {
  return (
    <li className="flex flex-wrap">
      {letter.map((data) => (
        <Link
          to={`/${listTheme}/${data.category}/${data.id}/refs`}
          key={data.id}
          className="linkToMedia w-48 flex flex-col p-2 m-2 rounded tablet:w-[22%]"
        >
          <img className="placeHolder mb-2 rounded" src="https://cdn.pixabay.com/photo/2022/05/17/04/39/cat-7201639_960_720.jpg" alt="Placeholder" />
          <p className="linkToMedia-text font-bold text-center">{data.name}</p>
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
