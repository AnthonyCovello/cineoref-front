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
          className="linkToMedia w-[15%] flex flex-col p-2 m-2 rounded tablet:w-[22%] phone:w-[44%]"
        >
          <img className="placeHolder mb-2 rounded" src="https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289_960_720.jpg" alt="Placeholder" />
          <p className="linkToMedia-text font-bold text-center phone:text-[0.8rem]">{data.name}</p>
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
